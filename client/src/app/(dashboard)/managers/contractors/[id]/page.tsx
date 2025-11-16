"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { ArrowDownToLine, ArrowLeft, Download } from "lucide-react";
import Loading from "@/components/Loading";
import {
  useGetContractorBookingsQuery,
  useGetContractorQuery,
  useGetPaymentsQuery,
} from "@/state/api";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";

const ContractorCustomers = () => {
  const { id } = useParams();
  const contractorId = Number(id);

  const { data: contractor, isLoading: contractorLoading } =
    useGetContractorQuery(contractorId);
  const { data: bookings, isLoading: bookingLoading } =
    useGetContractorBookingsQuery(contractorId);
  const { data: payments, isLoading: paymentsLoading } =
    useGetPaymentsQuery(contractorId);

  if (contractorLoading || bookingLoading || paymentsLoading)
    return <Loading />;

  const getCurrentMonthPaymentStatus = (bookingId: number) => {
    const currentDate = new Date();
    const currentMonthPayment = payments?.find(
      (payment) =>
        payment.bookingId === bookingId &&
        new Date(payment.dueDate).getMonth() === currentDate.getMonth() &&
        new Date(payment.dueDate).getFullYear() === currentDate.getFullYear()
    );
    return currentMonthPayment?.paymentStatus || "Not Paid";
  };

  return (
    <div className="dashboard-container">
      {/* Back to contractors page */}
      <Link
        href="/managers/contractors"
        className="flex items-center mb-4 hover:text-secondary-500"
        scroll={false}
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        <span>Back to Contractors</span>
      </Link>

      <Header
        title={contractor?.name || "My Contractor"}
        subtitle="Manage Customers and Bookings for this contractor"
      />

      <div className="w-full space-y-6">
        <div className="mt-8 bg-white rounded-xl shadow-md overflow-hidden p-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-2xl font-bold mb-1">Customers Overview</h2>
              <p className="text-sm text-gray-500">
                Manage and view all customers for this contractor.
              </p>
            </div>
            <div>
              <Button
                className={`bg-white border border-gray-300 text-gray-700 py-2
              px-4 rounded-md flex items-center justify-center hover:bg-primary-700 hover:text-primary-50 cursor-not-allowed`}
                disabled
              >
                <Download className="w-5 h-5 mr-2" />
                <span className="">Download All</span>
              </Button>
            </div>
          </div>
          <hr className="mt-4 mb-1" />
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead>Booking Date</TableHead>
                  <TableHead>Total Fee</TableHead>
                  <TableHead>Current Status</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {bookings?.map((booking) => (
                  <TableRow key={booking.id} className="h-24">
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <Image
                          src="/landing-i1.png"
                          alt={booking.customer.name}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                        <div>
                          <div className="font-semibold">
                            {booking.customer.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {booking.customer.email}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        {new Date(booking.startDate).toLocaleDateString()}
                      </div>
                      {/* <div>
                        {new Date(booking.endDate).toLocaleDateString()}
                      </div> */}
                    </TableCell>
                    <TableCell>${booking.totalFee.toFixed(2)}</TableCell>
                    <TableCell>
                      {/* <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          getCurrentMonthPaymentStatus(booking.id) === "Paid"
                            ? "bg-green-100 text-green-800 border-green-300"
                            : "bg-red-100 text-red-800 border-red-300"
                        }`}
                      >
                        {getCurrentMonthPaymentStatus(booking.id) ===
                          "Paid" && (
                          <Check className="w-4 h-4 inline-block mr-1" />
                        )}
                        {getCurrentMonthPaymentStatus(booking.id)}
                      </span> */}
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold border ${
                          booking.application
                            ? booking.application.status === "Approved"
                              ? "bg-green-100 text-green-800 border-green-300"
                              : "bg-yellow-100 text-yellow-800 border-yellow-300"
                            : "bg-red-100 text-red-800 border-red-300"
                        }`}
                      >
                        {booking.application
                          ? booking.application.status
                          : "Rejected"}
                      </span>
                    </TableCell>
                    <TableCell>{booking.customer.phoneNumber}</TableCell>
                    <TableCell>
                      {booking.application?.status === "Approved" && (
                        <Button
                          className={`border border-gray-300 text-gray-700 py-2 px-4 rounded-md flex 
      items-center justify-center font-semibold hover:bg-primary-700 hover:text-primary-50 cursor-not-allowed`}
                          disabled
                        >
                          <ArrowDownToLine className="w-4 h-4 mr-1" />
                          Download Agreement
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractorCustomers;
