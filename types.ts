import { ChartData } from "recharts/types/chart/generateCategoricalChart";

// FIX: Added Auditable type for created/updated tracking.
export interface Auditable {
    createdAt: string;
    createdBy: string;
    updatedAt: string;
    updatedBy: string;
}

// Basic Accounting
export enum TransactionType {
  Income = 'درآمد',
  Expense = 'هزینه',
}

export interface Account {
  id: number;
  name: string;
  type: 'Asset' | 'Revenue' | 'Expense';
}

export interface Transaction {
  id: number;
  date: string;
  description: string;
  accountId: number;
  type: TransactionType;
  amount: number;
}

// Settings
export interface Currency {
    id: number;
    name: string;
    code: string;
}

export interface FiscalYear {
    id: number;
    title: string;
    startDate: string;
    endDate: string;
    mainCurrency: string;
    secondaryCurrency: string;
}

export interface AutoDocSetting {
  formId: string;
  formTitle: string;
  defaultDebtorSubLedgerId: number | null;
  defaultCreditorSubLedgerId: number | null;
  isDebtorEditable: boolean;
  isCreditorEditable: boolean;
}

export enum DetailedCodingSection {
    ASSETS = 'اموال و دارایی',
    PERSONS = 'اشخاص',
    PERSONNEL = 'پرسنل',
    COST_CENTERS = 'مراکز هزینه',
    INCOME_CENTERS = 'مراکز درآمد',
    BANKS = 'بانکها',
    CASHBOXES = 'صندوقها',
    MISC = 'تفصیلی متفرقه',
    ITEMS = 'کالا و اقلام',
    POS_TERMINALS = 'کارتخوان',
    PAYMENT_GATEWAYS = 'درگاه پرداخت',
    WAREHOUSES = 'انبار',
    PROCESSES = 'فرآیندها',
    CHECKBOOKS = 'دسته چک',
}

export interface DetailedCodingSetting {
    id: number;
    section: DetailedCodingSection;
    rangeFrom: number;
    rangeTo: number;
}


// User Management
export interface User {
  id: number;
  username: string;
  personnelId: number | null;
  email: string;
  mobile: string;
  canChangeProfile: boolean;
  userGroupId: number;
}

// User Groups & Permissions
export interface PermissionSet {
    viewList: boolean;
    viewDetails: boolean;
    create: boolean;
    edit: boolean;
    delete: boolean;
}
export type PermissionKey = keyof PermissionSet;

export interface UserGroup {
    id: number;
    name: string;
    permissions: Record<string, Partial<PermissionSet>>; // Key is subView ID or module ID
}


// Grouping Management
export interface FormGroup {
    id: number;
    title: string;
    parentId: number | null;
    children: FormGroup[];
}

// Accounting Heads
export interface AccountHeadSubLedger {
  id: number;
  code: string;
  title: string;
  canLinkToDetailed: boolean;
  active: boolean;
  nature: 'debit' | 'credit' | 'floating';
}

export interface AccountHeadLedger {
  id: number;
  code: string;
  title: string;
  children: AccountHeadSubLedger[];
}

export interface AccountHeadGroup {
  id: number;
  code: string;
  title: string;
  children: AccountHeadLedger[];
}

// Accounting Document
export enum AccountingDocumentType {
    OpeningProvisional = 'افتتاحیه استقرار',
    Opening = 'افتتاحیه',
    Current = 'جاری',
    ClosingTemporary = 'بستن حسابهای موقت',
    Closing = 'اختتامیه',
}

export interface AccountingDocumentRow {
    id: number;
    subLedgerId: number | null;
    detailedId: number | null; // For future use
    debit: number;
    credit: number;
    currencyDebit: number;
    currencyCredit: number;
    description: string;
}

export interface AccountingDocument extends Auditable {
    id: number;
    type: AccountingDocumentType;
    date: string;
    dailyNumber: number;
    docNumber: string;
    trackingNumber: string;
    groupId: number | null;
    currencyCode: string;
    exchangeRate: number;
    description: string;
    rows: AccountingDocumentRow[];
    isIssued: boolean;
}


