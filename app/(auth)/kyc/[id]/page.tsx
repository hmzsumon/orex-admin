"use client";

import { formatDate } from "@/lib/functions";
import {
  useApproveKycMutation,
  useGetSingleUserKycQuery,
  useRejectKycMutation,
} from "@/redux/features/kyc/kycApi";
import { fetchBaseQueryError } from "@/redux/services/helpers";
import { Badge, Button, Card, Modal, Tooltip } from "flowbite-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import {
  FaCalendarAlt,
  FaCheck,
  FaCopy,
  FaFlag,
  FaIdCard,
  FaMapMarkerAlt,
  FaTimes,
  FaUser,
} from "react-icons/fa";
import Select from "react-select";
import PulseLoader from "react-spinners/PulseLoader";
import { toast } from "react-toastify";

type RejectionReason = { value: string; label: string };

const rejectionReasonsOptions: RejectionReason[] = [
  { value: "document_issue", label: "Document Not Clear" },
  { value: "information_mismatch", label: "Information Mismatch" },
  { value: "expired_document", label: "Expired Document" },
  { value: "invalid_document", label: "Invalid Document Type" },
];

const labelClass = "text-xs text-gray-500";
const valueClass = "text-sm font-semibold";

const SmartBadge: React.FC<{ status?: string }> = ({ status }) => {
  const color =
    status === "approved"
      ? "success"
      : status === "rejected"
      ? "failure"
      : status === "under_review" || status === "pending"
      ? "warning"
      : "gray";
  const text =
    status === "approved"
      ? "Approved"
      : status === "rejected"
      ? "Rejected"
      : status === "under_review"
      ? "Under Review"
      : status === "pending"
      ? "Pending"
      : status ?? "Unknown";

  return <Badge color={color}>{text}</Badge>;
};

const CopyText: React.FC<{ text: string; className?: string }> = ({
  text,
  className,
}) => {
  return (
    <button
      type="button"
      className={`inline-flex items-center gap-1 text-xs underline hover:no-underline ${
        className || ""
      }`}
      onClick={() => {
        navigator.clipboard.writeText(text);
        toast.success("Copied!");
      }}
      aria-label="Copy to clipboard"
      title="Copy"
    >
      <FaCopy /> Copy
    </button>
  );
};

const ImgTile: React.FC<{
  src: string;
  title: string;
  onClick: () => void;
}> = ({ src, title, onClick }) => (
  <Card
    className="max-w-xs cursor-pointer transition hover:shadow-lg"
    imgAlt={title}
    imgSrc={src}
    onClick={onClick}
  >
    <h5 className="text-base font-semibold">{title}</h5>
  </Card>
);

const Skeleton: React.FC = () => (
  <div className="space-y-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="p-4 rounded-xl bg-gray-100 dark:bg-gray-800 animate-pulse h-28"
        />
      ))}
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="h-64 rounded-xl bg-gray-100 dark:bg-gray-800 animate-pulse"
        />
      ))}
    </div>
  </div>
);

