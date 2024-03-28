import { Metadata } from 'next';
import CustomersTable from '@/app/ui/customers/table';
import { fetchCustomers, fetchFilteredCustomers } from '@/app/lib/data';

export const dynamic = 'force-dynamic';
export const metadata: Metadata = {
  title: 'Customers',
};

const CustomersPage = async ({
  searchParams,
}: {
  searchParams?: { query?: string; page?: string };
}) => {
  const customers = await fetchFilteredCustomers(searchParams?.query ?? '');

  return <CustomersTable customers={customers} />;
};

export default CustomersPage;