// Treasury
export interface Bank {
    id: number;
    mainBankName: string;
    branchName: string;
    detailedCode: string;
    branchCode: string;
    openingBalance: number;
    openingDate: string;
    accountNumber: string;
    iban: string;
    cardNumber: string;
    currencyCode: string;
}

export interface Checkbook {
    id: number;
    bankId: number;
    startSerial: string;
    sheetCount: number;
}

export interface Cashbox {
    id: number;
    title: string;
    code: string;
    openingBalance: number;
    currencyCode: string;
}

export interface POSTerminal {
    id: number;
    title: string;
    code: string;
    openingBalance: number;
    serialNumber: string;
    currencyCode: string;
}

export interface PaymentGateway {
    id: number;
    title: string;
    code: string;
    openingBalance: number;
    currencyCode: string;
}

export interface PettyCash {
    id: number;
    title: string;
    relatedSubLedgerId: number;
    relatedPersonId: number;
    limit: number;
    openingBalance: number;
    currencyCode: string;
}

export enum TreasuryTransactionType {
    Cash = 'نقد',
    Document = 'اسناد',
}
export enum TreasuryOperationType {
    Payment = 'پرداخت',
    Receipt = 'دریافت',
    CashManagement = 'مدیریت وجوه نقد',
}

export type TransactionPartyType = 'party' | 'bank' | 'cashbox' | 'pos' | 'gateway' | 'pettyCash';

export interface TransactionParty {
    type: TransactionPartyType | null;
    relatedPartyId: number | null;
    bankId: number | null;
    cashboxId: number | null;
    posId: number | null;
    gatewayId: number | null;
    pettyCashId: number | null;
    docNumber: string;
    dueDate: string;
    sayadNumber: string;
    docBankName: string;
}
export interface TreasuryTransaction extends Auditable {
    id: number;
    transactionType: TreasuryTransactionType;
    operationType: TreasuryOperationType;
    date: string;
    docNumber: string;
    accountingDocNumber: string;
    relatedInvoiceId: number | null;
    amount: number;
    feeAmount: number;
    description: string;
    source: TransactionParty;
    destination: TransactionParty;
    feeSubLedgerId: number | null;
    debtorSubLedgerId: number | null;
    creditorSubLedgerId: number | null;
    hasAccountingDoc: boolean;
    status: 'active' | 'returned' | 'reclaimed' | 'cancelled' | 'assignedToBank';
    statusChangeDate?: string;
    statusChangeDescription?: string;
}

// Purchasing
export enum ContactType {
    Supplier = 'تامین کننده',
    Customer = 'مشتری',
}
interface BasePerson {
    id: number;
    contactType: ContactType;
    code: string;
    nationalId: string;
    economicCode: string;
    workshopCode: string;
    address: string;
    postalCode: string;
    phone: string;
    mobile: string;
    accountNumber: string;
    cardNumber: string;
    iban: string;
}
export interface NaturalPerson extends BasePerson {
    personType: 'natural';
    firstName: string;
    lastName: string;
    openingBalance: number;
}
export interface LegalPerson extends BasePerson {
    personType: 'legal';
    registeredName: string;
    brandName: string;
}
export type Person = NaturalPerson | LegalPerson;

export interface PurchaseInvoiceItem {
    id: number;
    itemId: number;
    quantity: number;
    unitPrice: number; // Stored in main currency
    discount: number; // Discount percentage
}

export type PurchaseInvoiceType = 'items' | 'asset' | 'service';

export interface PurchaseInvoice extends Auditable {
    id: number;
    invoiceType: PurchaseInvoiceType;
    orderNumber: string;
    docNumber: string;
    date: string;
    supplierId: number;
    items: PurchaseInvoiceItem[];
    description: string;
    debtorSubLedgerId: number | null;
    creditorSubLedgerId: number | null;
    currencyCode: string;
    exchangeRate: number;
    tradeDiscount: number; // In main currency
}

// Sales
export interface SalesInvoiceItem {
    id: number;
    productId: number;
    quantity: number;
    unitPrice: number; // Stored in main currency
    discount: number; // Discount percentage
}