const SingleKyc = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const { id } = params;

  // ── Data fetch
  const { data, isLoading, isError, error } = useGetSingleUserKycQuery(id);
  const kyc = data?.kyc;

  // ── Map server fields safely
  const {
    _id,
    customer_id,
    user_id,
    status,
    createdAt,
    profile,
    document,
    selfie,
  } = kyc || {};

  const name = profile?.full_name || "—";
  const dob = profile?.dob ? formatDate(profile.dob) : "—";
  const addr = profile?.address || "—";
  const country = profile?.country || "—";
  const city = profile?.city || "—";
  const idType = document?.type || "—";
  const docFront = document?.front_url;
  const docBack = document?.back_url;
  const selfieUrl = selfie?.url;

  // ── Actions
  const [approveKyc, aState] = useApproveKycMutation();
  const [rejectKyc, rState] = useRejectKycMutation();
  const [openApprove, setOpenApprove] = useState(false);
  const [openReject, setOpenReject] = useState(false);
  const [reasons, setReasons] = useState<RejectionReason[]>([]);
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);

  const canAct = status === "under_review" || status === "pending";

  const handleApproveKyc = () => {
    if (!_id) return;
    approveKyc(_id);
  };

  const handleRejectKyc = () => {
    if (!_id) return;
    const payload = { id: _id, reasons: reasons.map((r) => r.label) };
    rejectKyc(payload);
  };

  useEffect(() => {
    if (aState.isSuccess) {
      toast.success("KYC approved successfully");
      setOpenApprove(false);
      router.push("/kyc");
    }
    if (aState.isError && aState.error) {
      toast.error(
        (aState.error as fetchBaseQueryError).data?.message || "Approval failed"
      );
    }
  }, [aState.isSuccess, aState.isError, aState.error, router]);

  useEffect(() => {
    if (rState.isSuccess) {
      toast.success("KYC rejected successfully");
      setOpenReject(false);
      router.push("/kyc");
    }
    if (rState.isError && rState.error) {
      toast.error(
        (rState.error as fetchBaseQueryError).data?.message ||
          "Rejection failed"
      );
    }
  }, [rState.isSuccess, rState.isError, rState.error, router]);

  const headerRight = useMemo(
    () => (
      <div className="flex items-center gap-2">
        <SmartBadge status={status} />
        {customer_id ? (
          <Tooltip content="Customer ID">
            <span className="text-xs rounded-full px-2 py-1 bg-gray-100 dark:bg-gray-800">
              {customer_id}
            </span>
          </Tooltip>
        ) : null}
      </div>
    ),
    [status, customer_id]
  );

  if (isLoading) return <Skeleton />;

  if (isError) {
    return (
      <Card className="p-6">
        <h2 className="text-lg font-semibold text-red-600">
          Failed to load KYC
        </h2>
        <p className="text-sm text-gray-600 mt-1">
          {(error as any)?.data?.message ||
            (error as any)?.error ||
            "Please try again."}
        </p>
      </Card>
    );
  }

  if (!kyc) {
    return (
      <Card className="p-6">
        <h2 className="text-lg font-semibold">No KYC found</h2>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="p-5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div>
            <h1 className="text-xl font-semibold flex items-center gap-2">
              <FaUser /> {name} — KYC Details
            </h1>
            <p className="text-xs text-gray-500 mt-1">
              Created: {formatDate(createdAt)} • ID: {_id?.slice(0, 8)}…
              {_id ? <CopyText text={_id} className="ml-2" /> : null}
            </p>
          </div>
          {headerRight}
        </div>
      </Card>

      {/* Info grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-4">
          <div className="flex items-start gap-3">
            <FaUser className="mt-1" />
            <div>
              <p className={labelClass}>Full Name</p>
              <p className={valueClass}>{name}</p>
            </div>
          </div>
          <div className="mt-3 flex items-start gap-3">
            <FaCalendarAlt className="mt-1" />
            <div>
              <p className={labelClass}>Date of Birth</p>
              <p className={valueClass}>{dob}</p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="mt-1" />
            <div>
              <p className={labelClass}>Address</p>
              <p className={valueClass}>{addr}</p>
              <p className="text-xs text-gray-500 mt-1">
                City: {city} • Country: {country}
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-start gap-3">
            <FaIdCard className="mt-1" />
            <div>
              <p className={labelClass}>ID Type</p>
              <p className={valueClass}>{idType}</p>
            </div>
          </div>
          <div className="mt-3 flex items-start gap-3">
            <FaFlag className="mt-1" />
            <div>
              <p className={labelClass}>User / Customer</p>
              <p className={valueClass}>
                {user_id?.slice(0, 8)}…{" "}
                {user_id ? <CopyText text={String(user_id)} /> : null}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Customer ID: {customer_id || "—"}{" "}
                {customer_id ? <CopyText text={customer_id} /> : null}
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Images */}
      <div>
        <h2 className="text-base font-semibold mb-2">Documents & Selfie</h2>
        <div className="flex flex-wrap gap-4">
          {docFront && (
            <ImgTile
              src={docFront}
              title={`${idType} — Front`}
              onClick={() => setPreviewSrc(docFront)}
            />
          )}
          {docBack && (
            <ImgTile
              src={docBack}
              title={`${idType} — Back`}
              onClick={() => setPreviewSrc(docBack)}
            />
          )}
          {selfieUrl && (
            <ImgTile
              src={selfieUrl}
              title="Selfie"
              onClick={() => setPreviewSrc(selfieUrl)}
            />
          )}
          {!docFront && !docBack && !selfieUrl && (
            <Card className="p-4">
              <p className="text-sm text-gray-500">No images available.</p>
            </Card>
          )}
        </div>
      </div>

      {/* Actions */}
      <Card className="p-4">
        <div className="flex flex-wrap gap-3">
          <Tooltip
            content={
              canAct ? "Approve this KYC" : "Action disabled for this status"
            }
          >
            <span>
              <Button
                color="success"
                onClick={() => setOpenApprove(true)}
                disabled={!canAct || aState.isLoading}
              >
                <FaCheck className="mr-2" /> Approve
              </Button>
            </span>
          </Tooltip>

          <Tooltip
            content={
              canAct ? "Reject this KYC" : "Action disabled for this status"
            }
          >
            <span>
              <Button
                color="failure"
                onClick={() => setOpenReject(true)}
                disabled={!canAct || rState.isLoading}
              >
                <FaTimes className="mr-2" /> Reject
              </Button>
            </span>
          </Tooltip>

          {(aState.isLoading || rState.isLoading) && (
            <div className="inline-flex items-center">
              <PulseLoader loading size={8} />
            </div>
          )}
        </div>
      </Card>

      {/* Preview modal */}
      <Modal show={!!previewSrc} onClose={() => setPreviewSrc(null)} size="4xl">
        <Modal.Header>Preview</Modal.Header>
        <Modal.Body>
          {previewSrc ? (
            <img
              src={previewSrc}
              alt="Preview"
              className="w-full h-auto rounded-lg"
              loading="eager"
              decoding="sync"
            />
          ) : null}
        </Modal.Body>
      </Modal>

      {/* Approve modal */}
      <Modal show={openApprove} onClose={() => setOpenApprove(false)}>
        <Modal.Header>Approve KYC</Modal.Header>
        <Modal.Body>
          <p className="text-sm">
            Are you sure you want to approve this KYC for{" "}
            <strong>{name}</strong>?
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleApproveKyc} disabled={aState.isLoading}>
            {aState.isLoading ? "Approving..." : "Approve"}
          </Button>
          <Button color="gray" onClick={() => setOpenApprove(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Reject modal */}
      <Modal show={openReject} onClose={() => setOpenReject(false)}>
        <Modal.Header>Reject KYC</Modal.Header>
        {rState.isLoading ? (
          <div className="p-6 flex justify-center">
            <PulseLoader loading size={10} />
          </div>
        ) : (
          <>
            <Modal.Body>
              <p className="text-sm mb-2">Select reasons for rejection</p>
              <Select
                id="rejection-reasons"
                isMulti
                options={rejectionReasonsOptions}
                value={reasons}
                onChange={(opts) =>
                  setReasons((opts as RejectionReason[]) || [])
                }
              />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={handleRejectKyc}>Reject KYC</Button>
              <Button color="gray" onClick={() => setOpenReject(false)}>
                Cancel
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </div>
  );
};

export default SingleKyc;
