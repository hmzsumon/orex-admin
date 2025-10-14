"use client";
import { formatDate } from "@/lib/functions";
import { useGetUserKycQuery } from "@/redux/features/kyc/kycApi";
import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Link from "next/link";
import { FaEye } from "react-icons/fa";

type KycItem = {
  _id: string;
  user_id: string;
  customer_id: string;
  status: string;
  createdAt: Date;
  profile?: {
    full_name?: string;
    dob?: string;
    address?: string;
    city?: string;
    country?: string;
  };
};

const KycVerification = () => {
  const { data, isLoading, isError, error } = useGetUserKycQuery();
  const verifications: KycItem[] = data?.kycs ?? [];

  const columns: GridColDef[] = [
    {
      field: "date",
      headerName: "Created At",
      width: 160,
      renderCell: (params) => <p className="text-xs">{params.row.date}</p>,
    },
    {
      field: "name",
      headerName: "Name",
      width: 180,
      renderCell: (params) => <p>{params.row.name}</p>,
    },
    {
      field: "customer_id",
      headerName: "Customer ID",
      width: 200,
      renderCell: (params) => (
        <p className="text-xs">{params.row.customer_id}</p>
      ),
    },
    {
      field: "status",
      headerName: "Status",
      width: 140,
      renderCell: (params) => <p className="text-xs">{params.row.status}</p>,
    },
    {
      field: "action",
      headerName: "Action",
      width: 80,
      sortable: false,
      renderCell: (params) => (
        <div className="w-full flex items-center justify-center cursor-pointer">
          <Link href={`/kyc/${params.row.id}`} aria-label="View KYC">
            <FaEye />
          </Link>
        </div>
      ),
    },
  ];

  const rows = verifications
    .slice() // copy
    .sort((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt)) // newest first
    .map((kyc) => ({
      id: kyc._id,
      name: kyc.profile?.full_name ?? "—",
      customer_id: kyc.customer_id,
      date: formatDate(kyc.createdAt),
      status: kyc.status,
    }));

  return (
    <div>
      <h1>Kyc Verification</h1>

      {isError && (
        <p className="text-red-600 text-sm mb-2">
          Failed to load KYC list
          {(error as any)?.message ? `: ${(error as any).message}` : ""}.
        </p>
      )}

      <Box sx={{ height: 480, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          loading={isLoading}
          disableRowSelectionOnClick
          pageSizeOptions={[10, 25, 50]}
          initialState={{
            pagination: { paginationModel: { pageSize: 10, page: 0 } },
          }}
        />
      </Box>
    </div>
  );
};

export default KycVerification;