export type SalesInvoiceType = 'items' | 'asset' | 'service';

export interface SalesInvoice extends Auditable {
    id: number;
    invoiceType: SalesInvoiceType;
    orderNumber: string;
    docNumber: string;
    date: string;
    customerId: number;
    items: SalesInvoiceItem[];
    description: string;
    debtorSubLedgerId: number | null;
    creditorSubLedgerId: number | null;
    currencyCode: string;
    exchangeRate: number;
    tradeDiscount: number; // In main currency
}


// Warehousing
export type WarehouseType = 'raw_materials' | 'wip' | 'products' | 'used_goods' | 'supplies' | 'consignment' | 'scrap' | 'assets';

export interface Warehouse {
    id: number;
    code: string;
    name: string;
    type: WarehouseType;
    managerId?: number | null;
}

export interface MeasurementUnit {
    id: number;
    title: string;
}

export interface PurchaseItemGroup {
    id: number;
    title: string;
    parentId: number | null;
    children: PurchaseItemGroup[];
}
export interface PurchaseItem {
    id: number;
    code: string;
    title: string;
    primaryUnit: string;
    secondaryUnit?: string;
    lastSupplyPrice: number;
    supplyGroupId: number;
    vatRate: number;
}

export interface ServiceItem {
    id: number;
    code: string;
    title: string;
}

export interface ProductGroup {
    id: number;
    title: string;
    parentId: number | null;
    children: ProductGroup[];
}
export interface ProductComponent {
    componentType: 'purchaseItem' | 'product';
    componentId: number;
    quantity: number;
}
export interface Process {
    id: number;
    manufacturingProcessId: number | null;
    components: ProductComponent[];
}
export interface Product {
    id: number;
    code: string;
    title: string;
    productGroupId: number;
    primaryUnit: string;
    secondaryUnit?: string;
    cost: number;
    processes: Process[];
    defaultWarehouseId?: number | null;
}

export enum WarehouseReceiptType {
    OpeningDeployment = 'افتتاحیه استقرار',
    Opening = 'افتتاحیه',
    Purchase = 'خرید',
    SalesReturn = 'برگشت از فروش',
    Production = 'تولید',
    Other = 'سایر',
    InventoryAdjustment = 'اضافات انبارگردانی',
}

export interface WarehouseReceiptItem {
    id: number;
    purchaseItemId: number;
    quantity: number;
    description?: string;
}

export interface WarehouseReceipt extends Auditable {
    id: number;
    type: WarehouseReceiptType;
    warehouseId: number;
    delivererName: string;
    docNumber: string;
    accountingDocNumber: string;
    groupId: number | null;
    purchaseInvoiceId: number | null;
    date: string;
    time: string;
    debtorSubLedgerId: number | null;
    creditorSubLedgerId: number | null;
    detailedId: number | null; // For future use
    shipmentNumber: string;
    items: WarehouseReceiptItem[];
    description: string;
}

export interface WarehouseReceiptReturn extends Auditable {
    id: number;
    originalReceiptId: number;
    warehouseId: number;
    returnToName: string;
    docNumber: string;
    date: string;
    items: WarehouseReceiptItem[];
    description: string;
}

export enum WarehouseOutboundType {
    Sale = 'فروش',
    Consumption = 'مصرف تولید',
    Other = 'سایر',
}

export interface WarehouseOutboundItem {
    id: number;
    purchaseItemId: number;
    quantity: number;
    description?: string;
}

export interface WarehouseOutbound extends Auditable {
    id: number;
    isReturn: boolean;
    outboundType: WarehouseOutboundType;
    warehouseId: number;
    recipientName: string;
    docNumber: string;
    date: string;
    items: WarehouseOutboundItem[];
    description: string;
}

// FIX: Added missing WarehouseTransferItem interface definition to resolve type errors in multiple components.
export interface WarehouseTransferItem {
    id: number;
    purchaseItemId: number;
    quantity: number;
    description?: string;
}

