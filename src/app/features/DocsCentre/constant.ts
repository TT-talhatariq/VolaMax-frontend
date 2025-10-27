import type { BreadcrumbItem } from '@/app/components/Common/Breadcrumb';

export interface CertificateData {
  name: string;
  refNo: string;
  certifiedProduct: string;
  issuedBy: string;
  country: string;
  startEnd: string;
  file: string;
}

export const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { label: 'Account' },
  { label: 'Company Profile' },
  { label: 'Docs Centre', isActive: true },
];

export const TABS = [
  'Certificates',
  'Test Reports',
  'Honors & Awards',
  'Patents',
  'Trademarks',
] as const;

export const CERTIFICATE_TABLE_COLUMNS = [
  {
    header: 'Name',
    accessor: 'name' as keyof CertificateData,
    className: 'text-gray-900',
  },
  {
    header: 'Ref No',
    accessor: 'refNo' as keyof CertificateData,
  },
  {
    header: 'Certified Product',
    accessor: 'certifiedProduct' as keyof CertificateData,
  },
  {
    header: 'Issued By',
    accessor: 'issuedBy' as keyof CertificateData,
  },
  {
    header: 'Country',
    accessor: 'country' as keyof CertificateData,
  },
  {
    header: 'Start-End',
    accessor: 'startEnd' as keyof CertificateData,
  },
  {
    header: 'File',
    accessor: 'file' as keyof CertificateData,
  },
];

export const MOCK_CERTIFICATE_DATA: CertificateData[] = [
  {
    name: 'Brandie',
    refNo: '1784',
    certifiedProduct: 'Teriyaki sauce',
    issuedBy: 'Nguyen, Shane',
    country: 'France',
    startEnd: '7/27/13',
    file: '18 Mb',
  },
  {
    name: 'Judith',
    refNo: '9261',
    certifiedProduct: 'Easy Cheese',
    issuedBy: 'Flores, Juanita',
    country: 'China',
    startEnd: '5/7/16',
    file: '180 kb',
  },
  {
    name: 'Regina',
    refNo: '9151',
    certifiedProduct: 'Popcorn seasoning',
    issuedBy: 'Henry, Arthur',
    country: 'Russia',
    startEnd: '6/19/14',
    file: '178 kb',
  },
  {
    name: 'Colleen',
    refNo: '1374',
    certifiedProduct: 'Nutella',
    issuedBy: 'Henry, Arthur',
    country: 'USA',
    startEnd: '1/28/17',
    file: '1 Mb',
  },
  {
    name: 'Kathryn',
    refNo: '9359',
    certifiedProduct: 'Doritos',
    issuedBy: 'Miles, Esther',
    country: 'India',
    startEnd: '12/10/13',
    file: '25 Mb',
  },
  {
    name: 'Savannah',
    refNo: '3536',
    certifiedProduct: 'Ruffles',
    issuedBy: 'Henry, Arthur',
    country: 'UK',
    startEnd: '8/15/17',
    file: '26 Mb',
  },
  {
    name: 'Bessie',
    refNo: '1577',
    certifiedProduct: 'Quaker Instant Oatmeal',
    issuedBy: 'Black, Marvin',
    country: 'Russia',
    startEnd: '3/4/16',
    file: '3 Mb',
  },
  {
    name: 'Irma',
    refNo: '4152',
    certifiedProduct: 'Secret Stadium Sauce',
    issuedBy: 'Cooper, Kristin',
    country: 'China',
    startEnd: '5/19/12',
    file: '19 Kb',
  },
  {
    name: 'Gloria',
    refNo: '6690',
    certifiedProduct: 'White pepper',
    issuedBy: 'Black, Marvin',
    country: 'UK',
    startEnd: '1/15/12',
    file: '10 Kb',
  },
];