export interface WarehouseTransfer extends Auditable {
    id: number;
    sourceWarehouseId: number;
    destinationWarehouseId: number;
    docNumber: string;
    date: string;
    items: WarehouseTransferItem[];
    description: string;
}

// Production
export interface ProductManufacturingItem {
    id: number;
    productId: number;
    destinationWarehouseId: number;
    quantity: number;
    unitCost: number;
}

export interface ProductManufacturing extends Auditable {
    id: number;
    date: string;
    docNumber: string;
    accountingDocNumber?: string;
    groupId: number | null;
    items: ProductManufacturingItem[];
    totalCost: number;
}

export interface MachineryGroup {
    id: number;
    title: string;
    parentId: number | null;
    children: MachineryGroup[];
}

export interface Machinery {
    id: number;
    name: string;
    code: string;
    machineryGroupId: number;
    assetSubLedgerId: number | null;
    purchaseDate: string;
    capacity: number;
    capacityUnit: string;
    status: 'active' | 'inactive' | 'maintenance';
}

export interface Workstation {
    id: number;
    name: string;
    code: string;
    description: string;
}

export interface FunctionalEquivalentGroup {
    id: number;
    name: string;
    positionIds: number[];
    machineryIds: number[];
    workstationIds: number[];
}

export interface ManufacturingProcess {
    id: number;
    name: string;
    description: string;
    functionalEquivalentGroups: FunctionalEquivalentGroup[];
}


// Payroll
export interface OrgChartNode {
    id: number;
    title: string;
    parentId: number | null;
    children: OrgChartNode[];
}
export interface PayrollFactor {
    id: number;
    title: string;
    displayPriority: number;
    subjectToTax: boolean;
    subjectToInsurance: boolean;
    subjectToEidBonus: boolean;
    subjectToSeverance: boolean;
    subjectToVacationPay: boolean;
    status: 'contractual' | 'active' | 'inactive';
    towerCalculation: 'fixed' | 'variable';
    effectType: 'increasing' | 'decreasing';
    calculationBasis: 'daily' | 'fixed' | 'base_salary' | 'effective_coefficient' | 'variable_number';
    relatedLedger: number | null;
    hourlyRateCoefficient?: number;
}
export interface Contract {
    id: number;
    personnelId: number;
    regulationDate: string;
    startDate: string;
    endDate: string;
    status: 'active' | 'inactive';
    hourlyWage: number;
    payrollFactorIds: number[];
    contractImageUrl?: string;
}
export interface Personnel {
    id: number;
    employeeCode: string;
    gender: 'male' | 'female';
    firstName: string;
    lastName: string;
    fatherName: string;
    birthDate: string;
    educationLevel: string;
    fieldOfStudy: string;
    contractualJobTitle: string;
    position: string;
    birthCertNumber: string;
    nationalId: string;
    insuranceNumber: string;
    accountNumber: string;
    iban: string;
    cardNumber: string;
    address: string;
    phone: string;
    mobile: string;
    employmentDate: string;
    serviceEndDate: string;
    email: string;
    description: string;
    openingBalance: number;
    workLocation: string;
    costCenterCode: string;
    costCenterTitle: string;
    photoUrl?: string;
    contracts: Contract[];
}

export interface WorklogEntry {
    id: number;
    personnelId: number;
    fiscalYearId: number;
    month: number; // 1-12
    workingDays: number;
    overtimeHours: number;
    absenceDays: number;
    missionDays: number;
}

export interface MonthlyPayrollEmployeeData {
    personnelId: number;
    worklog: {
        daily: number;
    };
    factorValues: {
        [factorId: number]: {
            worklog?: number;
            coefficient?: number;
            fixedValue?: number;
        }
    };
    calculations: {
        [factorId: number]: number;
        grossSalary: number;
        employerInsurance: number;
        employeeInsurance: number;
        totalInsurance: number;
        tax: number;
        netSalary: number;
    };
}

export interface MonthlyPayrollRun extends Auditable {
    id: number;
    fiscalYearId: number;
    month: number;
    docDate: string;
    description: string;
    employerInsuranceSubLedgerId: number | null;
    insurancePayableSubLedgerId: number | null;
    taxPayableSubLedgerId: number | null;
    salaryPayableSubLedgerId: number | null;
    employeeData: MonthlyPayrollEmployeeData[];
    accountingDocId: number | null;
}


// Budgeting
export interface HistoricalData {
    id: number;
    year: number;
    value: number;
}
export interface MonthlyIndicator {
  month: number;
  goldCoinPrice: number;
  goldOuncePrice: number;
  officialUsdRate: number;
  usdToEurRate: number;
}
export interface Forecast {
    id: number;
    targetYear: number;
    baseYear: number;
    analysis: {
        projectedAvgUsdRate: number;
        projectedAvgEurRate: number;
        monthlyEurRates: { month: number; rate: number }[];
    };
}
export interface BudgetPrediction {
    predictedExchangeRate: number;
    predictedInflationRate: number;
}
// Budgeting Operations
export interface MonthlyForecast {
    month: number;
    value: number | ''; // For quantity or monetary value
}

export interface SalesForecastRow {
    productGroupId: number;
    monthlyQuantities: MonthlyForecast[];
}

export interface PurchaseForecastRow {
    purchaseItemId: number;
    inflationRate: number | '';
    monthlyQuantities: MonthlyForecast[];
}

export interface LaborForecastRow {
    position: string;
    salaryIncreasePercent: number | '';
    monthlyEmployeeCount: MonthlyForecast[];
}

export interface OtherForecastRow {
    id: number; // Unique ID for the row itself
    subLedgerId: number;
    monthlyValues: MonthlyForecast[];
}


// Trends
export type QuestionType = 'short-text' | 'paragraph' | 'multiple-choice' | 'checkboxes' | 'dropdown' | 'rating' | 'number' | 'formula' | 'location' | 'file-upload';
export interface FormOption {
    id: number;
    value: string;
}
export interface TrendField {
    id: number;
    labelText: string;
    fieldType: QuestionType;
    options: FormOption[];
    required: boolean;
    formula?: string;
}
export interface TrendStage {
    id: number;
    name: string;
    order: number;
}
export interface TrendButton {
    id: number;
    text: string;
    destinationBoxId: number | null;
    color: string;
    requiredFieldIds: number[];
}
export interface TrendBox {
    id: number;
    name: string;
    stageId: number | null;
    position: string;
    relatedTaskId?: number | null;
    fields: TrendField[];
    buttons: TrendButton[];
}
export interface TrendForm {
    id: number;
    title: string;
    description: string;
    stages: TrendStage[];
    boxes: TrendBox[];
    published: boolean;
}


// Backup & Restore
export interface Backup {
    id: number;
    timestamp: string;
    filename: string;
    size: string; // e.g., "15.2 MB"
}

export interface AutoBackupConfig {
    enabled: boolean;
    time: string; // e.g., "02:00"
    period: number; // In days
}

// Sales Management - Timeline
export enum CampaignStatus {
    Planned = 'برنامه‌ریزی شده',
    InProgress = 'در حال اجرا',
    Completed = 'تکمیل شده',
    Cancelled = 'لغو شده',
}

export interface CampaignMedia {
    id: number;
    type: 'Social Media' | 'Email' | 'SMS' | 'Banner' | 'Other';
    cost: number;
    description: string;
}

export interface Campaign extends Auditable {
    id: number;
    date: string;
    name: string;
    slogan?: string;
    audienceGroupId?: number | null;
    roi?: string;
    kpi?: string;
    status: CampaignStatus;
    budget: number; // Estimated Cost
    description: string;
    media: CampaignMedia[];
}

export interface CampaignAudienceGroup {
    id: number;
    name: string;
    // For future use, can define criteria for dynamic groups
    criteria?: any; 
}

// Placeholder types for new menu items
export interface EmailTemplate { id: number; name: string; content: string; }
export interface SmsTemplate { id: number; name: string; content: string; }
export interface SocialTemplate { id: number; name: string; content: string; }


export enum OpportunityStatus {
    Prospect = 'مشتری احتمالی',
    Qualification = 'ارزیابی',
    Proposal = 'ارائه پیشنهاد',
    Negotiation = 'مذاکره',
    Won = 'موفق',
    Lost = 'ناموفق',
}

export interface Opportunity extends Auditable {
    id: number;
    date: string;
    name: string;
    customerId: number;
    status: OpportunityStatus;
    estimatedValue: number;
    description: string;
}

export enum QuotationStatus {
    Draft = 'پیش‌نویس',
    Sent = 'ارسال شده',
    Accepted = 'پذیرفته شده',
    Rejected = 'رد شده',
}

export interface QuotationItem {
    id: number;
    productId: number;
    quantity: number;
    unitPrice: number;
}

export interface Quotation extends Auditable {
    id: number;
    date: string;
    quotationNumber: string;
    customerId: number;
    status: QuotationStatus;
    items: QuotationItem[];
    totalAmount: number;
    description: string;
}

export interface SalesNote extends Auditable {
    id: number;
    date: string;
    title: string;
    content: string;
}

export interface SalesReminder extends Auditable {
    id: number;
    date: string;
    title: string;
    content: string;
    remindAt: string;
}

// FIX: Added DeletedDocumentLog type for deleted document tracking.
export interface DeletedDocumentLog {
    id: number;
    documentType: string;
    documentIdentifier: string; // e.g., invoice number
    deletedAt: string;
    deletedBy: string; // username
}

// Deployment
export interface DeploymentNode {
    id: number;
    title: string;
    level: 1 | 2 | 3 | 4 | 5 | 6;
    parentId: number | null;
    children: DeploymentNode[];
}

// Organizational Tasks
export type TaskFrequency = 'روزانه' | 'هفتگی' | 'ماهیانه' | 'فصلی' | 'سالانه' | 'وظیفه مستقل';

export interface AssignedTask {
    id: number;
    orgChartNodeId: number;
    deploymentTaskId: number | null;
    customTaskTitle: string | null;
    frequency: TaskFrequency;
}

// Asset Management
export interface AssetLocation {
    id: number;
    name: string;
    parentId: number | null;
    children: AssetLocation[];
}

export interface DepreciationMethod {
    id: number;
    name: string;
    // Potentially more fields like formula, rate, etc.
}

export interface Asset extends Auditable {
    id: number;
    code: string;
    title: string;
    brand?: string;
    model?: string;
    serialNumber?: string;
    locationId: number;
    depreciationMethodId: number;
    assetSubLedgerId: number;
    depreciationSubLedgerId: number;
}

export interface AssetDeployment extends Auditable {
    id: number;
    date: string;
    docNumber: string;
    accountingDocNumber?: string;
    groupId: number | null;
    assetId: number;
    debtorSubLedgerId: number;
    warehouseId: number | null;
    relatedPurchaseItemId: number | null;
    creditorSubLedgerId: number | null;
    deploymentDate: string;
    locationId: number;
    costCenterSubLedgerId: number | null;
    cost: number;
    usefulLifeYears: number | null;
    salvageValue: number | null;
    decliningBalanceRate: number | null;
    depreciationMethodId: number;
}

export interface AssetDepreciationDocumentRow {
    id: number;
    assetId: number;
    cost: number;
    accumulatedDepreciation: number;
    currentPeriodDepreciation: number;
    bookValue: number;
}

export interface AssetDepreciationDocument extends Auditable {
    id: number;
    docDate: string;
    calculationDate: string;
    docNumber: string;
    accountingDocNumber?: string;
    rows: AssetDepreciationDocumentRow[];
}

export interface TrendInstanceData {
    [fieldId: number]: any;
}

export interface TrendInstanceHistoryEntry {
    boxId: number;
    enteredAt: string;
    exitedAt: string | null;
    user: string;
    action: string;
}

export interface TrendInstance extends Auditable {
    id: number;
    formId: number;
    title: string;
    currentBoxId: number;
    status: 'در حال انجام' | 'تکمیل شده' | 'لغو شده';
    data: TrendInstanceData;
    history: TrendInstanceHistoryEntry[];
}