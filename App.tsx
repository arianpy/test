
import React, { useState, useMemo, useCallback, useEffect } from 'react';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Tabs from './components/layout/Tabs';
import Dashboard from './components/Dashboard';
import AccountReview from './components/AccountReview';
import LedgerReports from './components/LedgerReports';
import ProfileModal from './components/ProfileModal';
import ChangePasswordModal from './components/ChangePasswordModal';
import ForgotPasswordModal from './components/ForgotPasswordModal';
import CompanyDefinition from './components/CompanyDefinition';
import DefineCurrencies from './components/DefineCurrencies';
import FiscalYearDefinition from './components/FiscalYearDefinition';
import AccountHeadDefinition from './components/AccountHeadDefinition';
import AutoDocSetup from './components/AutoDocSetup';
import DefinePersons from './components/DefinePersons';
import RegisterPurchaseInvoice from './components/RegisterPurchaseInvoice';
import RegisterPurchaseReturnInvoice from './components/RegisterPurchaseReturnInvoice';
import RegisterAssetPurchaseReturnInvoice from './components/RegisterAssetPurchaseReturnInvoice';
import RegisterSalesInvoice from './components/RegisterSalesInvoice';
import DefineWarehouse from './components/DefineWarehouse';
// FIX: Renamed component import to avoid name collision with the `WarehouseReceipt` type.
import WarehouseReceiptComponent from './components/WarehouseReceipt';
import WarehouseReceiptReturn from './components/WarehouseReceiptReturn';
// FIX: Renamed component import to avoid name collision with the `WarehouseOutbound` type.
import WarehouseOutboundComponent from './components/WarehouseOutbound';
import WarehouseTransfer from './components/WarehouseTransfer';
import DefinePurchaseItemGroup from './components/DefinePurchaseItemGroup';
import DefinePurchaseItem from './components/DefinePurchaseItem';
import DefineServiceItem from './components/DefineServiceItem';
import DefineProductGroup from './components/DefineProductGroup';
import DefineProduct from './components/DefineProduct';
import PayrollFactorsDefinition from './components/PayrollFactorsDefinition';
import PersonnelDefinition from './components/PersonnelDefinition';
import IndependentBudgetingDefinitions from './components/IndependentBudgetingDefinitions';
import IndependentBudgetingReports from './components/IndependentBudgetingReports';
import SalesForecast from './components/SalesForecast';
import DirectMaterialPurchaseForecast from './components/DirectMaterialPurchaseForecast';
import DirectLaborForecast from './components/DirectLaborForecast';
import OtherIncomeExpenseForecast from './components/OtherIncomeExpenseForecast';
import DefineTrend from './components/DefineTrend';
import TrendOperations from './components/TrendOperations';
import TrendReports from './components/TrendReports';
import AccountingDocument from './components/AccountingDocument';
// FIX: Renamed component import to avoid conflict with TreasuryTransaction type
import TreasuryTransactionComponent from './components/TreasuryTransaction';
import UserManagement from './components/UserManagement';
import GroupingManagement from './components/GroupingManagement';
import BackupAndRestore from './components/BackupAndRestore';
import RestoreModal from './components/RestoreModal';
import AppearanceSettings from './components/AppearanceSettings';
import SalesTargetControl from './components/SalesTargetControl';
import SalesTimeline from './components/SalesTimeline';
import DefineMeasurementUnit from './components/DefineMeasurementUnit';
import OrgChartSetup from './components/OrgChartSetup';
import MonthlyWorklog from './components/MonthlyWorklog';
import MonthlyPayroll from './components/MonthlyPayroll';
// FIX: Renamed component import to avoid conflict with the ProductManufacturing type.
import ProductManufacturingComponent from './components/ProductManufacturing';
import DefineCampaigns from './components/DefineCampaigns';
import OpportunityManagement from './components/OpportunityManagement';
import RegisterQuotation from './components/RegisterQuotation';
import GroupPermissions from './components/GroupPermissions';
import PersonalSettings from './components/PersonalSettings';
import DeploymentStructureDefinition from './components/DeploymentStructureDefinition';
import OrgTaskSetup from './components/OrgTaskSetup';
import DefineBanks from './components/DefineBanks';
import DefineCheckbooks from './components/DefineCheckbooks';
import DefineCashboxes from './components/DefineCashboxes';
import DefinePOSTerminals from './components/DefinePOSTerminals';
import DefinePaymentGateways from './components/DefinePaymentGateways';
import DefinePettyCash from './components/DefinePettyCash';
import DefineManufacturingProcess from './components/DefineManufacturingProcess';
import DefineMachineryGroup from './components/DefineMachineryGroup';
import DefineMachinery from './components/DefineMachinery';
import DefineWorkstations from './components/DefineWorkstations';
import SiteMapModal from './components/SiteMapModal';
import DetailedCodingSetup from './components/DetailedCodingSetup';
import DocumentManagement from './components/DocumentManagement';
import CashAndBankReport from './components/reports/CashAndBankReport';
import DefineAssetLocation from './components/DefineAssetLocation';
import DefineDepreciationMethod from './components/DefineDepreciationMethod';
import DefineAsset from './components/DefineAsset';
import AssetDeployment from './components/AssetDeployment';
import AssetDepreciation from './components/AssetDepreciation';
import PersonnelContractSettings from './components/PersonnelContractSettings';


import { initialAccounts, initialTransactions } from './constants';
import { initialCurrencies } from './data/currencies';
import { initialAccountHeads } from './data/accountHeads';
import { viewTitleMap } from './viewTitles';
import { formFields } from './data/formFields';
import { formTypes } from './data/formTypes';

import type {
    Transaction,
    Account,
    Currency,
    FiscalYear,
    AccountHeadGroup,
    AccountHeadSubLedger,
    AutoDocSetting,
    Person,
    NaturalPerson,
    LegalPerson,
    PurchaseInvoice,
    SalesInvoice,
    Warehouse,
// FIX: No longer a conflicting type alias, but the name collision was with the component.
    WarehouseReceipt,
    WarehouseReceiptReturn as WarehouseReceiptReturnType,
// FIX: No longer a conflicting type alias, but the name collision was with the component.
    WarehouseOutbound,
    WarehouseTransfer as WarehouseTransferType,
    PurchaseItemGroup,
    PurchaseItem,
    ServiceItem,
    ProductGroup,
    Product,
    PayrollFactor,
    Personnel,
    Contract,
    HistoricalData,
    Forecast,
    MonthlyIndicator,
    TrendForm,
    TrendInstance,
    TreasuryTransaction,
    AccountingDocument as AccountingDocumentType,
    User,
    FormGroup,
    Backup,
    AutoBackupConfig,
    SalesForecastRow,
    PurchaseForecastRow,
    LaborForecastRow,
    OtherForecastRow,
    Campaign,
    CampaignAudienceGroup,
    Opportunity,
    Quotation,
    SalesNote,
    SalesReminder,
    MeasurementUnit,
    OrgChartNode,
    WorklogEntry,
    MonthlyPayrollRun,
    ProductManufacturing as ProductManufacturingType,
    WarehouseReceiptItem,
    PurchaseInvoiceType,
    SalesInvoiceType,
    BudgetPrediction,
    UserGroup,
    Auditable,
    DeploymentNode,
    AssignedTask,
    Bank,
    Checkbook,
    Cashbox,
    POSTerminal,
    PaymentGateway,
    PettyCash,
    ManufacturingProcess,
    MachineryGroup,
    Machinery,
    Workstation,
    DetailedCodingSetting,
    AssetLocation,
    DepreciationMethod,
    Asset,
    AssetDeployment as AssetDeploymentType,
    AssetDepreciationDocument,
} from './types';
import { TransactionType as TransactionTypeEnum, ContactType, WarehouseReceiptType, WarehouseOutboundType, DetailedCodingSection } from './types';

// Extracting all module and subview IDs for type safety from a structure similar to Sidebar's
const modules = ['dashboard', 'settings', 'accounting', 'receiveAndPay', 'payroll', 'assetManagement', 'budgeting', 'trendsManagement', 'supplyManagement', 'productionManagement', 'campaignManagement', 'opportunityManagement', 'quotationManagement', 'invoiceManagement', 'crm', 'deploymentManagement', 'orgStructure'] as const;
const subViews = [
    'userProfile', 'companyDefinition', 'defineCurrencies', 'fiscalYearDefinition', 'appearanceSettings', 'userManagement', 'groupingManagement', 'backupAndRestore', 'groupPermissions',
    'accountHeadDefinition', 'detailedCodingSetup', 'autoDocSetup', 'accountControl', 'ledgerReports', 'issueAccountingDocument',
    'defineBanks', 'defineCheckbooks', 'defineCashboxes', 'definePOSTerminals', 'definePaymentGateways', 'definePettyCash', 'registerTreasuryTransaction', 'documentManagement', 'cashAndBankReport',
    'definePersons', 'defineServiceItem', 'registerPurchaseInvoice', 'registerPurchaseReturnInvoice', 'registerAssetPurchaseInvoice', 'registerAssetPurchaseReturnInvoice', 'registerServicePurchaseInvoice',
    'registerSalesInvoice', 'registerSalesReturnInvoice', 'registerAssetSalesInvoice', 'registerAssetSalesReturnInvoice', 'registerServiceSalesInvoice',
    'defineWarehouse', 'registerWarehouseReceipt', 'registerWarehouseReceiptReturn', 'registerWarehouseIssue', 'registerWarehouseIssueReturn', 'registerWarehouseTransfer', 'definePurchaseItemGroup', 'definePurchaseItem', 'defineProductGroup', 'defineProducts', 'registerProductManufacturing',
    'defineManufacturingProcess', 'defineMachineryGroup', 'defineMachinery', 'defineWorkstations',
    'defineMeasurementUnit',
    'definitions', // Generic for many
    'payrollFactorsDefinition', 'personnelDefinition', 'orgChartSetup', 'orgTaskSetup', 'registerMonthlyWorklog', 'monthlyPayrollCalculation', 'personnelContractSettings',
    'salesForecast', 'directMaterialPurchaseForecast', 'directLaborForecast', 'otherIncomeExpenseForecast', 'salesTargetControl',
    'defineTrend',
    'salesTimeline',
    'defineCampaigns', 'registerOpportunity', 'registerQuotation',
    // New campaign subviews
    'defineCampaignAudience', 'defineEmailTemplate', 'defineSmsTemplate', 'defineSocialTemplate',
    // FIX: Added 'operations' to valid subviews to resolve type errors in Sidebar for placeholder menu items.
    'operations',
    // FIX: Added 'reports' to the list of valid sub-views to resolve type errors in switch statements and data structures.
    'reports',
    'personalSettings',
    'deploymentStructureDefinition',
    'defineAssetLocation', 'defineDepreciationMethod', 'defineAsset', 'assetDeployment', 'assetDepreciation',
] as const;


export type Module = typeof modules[number];
export type SubView = typeof subViews[number];

export interface ActiveView {
  module: Module;
  subView?: SubView;
}

const purchasePageTitles: Record<string, string> = {
    registerPurchaseInvoice: "ثبت فاکتور خرید اقلام",
    registerPurchaseReturnInvoice: "ثبت فاکتور برگشت خرید اقلام",
    registerAssetPurchaseInvoice: "ثبت فاکتور خرید دارایی",
    registerAssetPurchaseReturnInvoice: "ثبت فاکتور برگشت خرید دارایی",
    registerServicePurchaseInvoice: "ثبت فاکتور خرید خدمات (هزینه)",
};

const salesPageTitles: Record<string, string> = {
    registerSalesInvoice: "ثبت فاکتور فروش اقلام",
    registerSalesReturnInvoice: "ثبت فاکتور برگشت فروش اقلام",
    registerAssetSalesInvoice: "ثبت فاکتور فروش دارایی",
    registerAssetSalesReturnInvoice: "ثبت فاکتور برگشت فروش دارایی",
    registerServiceSalesInvoice: "ثبت فاکتور فروش خدمات (درآمد)",
};

const firstFiscalYearId = 1;
const initialFiscalYears: FiscalYear[] = [
    {
        id: firstFiscalYearId,
        title: 'سال مالی ۱۴۰۳',
        startDate: '2024-03-20',
        endDate: '2025-03-20',
        mainCurrency: 'IRR',
        secondaryCurrency: 'USD',
    }
];

// Helper function to find a group by ID in a tree structure
const findGroupById = (groups: FormGroup[], id: number): FormGroup | null => {
    for (const group of groups) {
        if (group.id === id) {
            return group;
        }
        if (group.children) {
            const found = findGroupById(group.children, id);
            if (found) {
                return found;
            }
        }
    }
    return null;
};

// Helper function to collect all descendant IDs including the parent
const getGroupAndDescendantIds = (startGroup: FormGroup): number[] => {
    let ids: number[] = [];
    const collect = (group: FormGroup) => {
        ids.push(group.id);
        group.children.forEach(collect);
    };
    collect(startGroup);
    return ids;
};


const App: React.FC = () => {
    // State management
    // Definitional (shared across fiscal years)
    const [accounts, setAccounts] = useState<Account[]>(initialAccounts);
    const [currencies, setCurrencies] = useState<Currency[]>(initialCurrencies);
    const [fiscalYears, setFiscalYears] = useState<FiscalYear[]>(initialFiscalYears);
    const [accountHeads, setAccountHeads] = useState<AccountHeadGroup[]>(initialAccountHeads);
    const [detailedCodingSettings, setDetailedCodingSettings] = useState<DetailedCodingSetting[]>([]);
    const [persons, setPersons] = useState<Person[]>([]);
    const [warehouses, setWarehouses] = useState<Warehouse[]>([]);
    const [purchaseItemGroups, setPurchaseItemGroups] = useState<PurchaseItemGroup[]>([]);
    const [purchaseItems, setPurchaseItems] = useState<PurchaseItem[]>([]);
    const [serviceItems, setServiceItems] = useState<ServiceItem[]>([]);
    const [productGroups, setProductGroups] = useState<ProductGroup[]>([]);
    const [products, setProducts] = useState<Product[]>([]);
    const [payrollFactors, setPayrollFactors] = useState<PayrollFactor[]>([]);
    const [personnelList, setPersonnelList] = useState<Personnel[]>([]);
    const [users, setUsers] = useState<User[]>([]);
    const [formGroups, setFormGroups] = useState<FormGroup[]>([]);
    const [gdpData, setGdpData] = useState<HistoricalData[]>([]);
    const [inflationData, setInflationData] = useState<HistoricalData[]>([]);
    const [forecasts, setForecasts] = useState<Forecast[]>([]);
    const [trendForms, setTrendForms] = useState<TrendForm[]>([]);
    const [trendInstancesByFormId, setTrendInstancesByFormId] = useState<Record<number, TrendInstance[]>>({});
    const [backups, setBackups] = useState<Backup[]>([]);
    const [measurementUnits, setMeasurementUnits] = useState<MeasurementUnit[]>([]);
    const [orgChart, setOrgChart] = useState<OrgChartNode[]>([]);
    const [deploymentStructure, setDeploymentStructure] = useState<DeploymentNode[]>([]);
    const [assignedTasks, setAssignedTasks] = useState<AssignedTask[]>([]);
    const [banks, setBanks] = useState<Bank[]>([]);
    const [checkbooks, setCheckbooks] = useState<Checkbook[]>([]);
    const [cashboxes, setCashboxes] = useState<Cashbox[]>([]);
    const [posTerminals, setPosTerminals] = useState<POSTerminal[]>([]);
    const [paymentGateways, setPaymentGateways] = useState<PaymentGateway[]>([]);
    const [pettyCashList, setPettyCashList] = useState<PettyCash[]>([]);
    const [manufacturingProcesses, setManufacturingProcesses] = useState<ManufacturingProcess[]>([]);
    const [machineryGroups, setMachineryGroups] = useState<MachineryGroup[]>([]);
    const [machinery, setMachinery] = useState<Machinery[]>([]);
    const [workstations, setWorkstations] = useState<Workstation[]>([]);
    const [assetLocations, setAssetLocations] = useState<AssetLocation[]>([]);
    const [depreciationMethods, setDepreciationMethods] = useState<DepreciationMethod[]>([]);
    const [assets, setAssets] = useState<Asset[]>([]);
    const [campaignAudienceGroups, setCampaignAudienceGroups] = useState<CampaignAudienceGroup[]>([]);
    const [autoBackupConfig, setAutoBackupConfig] = useState<AutoBackupConfig>({
      enabled: false,
      time: '02:00',
      period: 1,
    });
    const [userGroups, setUserGroups] = useState<UserGroup[]>([]);
    
    // Transactional (scoped by fiscal year)
    const [transactionsByYear, setTransactionsByYear] = useState<Record<number, Transaction[]>>({ [firstFiscalYearId]: initialTransactions });
    const [purchaseInvoicesByYear, setPurchaseInvoicesByYear] = useState<Record<number, PurchaseInvoice[]>>({});
    const [salesInvoicesByYear, setSalesInvoicesByYear] = useState<Record<number, SalesInvoice[]>>({});
    const [warehouseReceiptsByYear, setWarehouseReceiptsByYear] = useState<Record<number, WarehouseReceipt[]>>({});
    const [warehouseReceiptReturnsByYear, setWarehouseReceiptReturnsByYear] = useState<Record<number, WarehouseReceiptReturnType[]>>({});
    const [warehouseOutboundsByYear, setWarehouseOutboundsByYear] = useState<Record<number, WarehouseOutbound[]>>({});
    const [warehouseTransfersByYear, setWarehouseTransfersByYear] = useState<Record<number, WarehouseTransferType[]>>({});
    const [treasuryTransactionsByYear, setTreasuryTransactionsByYear] = useState<Record<number, TreasuryTransaction[]>>({});
    const [accountingDocumentsByYear, setAccountingDocumentsByYear] = useState<Record<number, AccountingDocumentType[]>>({});
    const [dailyDocCountersByYear, setDailyDocCountersByYear] = useState<Record<number, Record<string, number>>>({});
    const [salesForecastDataByYear, setSalesForecastDataByYear] = useState<Record<number, SalesForecastRow[]>>({});
    const [purchaseForecastDataByYear, setPurchaseForecastDataByYear] = useState<Record<number, PurchaseForecastRow[]>>({});
    const [laborForecastDataByYear, setLaborForecastDataByYear] = useState<Record<number, LaborForecastRow[]>>({});
    const [otherForecastDataByYear, setOtherForecastDataByYear] = useState<Record<number, OtherForecastRow[]>>({});
    const [worklogDataByYear, setWorklogDataByYear] = useState<Record<number, WorklogEntry[]>>({});
    const [monthlyPayrollRunsByYear, setMonthlyPayrollRunsByYear] = useState<Record<number, MonthlyPayrollRun[]>>({});
    const [productManufacturingsByYear, setProductManufacturingsByYear] = useState<Record<number, ProductManufacturingType[]>>({});
    const [campaignsByYear, setCampaignsByYear] = useState<Record<number, Campaign[]>>({});
    const [opportunitiesByYear, setOpportunitiesByYear] = useState<Record<number, Opportunity[]>>({});
    const [quotationsByYear, setQuotationsByYear] = useState<Record<number, Quotation[]>>({});
    const [salesNotesByYear, setSalesNotesByYear] = useState<Record<number, SalesNote[]>>({});
    const [salesRemindersByYear, setSalesRemindersByYear] = useState<Record<number, SalesReminder[]>>({});
    const [assetDeploymentsByYear, setAssetDeploymentsByYear] = useState<Record<number, AssetDeploymentType[]>>({});
    const [assetDepreciationsByYear, setAssetDepreciationsByYear] = useState<Record<number, AssetDepreciationDocument[]>>({});
    const [budgetPredictionsByYear, setBudgetPredictionsByYear] = useState<Record<number, BudgetPrediction>>({
        [firstFiscalYearId]: { predictedExchangeRate: 500000, predictedInflationRate: 40 }
    });

    const [autoDocSettings, setAutoDocSettings] = useState<AutoDocSetting[]>([
      { formId: 'registerPurchaseInvoice', formTitle: 'ثبت فاکتور خرید اقلام', defaultDebtorSubLedgerId: null, defaultCreditorSubLedgerId: null, isDebtorEditable: true, isCreditorEditable: true },
      { formId: 'registerPurchaseReturnInvoice', formTitle: 'ثبت فاکتور برگشت خرید اقلام', defaultDebtorSubLedgerId: null, defaultCreditorSubLedgerId: null, isDebtorEditable: true, isCreditorEditable: true },
      { formId: 'registerAssetPurchaseInvoice', formTitle: 'ثبت فاکتور خرید دارایی', defaultDebtorSubLedgerId: null, defaultCreditorSubLedgerId: null, isDebtorEditable: true, isCreditorEditable: true },
      { formId: 'registerAssetPurchaseReturnInvoice', formTitle: 'ثبت فاکتور برگشت خرید دارایی', defaultDebtorSubLedgerId: null, defaultCreditorSubLedgerId: null, isDebtorEditable: true, isCreditorEditable: true },
      { formId: 'registerServicePurchaseInvoice', formTitle: 'ثبت فاکتور خرید خدمات (هزینه)', defaultDebtorSubLedgerId: null, defaultCreditorSubLedgerId: null, isDebtorEditable: true, isCreditorEditable: true },
      { formId: 'registerSalesInvoice', formTitle: 'ثبت فاکتور فروش اقلام', defaultDebtorSubLedgerId: null, defaultCreditorSubLedgerId: null, isDebtorEditable: true, isCreditorEditable: true },
      { formId: 'registerSalesReturnInvoice', formTitle: 'ثبت فاکتور برگشت فروش اقلام', defaultDebtorSubLedgerId: null, defaultCreditorSubLedgerId: null, isDebtorEditable: true, isCreditorEditable: true },
      { formId: 'registerAssetSalesInvoice', formTitle: 'ثبت فاکتور فروش دارایی', defaultDebtorSubLedgerId: null, defaultCreditorSubLedgerId: null, isDebtorEditable: true, isCreditorEditable: true },
      { formId: 'registerAssetSalesReturnInvoice', formTitle: 'ثبت فاکتور برگشت فروش دارایی', defaultDebtorSubLedgerId: null, defaultCreditorSubLedgerId: null, isDebtorEditable: true, isCreditorEditable: true },
      { formId: 'registerServiceSalesInvoice', formTitle: 'ثبت فاکتور فروش خدمات (درآمد)', defaultDebtorSubLedgerId: null, defaultCreditorSubLedgerId: null, isDebtorEditable: true, isCreditorEditable: true },
      { formId: 'registerTreasuryTransaction', formTitle: 'ثبت تراکنش خزانه', defaultDebtorSubLedgerId: null, defaultCreditorSubLedgerId: null, isDebtorEditable: true, isCreditorEditable: true }
    ]);

    // UI State
    const [openViews, setOpenViews] = useState<ActiveView[]>([{ module: 'dashboard' }]);
    const [activeViewIndex, setActiveViewIndex] = useState<number>(0);
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isProfileModalOpen, setProfileModalOpen] = useState(false);
    const [isChangePasswordModalOpen, setChangePasswordModalOpen] = useState(false);
    const [isForgotPasswordModalOpen, setForgotPasswordModalOpen] = useState(false);
    const [isRestoreModalOpen, setRestoreModalOpen] = useState(false);
    const [backupToRestore, setBackupToRestore] = useState<Backup | null>(null);
    const [activeFiscalYearId, setActiveFiscalYearId] = useState<number | null>(firstFiscalYearId);
    const [font, setFont] = useState<string>(() => localStorage.getItem('appFont') || 'vazirmatn');
    const [darkMode, setDarkMode] = useState(() => {
        const saved = localStorage.getItem('darkMode');
        return saved === 'true' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
    });
    // FIX: Add state and handler for custom fonts to pass to AppearanceSettings component.
    const [customFonts, setCustomFonts] = useState<{ id: string, name: string, style: React.CSSProperties }[]>([]);
    const addCustomFont = useCallback((font: { id: string, name: string, style: React.CSSProperties }) => {
        setCustomFonts(prev => [...prev, font]);
    }, []);
    const [isSiteMapModalOpen, setSiteMapModalOpen] = useState(false);


    const getCurrentUser = () => 'کاربر تست'; // Mock function

    const createAuditable = (): Auditable => ({
        createdAt: new Date().toISOString(),
        createdBy: getCurrentUser(),
        updatedAt: new Date().toISOString(),
        updatedBy: getCurrentUser(),
    });

    const updateAuditable = (auditable: Auditable): Auditable => ({
        ...auditable,
        updatedAt: new Date().toISOString(),
        updatedBy: getCurrentUser(),
    });

    const validateDateInFiscalYear = useCallback((dateString: string): boolean => {
        const activeFiscalYear = fiscalYears.find(fy => fy.id === activeFiscalYearId);
        if (!activeFiscalYear) {
            alert("سال مالی فعال مشخص نشده است.");
            return false;
        }
    
        // Simple string comparison works for YYYY-MM-DD format and avoids timezone issues.
        if (dateString < activeFiscalYear.startDate || dateString > activeFiscalYear.endDate) {
            alert("تاریخ سند خارج از محدوده سال مالی فعال است. لطفا تاریخ سند را در محدوده سال مالی فعال درج کنید.");
            return false;
        }
    
        return true;
    }, [activeFiscalYearId, fiscalYears]);

    // Memoized selectors for the active fiscal year's data
    const activeData = useMemo(() => {
        if (!activeFiscalYearId) {
            return {
                transactions: [], purchaseInvoices: [], salesInvoices: [], warehouseReceipts: [],
                warehouseReceiptReturns: [], warehouseOutbounds: [], warehouseTransfers: [],
                treasuryTransactions: [], accountingDocuments: [], dailyDocCounters: {},
                salesForecastData: [], purchaseForecastData: [], laborForecastData: [],
                otherForecastData: [], worklogData: [], monthlyPayrollRuns: [], productManufacturings: [],
                campaigns: [], opportunities: [], quotations: [], salesNotes: [], salesReminders: [],
                assetDeployments: [], assetDepreciations: [],
                budgetPrediction: { predictedExchangeRate: 1, predictedInflationRate: 0 },
            };
        }
        return {
            transactions: transactionsByYear[activeFiscalYearId] || [],
            purchaseInvoices: purchaseInvoicesByYear[activeFiscalYearId] || [],
            salesInvoices: salesInvoicesByYear[activeFiscalYearId] || [],
            warehouseReceipts: warehouseReceiptsByYear[activeFiscalYearId] || [],
            warehouseReceiptReturns: warehouseReceiptReturnsByYear[activeFiscalYearId] || [],
            warehouseOutbounds: warehouseOutboundsByYear[activeFiscalYearId] || [],
            warehouseTransfers: warehouseTransfersByYear[activeFiscalYearId] || [],
            treasuryTransactions: treasuryTransactionsByYear[activeFiscalYearId] || [],
            accountingDocuments: accountingDocumentsByYear[activeFiscalYearId] || [],
            dailyDocCounters: dailyDocCountersByYear[activeFiscalYearId] || {},
            salesForecastData: salesForecastDataByYear[activeFiscalYearId] || [],
            purchaseForecastData: purchaseForecastDataByYear[activeFiscalYearId] || [],
            laborForecastData: laborForecastDataByYear[activeFiscalYearId] || [],
            otherForecastData: otherForecastDataByYear[activeFiscalYearId] || [],
            worklogData: worklogDataByYear[activeFiscalYearId] || [],
            monthlyPayrollRuns: monthlyPayrollRunsByYear[activeFiscalYearId] || [],
            productManufacturings: productManufacturingsByYear[activeFiscalYearId] || [],
            campaigns: campaignsByYear[activeFiscalYearId] || [],
            opportunities: opportunitiesByYear[activeFiscalYearId] || [],
            quotations: quotationsByYear[activeFiscalYearId] || [],
            salesNotes: salesNotesByYear[activeFiscalYearId] || [],
            salesReminders: salesRemindersByYear[activeFiscalYearId] || [],
            assetDeployments: assetDeploymentsByYear[activeFiscalYearId] || [],
            assetDepreciations: assetDepreciationsByYear[activeFiscalYearId] || [],
            budgetPrediction: budgetPredictionsByYear[activeFiscalYearId] || { predictedExchangeRate: 1, predictedInflationRate: 0 },
        };
    }, [
        activeFiscalYearId, transactionsByYear, purchaseInvoicesByYear, salesInvoicesByYear,
        warehouseReceiptsByYear, warehouseReceiptReturnsByYear, warehouseOutboundsByYear,
        warehouseTransfersByYear, treasuryTransactionsByYear, accountingDocumentsByYear,
        dailyDocCountersByYear, salesForecastDataByYear, purchaseForecastDataByYear,
        laborForecastDataByYear, otherForecastDataByYear, worklogDataByYear,
        monthlyPayrollRunsByYear, productManufacturingsByYear, campaignsByYear,
        opportunitiesByYear, quotationsByYear, salesNotesByYear, salesRemindersByYear,
        assetDeploymentsByYear, assetDepreciationsByYear, budgetPredictionsByYear
    ]);

    const activeView = openViews[activeViewIndex] || { module: 'dashboard' };

    const handleNavigate = useCallback((view: ActiveView) => {
        const viewKey = JSON.stringify({ module: view.module, subView: view.subView });
        const existingViewIndex = openViews.findIndex(
            v => JSON.stringify({ module: v.module, subView: v.subView }) === viewKey
        );
        
        if (existingViewIndex !== -1) {
            setActiveViewIndex(existingViewIndex);
        } else {
            setOpenViews(prev => [...prev, view]);
            setActiveViewIndex(openViews.length);
        }
    }, [openViews]);


    const handleTabClick = (index: number) => {
        setActiveViewIndex(index);
    };

    const handleCloseTab = useCallback((indexToClose: number) => {
        if (openViews[indexToClose]?.module === 'dashboard' && !openViews[indexToClose]?.subView) return;

        const newOpenViews = openViews.filter((_, index) => index !== indexToClose);
        
        let newActiveIndex = activeViewIndex;
        if (activeViewIndex === indexToClose) {
            newActiveIndex = Math.max(0, indexToClose - 1);
        } else if (activeViewIndex > indexToClose) {
            newActiveIndex = activeViewIndex - 1;
        }

        setOpenViews(newOpenViews);
        setActiveViewIndex(newActiveIndex);

    }, [openViews, activeViewIndex]);

    const getViewTitle = useCallback((view: ActiveView): string => {
        if (!view) return '';
        const key = view.subView ? `${view.module}/${view.subView}` : view.module;
        return viewTitleMap[key] || 'Unknown';
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('darkMode', String(darkMode));
    }, [darkMode]);

    const toggleDarkMode = () => setDarkMode(prev => !prev);


    // Effect to apply font class to body and save to localStorage
    useEffect(() => {
        const fontClasses = ['font-vazirmatn', 'font-sahel', 'font-tanha'];
        document.body.classList.remove(...fontClasses);
        document.body.classList.add(`font-${font}`);
        localStorage.setItem('appFont', font);
    }, [font]);
    
    // Set active fiscal year on load
    useEffect(() => {
        if (fiscalYears.length > 0 && !activeFiscalYearId) {
            setActiveFiscalYearId(fiscalYears[0].id);
        }
    }, [fiscalYears, activeFiscalYearId]);

    const metrics = useMemo(() => {
        const totalIncome = activeData.transactions
            .filter(t => t.type === TransactionTypeEnum.Income)
            .reduce((sum, t) => sum + t.amount, 0);
        const totalExpense = activeData.transactions
            .filter(t => t.type === TransactionTypeEnum.Expense)
            .reduce((sum, t) => sum + t.amount, 0);
        return {
            totalIncome,
            totalExpense,
            netProfit: totalIncome - totalExpense,
        };
    }, [activeData.transactions]);

    // Helper functions for updating year-scoped state
    const addDataToActiveYear = useCallback(<T extends { id: number }>(
        setter: React.Dispatch<React.SetStateAction<Record<number, T[]>>>,
        itemToAdd: Omit<T, 'id' | keyof Auditable>
    ) => {
        if (!activeFiscalYearId) return;
        setter(prev => {
            const currentYearData = prev[activeFiscalYearId] || [];
            const newItem = {
                ...itemToAdd,
                id: Date.now() + Math.random(),
                ...createAuditable(),
            // FIX: Use 'as unknown as T' to safely cast the reconstructed object to the generic type T, resolving the complex type error.
            } as unknown as T;
            return { ...prev, [activeFiscalYearId]: [...currentYearData, newItem] };
        });
    }, [activeFiscalYearId]);

    const addBatchDataToActiveYear = useCallback(<T extends { id: number }>(
        setter: React.Dispatch<React.SetStateAction<Record<number, T[]>>>,
        itemsToAdd: Omit<T, 'id' | keyof Auditable>[]
    ) => {
        if (!activeFiscalYearId) return;
        setter(prev => {
            const currentYearData = prev[activeFiscalYearId] || [];
            const newItems = itemsToAdd.map(item => ({
                ...item,
                id: Date.now() + Math.random(),
                 ...createAuditable(),
            // FIX: Use 'as unknown as T' to safely cast the reconstructed object to the generic type T, resolving the complex type error.
            } as unknown as T));
            return { ...prev, [activeFiscalYearId]: [...currentYearData, ...newItems] };
        });
    }, [activeFiscalYearId]);
    
    const setDataForActiveYear = useCallback(<T,>(
        setter: React.Dispatch<React.SetStateAction<Record<number, T[]>>>,
        newData: T[]
    ) => {
        if (!activeFiscalYearId) return;
        setter(prev => ({ ...prev, [activeFiscalYearId]: newData }));
    }, [activeFiscalYearId]);
    
    const updateDataInActiveYear = useCallback(<T extends {id: number} & Auditable>(
        setter: React.Dispatch<React.SetStateAction<Record<number, T[]>>>,
        updatedItem: T
    ) => {
        if (!activeFiscalYearId) return;
        setter(prev => {
            const currentYearData = prev[activeFiscalYearId] || [];
            const updatedYearData = currentYearData.map(item => 
                item.id === updatedItem.id ? updateAuditable(updatedItem) as T : item
            );
            return { ...prev, [activeFiscalYearId]: updatedYearData };
        });
    }, [activeFiscalYearId]);

    // Unscoped Handlers
    const addCurrency = useCallback((currency: Omit<Currency, 'id'>) => setCurrencies(prev => [...prev, { ...currency, id: Date.now() }]), []);
    const updateCurrency = useCallback((updatedCurrency: Currency) => setCurrencies(prev => prev.map(c => c.id === updatedCurrency.id ? updatedCurrency : c)), []);
    const deleteCurrency = useCallback((currencyId: number) => setCurrencies(prev => prev.filter(c => c.id !== currencyId)), []);
    
    const addBank = useCallback((bank: Omit<Bank, 'id'>) => setBanks(prev => [...prev, { ...bank, id: Date.now() }]), []);
    const updateBank = useCallback((updatedBank: Bank) => setBanks(prev => prev.map(b => b.id === updatedBank.id ? updatedBank : b)), []);
    const deleteBank = useCallback((bankId: number) => setBanks(prev => prev.filter(b => b.id !== bankId)), []);
    
    const addCheckbook = useCallback((checkbook: Omit<Checkbook, 'id'>) => setCheckbooks(prev => [...prev, { ...checkbook, id: Date.now() }]), []);
    const updateCheckbook = useCallback((updatedCheckbook: Checkbook) => setCheckbooks(prev => prev.map(c => c.id === updatedCheckbook.id ? updatedCheckbook : c)), []);
    const deleteCheckbook = useCallback((checkbookId: number) => setCheckbooks(prev => prev.filter(c => c.id !== checkbookId)), []);

    const addCashbox = useCallback((cashbox: Omit<Cashbox, 'id'>) => setCashboxes(prev => [...prev, { ...cashbox, id: Date.now() }]), []);
    const updateCashbox = useCallback((updatedCashbox: Cashbox) => setCashboxes(prev => prev.map(c => c.id === updatedCashbox.id ? updatedCashbox : c)), []);
    const deleteCashbox = useCallback((cashboxId: number) => setCashboxes(prev => prev.filter(c => c.id !== cashboxId)), []);

    const addPOSTerminal = useCallback((terminal: Omit<POSTerminal, 'id'>) => setPosTerminals(prev => [...prev, { ...terminal, id: Date.now() }]), []);
    const updatePOSTerminal = useCallback((updatedTerminal: POSTerminal) => setPosTerminals(prev => prev.map(t => t.id === updatedTerminal.id ? updatedTerminal : t)), []);
    const deletePOSTerminal = useCallback((terminalId: number) => setPosTerminals(prev => prev.filter(t => t.id !== terminalId)), []);

    const addPaymentGateway = useCallback((gateway: Omit<PaymentGateway, 'id'>) => setPaymentGateways(prev => [...prev, { ...gateway, id: Date.now() }]), []);
    const updatePaymentGateway = useCallback((updatedGateway: PaymentGateway) => setPaymentGateways(prev => prev.map(g => g.id === updatedGateway.id ? updatedGateway : g)), []);
    const deletePaymentGateway = useCallback((gatewayId: number) => setPaymentGateways(prev => prev.filter(g => g.id !== gatewayId)), []);

    const addPettyCash = useCallback((pettyCash: Omit<PettyCash, 'id'>) => setPettyCashList(prev => [...prev, { ...pettyCash, id: Date.now() }]), []);
    const updatePettyCash = useCallback((updatedPettyCash: PettyCash) => setPettyCashList(prev => prev.map(pc => pc.id === updatedPettyCash.id ? updatedPettyCash : pc)), []);
    const deletePettyCash = useCallback((pettyCashId: number) => setPettyCashList(prev => prev.filter(pc => pc.id !== pettyCashId)), []);
    
    const addDetailedCodingSetting = useCallback((setting: Omit<DetailedCodingSetting, 'id'>) => {
        if (detailedCodingSettings.some(existing => existing.section === setting.section)) {
            alert(`بخش "${setting.section}" قبلا تعریف شده است. لطفا آن را ویرایش کنید.`);
            return;
        }
        if (setting.rangeFrom >= setting.rangeTo) {
            alert('مقدار "محدوده از" باید کمتر از "محدوده تا" باشد.');
            return;
        }
        const isOverlapping = detailedCodingSettings.some(existing => 
            (setting.rangeFrom >= existing.rangeFrom && setting.rangeFrom <= existing.rangeTo) ||
            (setting.rangeTo >= existing.rangeFrom && setting.rangeTo <= existing.rangeTo) ||
            (setting.rangeFrom <= existing.rangeFrom && setting.rangeTo >= existing.rangeTo)
        );
        if (isOverlapping) {
            alert('محدوده عددی تعریف شده با محدوده دیگری تداخل دارد.');
            return;
        }
        setDetailedCodingSettings(prev => [...prev, { ...setting, id: Date.now() }]);
    }, [detailedCodingSettings]);

    const updateDetailedCodingSetting = useCallback((updatedSetting: DetailedCodingSetting) => {
        if (detailedCodingSettings.some(existing => existing.id !== updatedSetting.id && existing.section === updatedSetting.section)) {
            alert(`بخش "${updatedSetting.section}" قبلا تعریف شده است.`);
            return;
        }
         if (updatedSetting.rangeFrom >= updatedSetting.rangeTo) {
            alert('مقدار "محدوده از" باید کمتر از "محدوده تا" باشد.');
            return;
        }
        const isOverlapping = detailedCodingSettings.some(existing => 
            existing.id !== updatedSetting.id && (
                (updatedSetting.rangeFrom >= existing.rangeFrom && updatedSetting.rangeFrom <= existing.rangeTo) ||
                (updatedSetting.rangeTo >= existing.rangeFrom && updatedSetting.rangeTo <= existing.rangeTo) ||
                (updatedSetting.rangeFrom <= existing.rangeFrom && updatedSetting.rangeTo >= existing.rangeTo)
            )
        );
        if (isOverlapping) {
            alert('محدوده عددی تعریف شده با محدوده دیگری تداخل دارد.');
            return;
        }
        setDetailedCodingSettings(prev => prev.map(s => s.id === updatedSetting.id ? updatedSetting : s));
    }, [detailedCodingSettings]);

    const deleteDetailedCodingSetting = useCallback((id: number) => {
        if (window.confirm('آیا از حذف این محدوده کدینگ اطمینان دارید؟')) {
            setDetailedCodingSettings(prev => prev.filter(s => s.id !== id));
        }
    }, []);

    const isFiscalYearEmpty = useCallback((yearId: number): boolean => {
        const transactionalDataSets: Record<number, any>[] = [
            transactionsByYear, purchaseInvoicesByYear, salesInvoicesByYear,
            warehouseReceiptsByYear, warehouseReceiptReturnsByYear, warehouseOutboundsByYear,
            warehouseTransfersByYear, treasuryTransactionsByYear, accountingDocumentsByYear,
            salesForecastDataByYear, purchaseForecastDataByYear, laborForecastDataByYear,
            otherForecastDataByYear, worklogDataByYear, monthlyPayrollRunsByYear,
            productManufacturingsByYear, campaignsByYear, opportunitiesByYear,
            quotationsByYear, salesNotesByYear, salesRemindersByYear,
            assetDeploymentsByYear,
            dailyDocCountersByYear, budgetPredictionsByYear,
            assetDepreciationsByYear,
        ];

        for (const dataSet of transactionalDataSets) {
            const dataForYear = dataSet[yearId];
            if (dataForYear) {
                if (Array.isArray(dataForYear) && dataForYear.length > 0) {
                    return false;
                }
                if (typeof dataForYear === 'object' && !Array.isArray(dataForYear) && Object.keys(dataForYear).length > 0) {
                    return false;
                }
            }
        }
        
        return true;
    }, [
        transactionsByYear, purchaseInvoicesByYear, salesInvoicesByYear,
        warehouseReceiptsByYear, warehouseReceiptReturnsByYear, warehouseOutboundsByYear,
        warehouseTransfersByYear, treasuryTransactionsByYear, accountingDocumentsByYear,
        salesForecastDataByYear, purchaseForecastDataByYear, laborForecastDataByYear,
        otherForecastDataByYear, worklogDataByYear, monthlyPayrollRunsByYear,
        productManufacturingsByYear, campaignsByYear, opportunitiesByYear,
        quotationsByYear, salesNotesByYear, salesRemindersByYear,
        assetDeploymentsByYear, dailyDocCountersByYear, budgetPredictionsByYear, assetDepreciationsByYear
    ]);


    const addFiscalYear = useCallback((year: Omit<FiscalYear, 'id'>) => {
        const newYear = { ...year, id: Date.now() };
        setFiscalYears(prev => [...prev, newYear]);

        const allYearDataSetters: React.Dispatch<React.SetStateAction<Record<number, any[]>>>[] = [
            setTransactionsByYear, setPurchaseInvoicesByYear, setSalesInvoicesByYear,
            setWarehouseReceiptsByYear, setWarehouseReceiptReturnsByYear, setWarehouseOutboundsByYear,
            setWarehouseTransfersByYear, setTreasuryTransactionsByYear, setAccountingDocumentsByYear,
            setSalesForecastDataByYear, setPurchaseForecastDataByYear, setLaborForecastDataByYear,
            setOtherForecastDataByYear, setWorklogDataByYear, setMonthlyPayrollRunsByYear,
            setProductManufacturingsByYear, setCampaignsByYear, setOpportunitiesByYear,
            setQuotationsByYear, setSalesNotesByYear, setSalesRemindersByYear, setAssetDeploymentsByYear,
            setAssetDepreciationsByYear,
        ];
        allYearDataSetters.forEach(setter => setter(prev => ({ ...prev, [newYear.id]: [] })));
        
        setDailyDocCountersByYear(prev => ({ ...prev, [newYear.id]: {} }));
        setBudgetPredictionsByYear(prev => ({ ...prev, [newYear.id]: { predictedExchangeRate: 500000, predictedInflationRate: 40 } }));

        if (!activeFiscalYearId) {
            setActiveFiscalYearId(newYear.id);
        }
    }, [activeFiscalYearId]);

    const updateFiscalYear = useCallback((updatedYear: FiscalYear) => {
        setFiscalYears(prev => prev.map(fy => fy.id === updatedYear.id ? updatedYear : fy));
    }, []);

    const deleteFiscalYear = useCallback((yearId: number) => {
        if (!isFiscalYearEmpty(yearId)) {
            alert('امکان حذف سال مالی که دارای اطلاعات است وجود ندارد.');
            return;
        }
    
        if (fiscalYears.length <= 1) {
            alert('حداقل یک سال مالی باید در سیستم وجود داشته باشد.');
            return;
        }
    
        if (window.confirm('آیا از حذف این سال مالی اطمینان دارید؟ این عمل غیرقابل بازگشت است.')) {
            // Determine the next active year BEFORE performing any state updates to prevent race conditions.
            const remainingYears = fiscalYears.filter(fy => fy.id !== yearId);
            const newActiveYearId = activeFiscalYearId === yearId
                ? (remainingYears.length > 0 ? remainingYears[0].id : null)
                : activeFiscalYearId;
    
            // Sequentially update states.
            
            // 1. Clean up all data associated with the deleted year.
            const cleanup = (setter: React.Dispatch<React.SetStateAction<Record<number, any>>>) => {
                setter(prev => {
                    const newState = { ...prev };
                    delete newState[yearId];
                    return newState;
                });
            };
    
            cleanup(setTransactionsByYear);
            cleanup(setPurchaseInvoicesByYear);
            cleanup(setSalesInvoicesByYear);
            cleanup(setWarehouseReceiptsByYear);
            cleanup(setWarehouseReceiptReturnsByYear);
            cleanup(setWarehouseOutboundsByYear);
            cleanup(setWarehouseTransfersByYear);
            cleanup(setTreasuryTransactionsByYear);
            cleanup(setAccountingDocumentsByYear);
            cleanup(setDailyDocCountersByYear);
            cleanup(setSalesForecastDataByYear);
            cleanup(setPurchaseForecastDataByYear);
            cleanup(setLaborForecastDataByYear);
            cleanup(setOtherForecastDataByYear);
            cleanup(setWorklogDataByYear);
            cleanup(setMonthlyPayrollRunsByYear);
            cleanup(setProductManufacturingsByYear);
            cleanup(setCampaignsByYear);
            cleanup(setOpportunitiesByYear);
            cleanup(setQuotationsByYear);
            cleanup(setSalesNotesByYear);
            cleanup(setSalesRemindersByYear);
            cleanup(setAssetDeploymentsByYear);
            cleanup(setBudgetPredictionsByYear);
            cleanup(setAssetDepreciationsByYear);

            // 2. Update the fiscal years list.
            setFiscalYears(remainingYears);
            
            // 3. Set the new active fiscal year.
            setActiveFiscalYearId(newActiveYearId);
        }
    }, [isFiscalYearEmpty, fiscalYears, activeFiscalYearId]);

    const updateActiveBudgetPrediction = useCallback((prediction: BudgetPrediction) => {
        if (activeFiscalYearId) {
            setBudgetPredictionsByYear(prev => ({
                ...prev,
                [activeFiscalYearId]: prediction
            }));
        }
    }, [activeFiscalYearId]);

    const addUserGroup = useCallback((name: string) => {
        setUserGroups(prev => {
            const newGroup: UserGroup = {
                id: Date.now(),
                name,
                permissions: {},
            };
            return [...prev, newGroup];
        });
    }, []);

    const updateUserGroup = useCallback((updatedGroup: UserGroup) => {
        setUserGroups(prev => prev.map(g => g.id === updatedGroup.id ? updatedGroup : g));
    }, []);
    
    const deleteUserGroup = useCallback((groupId: number) => {
        if (users.some(u => u.userGroupId === groupId)) {
            alert('امکان حذف این گروه وجود ندارد زیرا کاربرانی به آن اختصاص داده شده‌اند.');
            return;
        }
        if(window.confirm('آیا از حذف این گروه کاربری اطمینان دارید؟')){
            setUserGroups(prev => prev.filter(g => g.id !== groupId));
        }
    }, [users]);
    
    // Scoped handlers using helpers
    const addTransaction = useCallback((t: Omit<Transaction, 'id'>) => {
        if (!validateDateInFiscalYear(t.date)) return;
        addDataToActiveYear(setTransactionsByYear, t);
    }, [addDataToActiveYear, validateDateInFiscalYear]);
    const addPurchaseInvoice = useCallback((i: Omit<PurchaseInvoice, 'id' | keyof Auditable>) => {
        if (!validateDateInFiscalYear(i.date)) return;
        addDataToActiveYear(setPurchaseInvoicesByYear, i);
    }, [addDataToActiveYear, validateDateInFiscalYear]);
    const addInvoicesBatch = useCallback((invoices: Omit<PurchaseInvoice, 'id' | keyof Auditable>[]) => {
        const activeFiscalYear = fiscalYears.find(fy => fy.id === activeFiscalYearId);
        if (!activeFiscalYear) {
            alert("سال مالی فعال مشخص نشده است.");
            return;
        }

        for (const invoice of invoices) {
            if (invoice.date < activeFiscalYear.startDate || invoice.date > activeFiscalYear.endDate) {
                alert(`فاکتور با شماره ${invoice.docNumber || 'نامشخص'} دارای تاریخ خارج از محدوده سال مالی فعال است.`);
                return; // Stop the whole batch
            }
        }
        addBatchDataToActiveYear(setPurchaseInvoicesByYear, invoices);
    }, [addBatchDataToActiveYear, activeFiscalYearId, fiscalYears]);
    const addSalesInvoice = useCallback((i: Omit<SalesInvoice, 'id' | keyof Auditable>) => {
        if (!validateDateInFiscalYear(i.date)) return;
        addDataToActiveYear(setSalesInvoicesByYear, i);
    }, [addDataToActiveYear, validateDateInFiscalYear]);
    const addSalesInvoicesBatch = useCallback((invoices: Omit<SalesInvoice, 'id' | keyof Auditable>[]) => {
        const activeFiscalYear = fiscalYears.find(fy => fy.id === activeFiscalYearId);
        if (!activeFiscalYear) {
            alert("سال مالی فعال مشخص نشده است.");
            return;
        }

        for (const invoice of invoices) {
            if (invoice.date < activeFiscalYear.startDate || invoice.date > activeFiscalYear.endDate) {
                alert(`فاکتور با شماره ${invoice.docNumber || 'نامشخص'} دارای تاریخ خارج از محدوده سال مالی فعال است.`);
                return; // Stop the whole batch
            }
        }
        addBatchDataToActiveYear(setSalesInvoicesByYear, invoices);
    }, [addBatchDataToActiveYear, activeFiscalYearId, fiscalYears]);
    const addWarehouseReceipt = useCallback((r: Omit<WarehouseReceipt, 'id' | keyof Auditable>) => {
        if (!validateDateInFiscalYear(r.date)) return;
        addDataToActiveYear(setWarehouseReceiptsByYear, r);
    }, [addDataToActiveYear, validateDateInFiscalYear]);
    const addWarehouseReceiptReturn = useCallback((rr: Omit<WarehouseReceiptReturnType, 'id' | keyof Auditable>) => {
        if (!validateDateInFiscalYear(rr.date)) return;
        addDataToActiveYear(setWarehouseReceiptReturnsByYear, rr);
    }, [addDataToActiveYear, validateDateInFiscalYear]);
    const addWarehouseOutbound = useCallback((o: Omit<WarehouseOutbound, 'id' | keyof Auditable>) => {
        if (!validateDateInFiscalYear(o.date)) return;
        addDataToActiveYear(setWarehouseOutboundsByYear, o);
    }, [addDataToActiveYear, validateDateInFiscalYear]);
    const addWarehouseTransfer = useCallback((t: Omit<WarehouseTransferType, 'id' | keyof Auditable>) => {
        if (!validateDateInFiscalYear(t.date)) return;
        addDataToActiveYear(setWarehouseTransfersByYear, t);
    }, [addDataToActiveYear, validateDateInFiscalYear]);
    const addTreasuryTransaction = useCallback((t: Omit<TreasuryTransaction, 'id' | keyof Auditable | 'status' | 'statusChangeDate' | 'statusChangeDescription'>) => {
        if (!validateDateInFiscalYear(t.date)) return;
        const fullTransaction = { ...t, status: 'active' as const };
        addDataToActiveYear(setTreasuryTransactionsByYear, fullTransaction);
    }, [addDataToActiveYear, validateDateInFiscalYear]);
    
    const updateTreasuryTransaction = useCallback((updatedTransaction: TreasuryTransaction) => {
        if (!activeFiscalYearId) return;
        updateDataInActiveYear(setTreasuryTransactionsByYear, updatedTransaction);
    }, [activeFiscalYearId, updateDataInActiveYear]);

    const calculateNextDailyDocNumber = useCallback((date: string): number => {
        if (!activeFiscalYearId) return 1;
        const today = new Date(date).toISOString().split('T')[0];
        const currentYearCounters = dailyDocCountersByYear[activeFiscalYearId] || {};
        const currentCount = currentYearCounters[today] || 0;
        return currentCount + 1;
    }, [dailyDocCountersByYear, activeFiscalYearId]);

    const addAccountingDocument = useCallback((doc: Omit<AccountingDocumentType, 'id' | keyof Auditable>) => {
        if (!validateDateInFiscalYear(doc.date)) {
            return;
        }

        addDataToActiveYear(setAccountingDocumentsByYear, doc);
    
        setDailyDocCountersByYear(prevCounters => {
            if (!activeFiscalYearId) return prevCounters;
            const today = new Date(doc.date).toISOString().split('T')[0];
            const currentYearCounters = prevCounters[activeFiscalYearId] || {};
            const currentCount = currentYearCounters[today] || 0;
            return {
                ...prevCounters,
                [activeFiscalYearId]: {
                    ...currentYearCounters,
                    [today]: currentCount + 1
                }
            };
        });
    }, [validateDateInFiscalYear, addDataToActiveYear, activeFiscalYearId]);

    const addMonthlyPayrollRun = useCallback((r: Omit<MonthlyPayrollRun, 'id' | keyof Auditable>) => {
        if (!validateDateInFiscalYear(r.docDate)) return;
        addDataToActiveYear(setMonthlyPayrollRunsByYear, r);
    }, [addDataToActiveYear, validateDateInFiscalYear]);
    
    // FIX: Replaced the problematic `createDeleterForActiveYear` helper with individual, robust useCallback definitions for each delete function.
    const createSafeDeleter = <T extends { id: number }>(setter: React.Dispatch<React.SetStateAction<Record<number, T[]>>>) => {
        return useCallback((id: number) => {
            if (!activeFiscalYearId) return;
            setter(prev => {
                const updatedYearData = (prev[activeFiscalYearId] || []).filter(item => item.id !== id);
                return { ...prev, [activeFiscalYearId]: updatedYearData };
            });
        }, [activeFiscalYearId]);
    };

    const deletePurchaseInvoice = createSafeDeleter(setPurchaseInvoicesByYear);
    const deleteSalesInvoice = createSafeDeleter(setSalesInvoicesByYear);
    const deleteTreasuryTransaction = createSafeDeleter(setTreasuryTransactionsByYear);
    const deleteAccountingDocument = createSafeDeleter(setAccountingDocumentsByYear);
    const deleteCampaign = createSafeDeleter(setCampaignsByYear);
    const deleteOpportunity = createSafeDeleter(setOpportunitiesByYear);
    const deleteQuotation = createSafeDeleter(setQuotationsByYear);
    const deleteSalesNote = createSafeDeleter(setSalesNotesByYear);
    const deleteSalesReminder = createSafeDeleter(setSalesRemindersByYear);
    
    const addCampaign = useCallback((c: Omit<Campaign, 'id' | keyof Auditable>) => { if (!validateDateInFiscalYear(c.date)) return; addDataToActiveYear(setCampaignsByYear, c); }, [addDataToActiveYear, validateDateInFiscalYear]);
    const updateCampaign = useCallback((c: Campaign) => updateDataInActiveYear(setCampaignsByYear, c), [updateDataInActiveYear]);
    
    const addOpportunity = useCallback((o: Omit<Opportunity, 'id' | keyof Auditable>) => { if (!validateDateInFiscalYear(o.date)) return; addDataToActiveYear(setOpportunitiesByYear, o); }, [addDataToActiveYear, validateDateInFiscalYear]);
    const updateOpportunity = useCallback((o: Opportunity) => updateDataInActiveYear(setOpportunitiesByYear, o), [updateDataInActiveYear]);

    const addQuotation = useCallback((q: Omit<Quotation, 'id' | keyof Auditable>) => { if (!validateDateInFiscalYear(q.date)) return; addDataToActiveYear(setQuotationsByYear, q); }, [addDataToActiveYear, validateDateInFiscalYear]);
    const updateQuotation = useCallback((q: Quotation) => updateDataInActiveYear(setQuotationsByYear, q), [updateDataInActiveYear]);

    const addSalesNote = useCallback((n: Omit<SalesNote, 'id' | keyof Auditable>) => { if (!validateDateInFiscalYear(n.date)) return; addDataToActiveYear(setSalesNotesByYear, n); }, [addDataToActiveYear, validateDateInFiscalYear]);
    const updateSalesNote = useCallback((n: SalesNote) => updateDataInActiveYear(setSalesNotesByYear, n), [updateDataInActiveYear]);

    const addSalesReminder = useCallback((r: Omit<SalesReminder, 'id' | keyof Auditable>) => { if (!validateDateInFiscalYear(r.date)) return; addDataToActiveYear(setSalesRemindersByYear, r); }, [addDataToActiveYear, validateDateInFiscalYear]);
    const updateSalesReminder = useCallback((r: SalesReminder) => updateDataInActiveYear(setSalesRemindersByYear, r), [updateDataInActiveYear]);

    // Unscoped Handlers that don't need activeFiscalYearId
    const addPerson = useCallback((person: Omit<NaturalPerson, 'id'> | Omit<LegalPerson, 'id'>) => setPersons(prev => [...prev, { ...person, id: Date.now() } as Person]), []);
    const addPersonsBatch = useCallback((personsToAdd: (Omit<NaturalPerson, 'id'> | Omit<LegalPerson, 'id'>)[]) => {
        const newPersonsWithIds = personsToAdd.map(p => ({ ...p, id: Date.now() + Math.random() })) as Person[];
        setPersons(prev => [...prev, ...newPersonsWithIds]);
    }, []);
    const addWarehouse = useCallback((warehouse: Omit<Warehouse, 'id'>) => setWarehouses(prev => [...prev, { ...warehouse, id: Date.now() }]), []);
    const updateWarehouse = useCallback((updatedWarehouse: Warehouse) => setWarehouses(prev => prev.map(w => w.id === updatedWarehouse.id ? updatedWarehouse : w)), []);
    const deleteWarehouse = useCallback((warehouseId: number) => {
        if (products.some(p => p.defaultWarehouseId === warehouseId)) {
            alert('امکان حذف انبار وجود ندارد زیرا به عنوان انبار پیش‌فرض برای یک یا چند محصول تنظیم شده است.');
            return;
        }
        setWarehouses(prev => prev.filter(w => w.id !== warehouseId));
    }, [products]);
    const addSubLedger = useCallback((ledgerId: number, subLedger: Omit<AccountHeadSubLedger, 'id'>) => {
        setAccountHeads(prevHeads => {
            const newHeads = JSON.parse(JSON.stringify(prevHeads));
            for (const group of newHeads) {
                const ledger = group.children.find((l: any) => l.id === ledgerId);
                if (ledger) {
                    ledger.children.push({ ...subLedger, id: Date.now() });
                    break;
                }
            }
            return newHeads;
        });
    }, []);
    const updateSubLedger = useCallback((ledgerId: number, updatedSubLedger: AccountHeadSubLedger) => {
        setAccountHeads(prevHeads => {
            const newHeads = JSON.parse(JSON.stringify(prevHeads));
            for (const group of newHeads) {
                const ledger = group.children.find((l: any) => l.id === ledgerId);
                if (ledger) {
                    const index = ledger.children.findIndex((sl: any) => sl.id === updatedSubLedger.id);
                    if (index > -1) ledger.children[index] = updatedSubLedger;
                    break;
                }
            }
            return newHeads;
        });
    }, []);
    const deleteSubLedger = useCallback((ledgerId: number, subLedgerId: number) => {
        setAccountHeads(prevHeads => {
            const newHeads = JSON.parse(JSON.stringify(prevHeads));
            for (const group of newHeads) {
                const ledger = group.children.find((l: any) => l.id === ledgerId);
                if (ledger) {
                    ledger.children = ledger.children.filter((sl: any) => sl.id !== subLedgerId);
                    break;
                }
            }
            return newHeads;
        });
    }, []);
    const updateAutoDocSetting = useCallback((updatedSetting: AutoDocSetting) => setAutoDocSettings(prev => prev.map(s => s.formId === updatedSetting.formId ? updatedSetting : s)), []);
    const addMeasurementUnit = useCallback((unit: Omit<MeasurementUnit, 'id'>) => setMeasurementUnits(prev => [...prev, { ...unit, id: Date.now() }]), []);
    const addPurchaseItemGroup = useCallback((group: Omit<PurchaseItemGroup, 'id' | 'children'>) => {
        const newGroup = { ...group, id: Date.now(), children: [] };
        if (group.parentId === null) {
            setPurchaseItemGroups(prev => [...prev, newGroup]);
        } else {
            const addRecursive = (nodes: PurchaseItemGroup[]): PurchaseItemGroup[] => nodes.map(node => {
                if (node.id === group.parentId) return { ...node, children: [...node.children, newGroup] };
                if (node.children) return { ...node, children: addRecursive(node.children) };
                return node;
            });
            setPurchaseItemGroups(prev => addRecursive(prev));
        }
    }, []);
    const updatePurchaseItemGroup = useCallback((groupId: number, newTitle: string) => {
         const updateRecursive = (nodes: PurchaseItemGroup[]): PurchaseItemGroup[] => nodes.map(node => {
            if (node.id === groupId) return { ...node, title: newTitle };
            if (node.children) return { ...node, children: updateRecursive(node.children) };
            return node;
        });
        setPurchaseItemGroups(prev => updateRecursive(prev));
    }, []);
    const deletePurchaseItemGroup = useCallback((groupId: number) => {
        if (purchaseItems.some(item => item.supplyGroupId === groupId)) {
             alert('امکان حذف گروه وجود ندارد زیرا اقلامی به آن اختصاص داده شده‌اند.');
            return;
        }
        setPurchaseItemGroups(prev => {
            const deleteRecursive = (nodes: PurchaseItemGroup[]): PurchaseItemGroup[] => {
                const filtered = nodes.filter(n => n.id !== groupId);
                return filtered.map(n => n.children ? {...n, children: deleteRecursive(n.children)} : n);
            };
            return deleteRecursive(prev);
        });
    }, [purchaseItems]);
    const addPurchaseItem = useCallback((item: Omit<PurchaseItem, 'id'>) => setPurchaseItems(prev => [...prev, { ...item, id: Date.now() }]), []);
    const updatePurchaseItem = useCallback((updatedItem: PurchaseItem) => setPurchaseItems(prev => prev.map(i => i.id === updatedItem.id ? updatedItem : i)), []);
    const deletePurchaseItem = useCallback((itemId: number) => {
        if(products.some(p => p.processes.some(proc => proc.components.some(c => c.componentType === 'purchaseItem' && c.componentId === itemId)))) {
            alert('امکان حذف این قلم وجود ندارد زیرا در ساختار (BOM) یک یا چند محصول استفاده شده است.');
            return;
        }
        setPurchaseItems(prev => prev.filter(i => i.id !== itemId));
    }, [products]);
    const addServiceItem = useCallback((service: Omit<ServiceItem, 'id'>) => setServiceItems(prev => [...prev, { ...service, id: Date.now() }]), []);
    const updateServiceItem = useCallback((updatedService: ServiceItem) => setServiceItems(prev => prev.map(s => s.id === updatedService.id ? updatedService : s)), []);
    const deleteServiceItem = useCallback((serviceId: number) => setServiceItems(prev => prev.filter(s => s.id !== serviceId)), []);
    const addProductGroup = useCallback((group: Omit<ProductGroup, 'id' | 'children'>) => {
         const newGroup = { ...group, id: Date.now(), children: [] };
        if (group.parentId === null) {
            setProductGroups(prev => [...prev, newGroup]);
        } else {
            const addRecursive = (nodes: ProductGroup[]): ProductGroup[] => nodes.map(node => {
                if (node.id === group.parentId) return { ...node, children: [...node.children, newGroup] };
                if (node.children) return { ...node, children: addRecursive(node.children) };
                return node;
            });
            setProductGroups(prev => addRecursive(prev));
        }
    }, []);
    const updateProductGroup = useCallback((groupId: number, newTitle: string) => {
         const updateRecursive = (nodes: ProductGroup[]): ProductGroup[] => nodes.map(node => {
            if (node.id === groupId) return { ...node, title: newTitle };
            if (node.children) return { ...node, children: updateRecursive(node.children) };
            return node;
        });
        setProductGroups(prev => updateRecursive(prev));
    }, []);
     const deleteProductGroup = useCallback((groupId: number) => {
         if (products.some(p => p.productGroupId === groupId)) {
            alert('امکان حذف گروه وجود ندارد زیرا محصولاتی به آن اختصاص داده شده‌اند.');
            return;
        }
        setProductGroups(prev => {
            const deleteRecursive = (nodes: ProductGroup[]): ProductGroup[] => {
                const filtered = nodes.filter(n => n.id !== groupId);
                return filtered.map(n => n.children ? {...n, children: deleteRecursive(n.children)} : n);
            };
            return deleteRecursive(prev);
        });
    }, [products]);
    const addProduct = useCallback((product: Omit<Product, 'id'>) => setProducts(prev => [...prev, { ...product, id: Date.now() }]), []);
    const updateProduct = useCallback((updatedProduct: Product) => setProducts(prev => prev.map(p => p.id === updatedProduct.id ? updatedProduct : p)), []);
    const deleteProduct = useCallback((productId: number) => {
        if (products.some(p => p.processes.some(proc => proc.components.some(c => c.componentType === 'product' && c.componentId === productId)))) {
            alert('امکان حذف این محصول وجود ندارد زیرا به عنوان جزئی از یک محصول دیگر استفاده شده است.');
            return;
        }
        setProducts(prev => prev.filter(p => p.id !== productId));
    }, [products]);
    const addPayrollFactor = useCallback((factor: Omit<PayrollFactor, 'id'>) => setPayrollFactors(prev => [...prev, { ...factor, id: Date.now() }]), []);
    const updatePayrollFactor = useCallback((updatedFactor: PayrollFactor) => setPayrollFactors(prev => prev.map(f => f.id === updatedFactor.id ? updatedFactor : f)), []);
    const deletePayrollFactor = useCallback((factorId: number) => setPayrollFactors(prev => prev.filter(f => f.id !== factorId)), []);
    const addPersonnel = useCallback((personnel: Omit<Personnel, 'id' | 'contracts'>) => setPersonnelList(prev => [...prev, { ...personnel, id: Date.now(), contracts: [] }]), []);
    const updatePersonnel = useCallback((updatedPersonnel: Personnel) => setPersonnelList(prev => prev.map(p => p.id === updatedPersonnel.id ? updatedPersonnel : p)), []);
    const deletePersonnel = useCallback((personnelId: number) => {
        if(users.some(u => u.personnelId === personnelId)) {
            alert('امکان حذف پرسنل وجود ندارد زیرا این شخص به یک کاربر سیستم متصل است.');
            return;
        }
        setPersonnelList(prev => prev.filter(p => p.id !== personnelId));
    }, [users]);
    const addOrgChartNode = useCallback((node: Omit<OrgChartNode, 'id' | 'children'>) => {
        const newNode = { ...node, id: Date.now(), children: [] };
        if (node.parentId === null) {
            setOrgChart(prev => [...prev, newNode]);
        } else {
            const addRecursive = (nodes: OrgChartNode[]): OrgChartNode[] => nodes.map(n => {
                if (n.id === node.parentId) return { ...n, children: [...n.children, newNode] };
                if (n.children) return { ...n, children: addRecursive(n.children) };
                return n;
            });
            setOrgChart(prev => addRecursive(prev));
        }
    }, []);
    const updateOrgChartNode = useCallback((nodeId: number, newTitle: string) => {
         const updateRecursive = (nodes: OrgChartNode[]): OrgChartNode[] => nodes.map(node => {
            if (node.id === nodeId) return { ...node, title: newTitle };
            if (node.children) return { ...node, children: updateRecursive(node.children) };
            return node;
        });
        setOrgChart(prev => updateRecursive(prev));
    }, []);
    const deleteOrgChartNode = useCallback((nodeId: number) => {
        setOrgChart(prev => {
            const deleteRecursive = (nodes: OrgChartNode[]): OrgChartNode[] => {
                const filtered = nodes.filter(n => n.id !== nodeId);
                return filtered.map(n => n.children ? {...n, children: deleteRecursive(n.children)} : n);
            };
            return deleteRecursive(prev);
        });
    }, []);
    const saveMonthlyWorklog = useCallback((fiscalYearId: number, month: number, entries: Omit<WorklogEntry, 'id' | 'fiscalYearId' | 'month'>[]) => {
        setWorklogDataByYear(prev => {
            const allYearsData = { ...prev };
            const currentYearData = allYearsData[fiscalYearId] || [];
            const otherEntriesInMonth = currentYearData.filter(entry => entry.month !== month);
            const newEntries = entries.map(entry => ({ ...entry, id: Date.now() + Math.random(), fiscalYearId, month }));
            allYearsData[fiscalYearId] = [...otherEntriesInMonth, ...newEntries];
            return allYearsData;
        });
    }, []);
    const addProductManufacturing = useCallback((doc: Omit<ProductManufacturingType, 'id' | keyof Auditable>) => {
        if (!validateDateInFiscalYear(doc.date)) return;
        addDataToActiveYear(setProductManufacturingsByYear, doc);
        // Warehouse transaction logic follows...
    }, [addDataToActiveYear, validateDateInFiscalYear]);
    const addUser = useCallback((user: Omit<User, 'id'>) => setUsers(prev => [...prev, { ...user, id: Date.now() }]), []);
    const updateUser = useCallback((updatedUser: User) => setUsers(prev => prev.map(u => u.id === updatedUser.id ? updatedUser : u)), []);
    const deleteUser = useCallback((userId: number) => setUsers(prev => prev.filter(u => u.id !== userId)), []);
    const addFormGroup = useCallback((group: Omit<FormGroup, 'id' | 'children'>) => {
        const newGroup = { ...group, id: Date.now(), children: [] };
        if (group.parentId === null) {
            setFormGroups(prev => [...prev, newGroup]);
        } else {
            const addRecursive = (nodes: FormGroup[]): FormGroup[] => nodes.map(node => {
                if (node.id === group.parentId) return { ...node, children: [...node.children, newGroup] };
                if (node.children) return { ...node, children: addRecursive(node.children) };
                return node;
            });
            setFormGroups(prev => addRecursive(prev));
        }
    }, []);
    const updateFormGroup = useCallback((groupId: number, newTitle: string) => {
        const updateRecursive = (nodes: FormGroup[]): FormGroup[] => nodes.map(node => {
            if (node.id === groupId) return { ...node, title: newTitle };
            if (node.children) return { ...node, children: updateRecursive(node.children) };
            return node;
        });
        setFormGroups(prev => updateRecursive(prev));
    }, []);
    const deleteFormGroup = useCallback((groupId: number) => {
        const groupToDelete = findGroupById(formGroups, groupId);
        if (!groupToDelete) {
            console.error("Group to delete not found:", groupId);
            return;
        }
    
        const idsToCheck = getGroupAndDescendantIds(groupToDelete);
    
        const allYearData = [
            ...Object.values(accountingDocumentsByYear).flat(),
            ...Object.values(warehouseReceiptsByYear).flat(),
            ...Object.values(productManufacturingsByYear).flat()
        ];
        
        // FIX: Safely access groupId by casting doc to any to resolve type inference issues.
        const isUsed = allYearData.some(doc => 'groupId' in (doc as any) && (doc as any).groupId !== null && idsToCheck.includes((doc as any).groupId));
    
        if (isUsed) {
            alert('امکان حذف این گروه یا یکی از زیرگروه‌های آن وجود ندارد زیرا در اسناد استفاده شده است.');
            return;
        }
    
        if (window.confirm('آیا از حذف این گروه و تمام زیرگروه‌های آن اطمینان دارید؟')) {
            const deleteRecursive = (groups: FormGroup[], idToDelete: number): FormGroup[] => {
                const filtered = groups.filter(g => g.id !== idToDelete);
                return filtered.map(g => g.children ? { ...g, children: deleteRecursive(g.children, idToDelete) } : g);
            };
            setFormGroups(prev => deleteRecursive(prev, groupId));
        }
    }, [formGroups, accountingDocumentsByYear, warehouseReceiptsByYear, productManufacturingsByYear]);
    const addContract = useCallback((personnelId: number, contract: Omit<Contract, 'id' | 'personnelId'>) => {
        setPersonnelList(prev => prev.map(p => {
            if (p.id === personnelId) {
                return { ...p, contracts: [...p.contracts, { ...contract, id: Date.now(), personnelId }] };
            }
            return p;
        }));
    }, []);
    const addHistoricalData = useCallback((type: 'gdp' | 'inflation', data: Omit<HistoricalData, 'id'>) => {
        const newData = { ...data, id: Date.now() };
        if (type === 'gdp') setGdpData(prev => [newData, ...prev].sort((a,b) => b.year - a.year));
        else setInflationData(prev => [newData, ...prev].sort((a,b) => b.year - a.year));
    }, []);
    const addForecast = useCallback((forecast: Omit<Forecast, 'id'>) => setForecasts(prev => [{ ...forecast, id: Date.now() }, ...prev]), []);
    const addTrendForm = useCallback((form: Omit<TrendForm, 'id' | 'published'>) => {
        setTrendForms(prev => [{...form, id: Date.now(), published: false}, ...prev]);
        alert('فرم جدید با موفقیت ذخیره شد.');
    }, []);
    const updateTrendForm = useCallback((updatedForm: TrendForm) => {
        setTrendForms(prev => prev.map(form => form.id === updatedForm.id ? updatedForm : form));
    }, []);
    const addTrendInstance = useCallback((instance: Omit<TrendInstance, 'id' | keyof Auditable>) => {
        const newInstance: TrendInstance = {
            ...instance,
            id: Date.now(),
            ...createAuditable()
        };
        setTrendInstancesByFormId(prev => {
            const currentInstances = prev[newInstance.formId] || [];
            return {
                ...prev,
                [newInstance.formId]: [...currentInstances, newInstance]
            };
        });
    }, []);
    const updateTrendInstance = useCallback((updatedInstance: TrendInstance) => {
        setTrendInstancesByFormId(prev => {
            const currentInstances = prev[updatedInstance.formId] || [];
            const updatedInstances = currentInstances.map(instance =>
                instance.id === updatedInstance.id ? updateAuditable(updatedInstance) as TrendInstance : instance
            );
            return {
                ...prev,
                [updatedInstance.formId]: updatedInstances
            };
        });
    }, []);
    const createBackup = useCallback(() => {
        const timestamp = new Date().toLocaleString('fa-IR');
        const filename = `backup_${new Date().toISOString().replace(/[:.]/g, '-')}.json`;
        const newBackup: Backup = { id: Date.now(), timestamp, filename, size: '15.2 MB' };
        setBackups(prev => [newBackup, ...prev]);
    }, []);
    const deleteBackup = useCallback((id: number) => setBackups(prev => prev.filter(b => b.id !== id)), []);
    const handleRestoreBackup = (backup: Backup) => { setBackupToRestore(backup); setRestoreModalOpen(true); };
    
    // Deployment Structure Handlers
    const addDeploymentNode = useCallback((title: string, parentId: number | null) => {
        const findParentAndLevel = (nodes: DeploymentNode[], pId: number | null): { parent: DeploymentNode | null, level: DeploymentNode['level'] } => {
            if (pId === null) return { parent: null, level: 1 };
            for (const node of nodes) {
                if (node.id === pId) return { parent: node, level: (node.level + 1) as DeploymentNode['level'] };
                const found = findParentAndLevel(node.children, pId);
                if (found.parent) return found;
            }
            return { parent: null, level: 1 }; // Fallback
        };

        setDeploymentStructure(prev => {
            const newStructure = JSON.parse(JSON.stringify(prev));
            const { parent, level } = findParentAndLevel(newStructure, parentId);
            
            if (level > 6) {
                alert('امکان افزودن سطح بیشتر از ۶ وجود ندارد.');
                return prev;
            }

            const newNode: DeploymentNode = { id: Date.now(), title, level, parentId, children: [] };
            
            if (parent) {
                parent.children.push(newNode);
            } else {
                newStructure.push(newNode);
            }
            return newStructure;
        });
    }, []);

    const updateDeploymentNode = useCallback((nodeId: number, newTitle: string) => {
        const findAndApply = (nodes: DeploymentNode[]): DeploymentNode[] => {
            return nodes.map(node => {
                if (node.id === nodeId) {
                    return { ...node, title: newTitle };
                }
                return { ...node, children: findAndApply(node.children) };
            });
        };
        setDeploymentStructure(prev => findAndApply(prev));
    }, []);

    const deleteDeploymentNode = useCallback((nodeId: number) => {
        setDeploymentStructure(prev => {
            // Deep clone to ensure we don't mutate the original state.
            const newStructure = JSON.parse(JSON.stringify(prev));
    
            // Recursive function to find and remove the node.
            // It mutates the cloned array it receives.
            const findAndRemove = (nodes: DeploymentNode[]): boolean => {
                for (let i = 0; i < nodes.length; i++) {
                    const node = nodes[i];
                    if (node.id === nodeId) {
                        // Remove the node from its parent's children array.
                        nodes.splice(i, 1);
                        return true; // Found and removed
                    }
                    // If not found at this level, search in children.
                    if (node.children && findAndRemove(node.children)) {
                        return true; // Found and removed in a deeper level
                    }
                }
                return false; // Not found in this branch
            };
            
            findAndRemove(newStructure);
            return newStructure;
        });
    }, []);

    const saveAssignedTasks = useCallback((orgChartNodeId: number, tasks: Omit<AssignedTask, 'id' | 'orgChartNodeId'>[]) => {
        setAssignedTasks(prev => {
            const otherNodeTasks = prev.filter(t => t.orgChartNodeId !== orgChartNodeId);
            const newNodeTasks = tasks.map(t => ({
                ...t,
                id: Date.now() + Math.random(),
                orgChartNodeId: orgChartNodeId
            }));
            return [...otherNodeTasks, ...newNodeTasks];
        });
    }, []);

     // Production Management Handlers
    const addManufacturingProcess = useCallback((p: Omit<ManufacturingProcess, 'id'>) => setManufacturingProcesses(prev => [...prev, { ...p, id: Date.now() }]), []);
    const updateManufacturingProcess = useCallback((p: ManufacturingProcess) => setManufacturingProcesses(prev => prev.map(item => item.id === p.id ? p : item)), []);
    const deleteManufacturingProcess = useCallback((id: number) => {
        const isUsed = products.some(p => p.processes.some(proc => proc.manufacturingProcessId === id));
        if (isUsed) {
            alert('امکان حذف این فرآیند وجود ندارد زیرا در ساختار (BOM) یک یا چند محصول استفاده شده است.');
            return;
        }
        if (window.confirm('آیا از حذف این فرآیند اطمینان دارید؟')) {
            setManufacturingProcesses(prev => prev.filter(item => item.id !== id));
        }
    }, [products]);

    const addWorkstation = useCallback((w: Omit<Workstation, 'id'>) => setWorkstations(prev => [...prev, { ...w, id: Date.now() }]), []);
    const updateWorkstation = useCallback((w: Workstation) => setWorkstations(prev => prev.map(item => item.id === w.id ? w : item)), []);
    const deleteWorkstation = useCallback((id: number) => {
        if (manufacturingProcesses.some(p => p.functionalEquivalentGroups.some(g => g.workstationIds.includes(id)))) {
            alert('امکان حذف ایستگاه کاری وجود ندارد زیرا در یک یا چند فرآیند استفاده شده است.');
            return;
        }
        setWorkstations(prev => prev.filter(item => item.id !== id));
    }, [manufacturingProcesses]);

    const addMachinery = useCallback((m: Omit<Machinery, 'id'>) => setMachinery(prev => [...prev, { ...m, id: Date.now() }]), []);
    const updateMachinery = useCallback((m: Machinery) => setMachinery(prev => prev.map(item => item.id === m.id ? m : item)), []);
    const deleteMachinery = useCallback((id: number) => {
         if (manufacturingProcesses.some(p => p.functionalEquivalentGroups.some(g => g.machineryIds.includes(id)))) {
            alert('امکان حذف ماشین وجود ندارد زیرا در یک یا چند فرآیند استفاده شده است.');
            return;
        }
        setMachinery(prev => prev.filter(item => item.id !== id));
    }, [manufacturingProcesses]);
    
    const addMachineryGroup = useCallback((group: Omit<MachineryGroup, 'id' | 'children'>) => {
        const newGroup = { ...group, id: Date.now(), children: [] };
        if (group.parentId === null) {
            setMachineryGroups(prev => [...prev, newGroup]);
        } else {
            const addRecursive = (nodes: MachineryGroup[]): MachineryGroup[] => nodes.map(node => {
                if (node.id === group.parentId) return { ...node, children: [...node.children, newGroup] };
                if (node.children) return { ...node, children: addRecursive(node.children) };
                return node;
            });
            setMachineryGroups(prev => addRecursive(prev));
        }
    }, []);
    const updateMachineryGroup = useCallback((groupId: number, newTitle: string) => {
         const updateRecursive = (nodes: MachineryGroup[]): MachineryGroup[] => nodes.map(node => {
            if (node.id === groupId) return { ...node, title: newTitle };
            if (node.children) return { ...node, children: updateRecursive(node.children) };
            return node;
        });
        setMachineryGroups(prev => updateRecursive(prev));
    }, []);
    const deleteMachineryGroup = useCallback((groupId: number) => {
        if (machinery.some(item => item.machineryGroupId === groupId)) {
             alert('امکان حذف گروه وجود ندارد زیرا ماشین آلاتی به آن اختصاص داده شده‌اند.');
            return;
        }
        setMachineryGroups(prev => {
            const deleteRecursive = (nodes: MachineryGroup[]): MachineryGroup[] => {
                const filtered = nodes.filter(n => n.id !== groupId);
                return filtered.map(n => n.children ? {...n, children: deleteRecursive(n.children)} : n);
            };
            return deleteRecursive(prev);
        });
    }, [machinery]);

    const addAsset = useCallback((asset: Omit<Asset, 'id' | keyof Auditable>) => {
        setAssets(prev => [...prev, { ...asset, id: Date.now(), ...createAuditable() } as Asset]);
    }, []);

    const updateAsset = useCallback((updatedAsset: Asset) => {
        setAssets(prev => prev.map(a => a.id === updatedAsset.id ? updateAuditable(updatedAsset) as Asset : a));
    }, []);

    const deleteAsset = useCallback((assetId: number) => {
        setAssets(prev => prev.filter(a => a.id !== assetId));
    }, []);
    
    const addAssetDeployment = useCallback((d: Omit<AssetDeploymentType, 'id' | keyof Auditable>) => {
        if (!validateDateInFiscalYear(d.date)) return;
        addDataToActiveYear(setAssetDeploymentsByYear, d);
    }, [addDataToActiveYear, validateDateInFiscalYear]);
    
    const addAssetDepreciation = useCallback((d: Omit<AssetDepreciationDocument, 'id' | keyof Auditable>) => {
        if (!validateDateInFiscalYear(d.docDate)) return;
        addDataToActiveYear(setAssetDepreciationsByYear, d);
    }, [addDataToActiveYear, validateDateInFiscalYear]);

    // Derived state
    const allSubLedgers = useMemo(() => accountHeads.flatMap(group => group.children.flatMap(ledger => ledger.children)), [accountHeads]);
    const suppliers = useMemo(() => persons.filter(p => p.contactType === ContactType.Supplier), [persons]);
    const customers = useMemo(() => persons.filter(p => p.contactType === ContactType.Customer), [persons]);


    const renderContentForView = (view: ActiveView) => {
    switch (view.module) {
      case 'dashboard':
        return <Dashboard 
            transactions={activeData.transactions} 
            metrics={metrics}
            salesInvoices={activeData.salesInvoices}
            purchaseInvoices={activeData.purchaseInvoices}
            products={products}
            purchaseItems={purchaseItems}
            fiscalYears={fiscalYears}
            activeFiscalYearId={activeFiscalYearId}
            exchangeRate={activeData.budgetPrediction.predictedExchangeRate}
        />;
      case 'settings':
        switch (view.subView) {
          case 'companyDefinition':
            return <CompanyDefinition />;
          case 'defineCurrencies':
              return <DefineCurrencies currencies={currencies} addCurrency={addCurrency} updateCurrency={updateCurrency} deleteCurrency={deleteCurrency} />;
          case 'fiscalYearDefinition':
              return <FiscalYearDefinition fiscalYears={fiscalYears} addFiscalYear={addFiscalYear} currencies={currencies} updateFiscalYear={updateFiscalYear} deleteFiscalYear={deleteFiscalYear} isFiscalYearEmpty={isFiscalYearEmpty} />;
          case 'appearanceSettings':
            return <AppearanceSettings currentFont={font} setFont={setFont} customFonts={customFonts} addCustomFont={addCustomFont} />;
          case 'userManagement':
            return <UserManagement personnelList={personnelList} users={users} addUser={addUser} updateUser={updateUser} deleteUser={deleteUser} userGroups={userGroups} />;
          case 'groupingManagement':
            return <GroupingManagement groups={formGroups} addGroup={addFormGroup} updateGroup={updateFormGroup} deleteGroup={deleteFormGroup} />;
          case 'backupAndRestore':
            return <BackupAndRestore backups={backups} config={autoBackupConfig} createBackup={createBackup} deleteBackup={deleteBackup} updateConfig={setAutoBackupConfig} handleRestore={handleRestoreBackup} />;
          case 'groupPermissions':
            return <GroupPermissions 
                userGroups={userGroups} 
                addUserGroup={addUserGroup} 
                updateUserGroup={updateUserGroup}
                deleteUserGroup={deleteUserGroup}
                users={users}
            />;
          default:
            return <div>Select a view</div>;
        }
       case 'accounting':
        switch (view.subView) {
          case 'accountHeadDefinition':
            return <AccountHeadDefinition accountHeads={accountHeads} addSubLedger={addSubLedger} updateSubLedger={updateSubLedger} deleteSubLedger={deleteSubLedger} />;
          case 'detailedCodingSetup':
            return <DetailedCodingSetup 
                settings={detailedCodingSettings}
                addSetting={addDetailedCodingSetting}
                updateSetting={updateDetailedCodingSetting}
                deleteSetting={deleteDetailedCodingSetting}
            />;
          case 'autoDocSetup':
            return <AutoDocSetup settings={autoDocSettings} updateSetting={updateAutoDocSetting} allSubLedgers={allSubLedgers} />;
          case 'issueAccountingDocument':
            return <AccountingDocument documents={activeData.accountingDocuments} addDocument={addAccountingDocument} deleteDocument={deleteAccountingDocument} accountHeads={accountHeads} currencies={currencies} calculateNextDailyNumber={calculateNextDailyDocNumber} />;
          case 'accountControl':
              return <AccountReview accountHeads={accountHeads} accountingDocuments={activeData.accountingDocuments} persons={persons} />;
          case 'ledgerReports':
              return <LedgerReports accountHeads={accountHeads} accountingDocuments={activeData.accountingDocuments} currencies={currencies} />;
          default:
            return <div>Select a view</div>;
        }
      case 'receiveAndPay':
        switch (view.subView) {
            case 'defineBanks':
                return <DefineBanks banks={banks} addBank={addBank} updateBank={updateBank} deleteBank={deleteBank} currencies={currencies} />;
            case 'defineCheckbooks':
                return <DefineCheckbooks checkbooks={checkbooks} addCheckbook={addCheckbook} updateCheckbook={updateCheckbook} deleteCheckbook={deleteCheckbook} banks={banks} />;
            case 'defineCashboxes':
                return <DefineCashboxes cashboxes={cashboxes} addCashbox={addCashbox} updateCashbox={updateCashbox} deleteCashbox={deleteCashbox} currencies={currencies} />;
            case 'definePOSTerminals':
                return <DefinePOSTerminals terminals={posTerminals} addTerminal={addPOSTerminal} updateTerminal={updatePOSTerminal} deleteTerminal={deletePOSTerminal} currencies={currencies} />;
            case 'definePaymentGateways':
// FIX: Corrected typo in prop name from 'updateGateway' to 'updatePaymentGateway'.
                return <DefinePaymentGateways gateways={paymentGateways} addGateway={addPaymentGateway} updateGateway={updatePaymentGateway} deleteGateway={deletePaymentGateway} currencies={currencies} />;
            case 'definePettyCash':
                return <DefinePettyCash pettyCashList={pettyCashList} addPettyCash={addPettyCash} updatePettyCash={updatePettyCash} deletePettyCash={deletePettyCash} currencies={currencies} allSubLedgers={allSubLedgers} personnelList={personnelList} />;
            case 'registerTreasuryTransaction': {
                const treasuryAutoDoc = autoDocSettings.find(s => s.formId === 'registerTreasuryTransaction');
                return <TreasuryTransactionComponent
                    transactions={activeData.treasuryTransactions}
                    addTransaction={addTreasuryTransaction}
                    deleteTransaction={deleteTreasuryTransaction}
                    purchaseInvoices={activeData.purchaseInvoices}
                    persons={persons}
                    accountHeads={accountHeads}
                    autoDocSetting={treasuryAutoDoc}
                    banks={banks}
                    cashboxes={cashboxes}
                    posTerminals={posTerminals}
                    paymentGateways={paymentGateways}
                    pettyCashList={pettyCashList}
                />;
            }
            case 'documentManagement':
                return <DocumentManagement
                    transactions={activeData.treasuryTransactions}
                    updateTransaction={updateTreasuryTransaction}
                    persons={persons}
                />;
            case 'cashAndBankReport':
                return <CashAndBankReport 
                    banks={banks}
                    transactions={activeData.treasuryTransactions}
                    persons={persons}
                />;
            default:
                return <div>Select a view</div>;
        }
      case 'supplyManagement':
        switch (view.subView) {
            case 'definePersons':
                return <DefinePersons persons={persons} addPerson={addPerson} addPersonsBatch={addPersonsBatch} title="تعریف اشخاص (تامین کنندگان)" contactTypeContext={ContactType.Supplier} />;
            case 'defineServiceItem':
                return <DefineServiceItem serviceItems={serviceItems} addServiceItem={addServiceItem} updateServiceItem={updateServiceItem} deleteServiceItem={deleteServiceItem} />;
            case 'registerPurchaseInvoice':
            case 'registerAssetPurchaseInvoice':
            case 'registerServicePurchaseInvoice': {
                const pageTitle = purchasePageTitles[view.subView] || "ثبت فاکتور خرید";
                const autoDocSetting = autoDocSettings.find(s => s.formId === view.subView);
                const invoiceTypeMap: Record<string, PurchaseInvoiceType> = { registerPurchaseInvoice: 'items', registerAssetPurchaseInvoice: 'asset', registerServicePurchaseInvoice: 'service' };
                const invoiceType = invoiceTypeMap[view.subView] || 'items';
                const itemsForInvoice = invoiceType === 'service' ? serviceItems.map(si => ({ ...si, primaryUnit: 'خدمت', secondaryUnit: undefined, lastSupplyPrice: 0, supplyGroupId: -1, vatRate: 0 })) : purchaseItems;
                return <RegisterPurchaseInvoice title={pageTitle} invoices={activeData.purchaseInvoices} addInvoice={addPurchaseInvoice} deleteInvoice={deletePurchaseInvoice} addInvoicesBatch={addInvoicesBatch} suppliers={suppliers} items={itemsForInvoice} accountHeads={accountHeads} autoDocSetting={autoDocSetting} currencies={currencies} fiscalYears={fiscalYears} invoiceType={invoiceType} />;
            }
            case 'registerPurchaseReturnInvoice': {
                const pageTitle = purchasePageTitles[view.subView];
                const autoDocSetting = autoDocSettings.find(s => s.formId === view.subView);
                const itemInvoices = activeData.purchaseInvoices.filter(inv => inv.items.every(i => i.quantity >= 0) && (inv.invoiceType === 'items' || !inv.invoiceType));
                return <RegisterPurchaseReturnInvoice title={pageTitle} allInvoices={activeData.purchaseInvoices} addInvoice={addPurchaseInvoice} selectableInvoices={itemInvoices} suppliers={suppliers} items={purchaseItems} autoDocSetting={autoDocSetting} accountHeads={accountHeads} currencies={currencies} fiscalYears={fiscalYears} />;
            }
             case 'registerAssetPurchaseReturnInvoice': {
                const pageTitle = purchasePageTitles[view.subView];
                const autoDocSetting = autoDocSettings.find(s => s.formId === view.subView);
                const assetInvoices = activeData.purchaseInvoices.filter(inv => inv.items.every(i => i.quantity >= 0) && inv.invoiceType === 'asset');
                return <RegisterAssetPurchaseReturnInvoice title={pageTitle} allInvoices={activeData.purchaseInvoices} addInvoice={addPurchaseInvoice} selectableInvoices={assetInvoices} suppliers={suppliers} items={purchaseItems} autoDocSetting={autoDocSetting} accountHeads={accountHeads} currencies={currencies} fiscalYears={fiscalYears} />;
            }
            case 'defineWarehouse': return <DefineWarehouse warehouses={warehouses} addWarehouse={addWarehouse} updateWarehouse={updateWarehouse} deleteWarehouse={deleteWarehouse} personnelList={personnelList} />;
            case 'defineMeasurementUnit': return <DefineMeasurementUnit units={measurementUnits} addUnit={addMeasurementUnit} />;
            case 'registerWarehouseReceipt': return <WarehouseReceiptComponent receipts={activeData.warehouseReceipts} addReceipt={addWarehouseReceipt} warehouses={warehouses} purchaseInvoices={activeData.purchaseInvoices} purchaseItems={purchaseItems} accountHeads={accountHeads} formGroups={formGroups} suppliers={suppliers} />;
            case 'registerWarehouseReceiptReturn': return <WarehouseReceiptReturn receiptReturns={activeData.warehouseReceiptReturns} addReceiptReturn={addWarehouseReceiptReturn} receipts={activeData.warehouseReceipts} warehouses={warehouses} purchaseItems={purchaseItems} />;
            case 'registerWarehouseIssue': return <WarehouseOutboundComponent title="ثبت خروج انبار" isReturn={false} outbounds={activeData.warehouseOutbounds} addOutbound={addWarehouseOutbound} warehouses={warehouses} purchaseItems={purchaseItems} />;
            case 'registerWarehouseIssueReturn': return <WarehouseOutboundComponent title="ثبت برگشت خروج انبار" isReturn={true} outbounds={activeData.warehouseOutbounds} addOutbound={addWarehouseOutbound} warehouses={warehouses} purchaseItems={purchaseItems} />;
            case 'registerWarehouseTransfer': return <WarehouseTransfer transfers={activeData.warehouseTransfers} addTransfer={addWarehouseTransfer} warehouses={warehouses} purchaseItems={purchaseItems} />;
            case 'definePurchaseItemGroup': return <DefinePurchaseItemGroup groups={purchaseItemGroups} addGroup={addPurchaseItemGroup} updateGroup={updatePurchaseItemGroup} deleteGroup={deletePurchaseItemGroup} purchaseItems={purchaseItems} />;
            case 'definePurchaseItem': return <DefinePurchaseItem items={purchaseItems} groups={purchaseItemGroups} addItem={addPurchaseItem} updateItem={updatePurchaseItem} deleteItem={deletePurchaseItem} measurementUnits={measurementUnits} />;
            default: return <div>Select a view</div>;
        }
      case 'productionManagement':
        switch (view.subView) {
            case 'defineWorkstations': return <DefineWorkstations workstations={workstations} addWorkstation={addWorkstation} updateWorkstation={updateWorkstation} deleteWorkstation={deleteWorkstation} />;
            case 'defineMachineryGroup': return <DefineMachineryGroup groups={machineryGroups} addGroup={addMachineryGroup} updateGroup={updateMachineryGroup} deleteGroup={deleteMachineryGroup} machinery={machinery} />;
            case 'defineMachinery': return <DefineMachinery machinery={machinery} addMachinery={addMachinery} updateMachinery={updateMachinery} deleteMachinery={deleteMachinery} machineryGroups={machineryGroups} allSubLedgers={allSubLedgers} />;
            case 'defineManufacturingProcess': return <DefineManufacturingProcess processes={manufacturingProcesses} addProcess={addManufacturingProcess} updateProcess={updateManufacturingProcess} deleteProcess={deleteManufacturingProcess} orgChart={orgChart} machinery={machinery} workstations={workstations} />;
            case 'defineProductGroup': return <DefineProductGroup groups={productGroups} addGroup={addProductGroup} updateGroup={updateProductGroup} deleteGroup={deleteProductGroup} products={products} />;
            case 'defineProducts': return <DefineProduct products={products} addProduct={addProduct} updateProduct={updateProduct} deleteProduct={deleteProduct} productGroups={productGroups} purchaseItems={purchaseItems} measurementUnits={measurementUnits} warehouses={warehouses} manufacturingProcesses={manufacturingProcesses} />;
            case 'registerProductManufacturing': return <ProductManufacturingComponent manufacturings={activeData.productManufacturings} addManufacturing={addProductManufacturing} products={products} warehouses={warehouses} formGroups={formGroups} />;
            case 'reports': return <div>گزارشات تولید در حال توسعه است.</div>;
            default: return <div>Select a view</div>;
        }
      case 'payroll':
        switch(view.subView) {
            case 'payrollFactorsDefinition': return <PayrollFactorsDefinition payrollFactors={payrollFactors} addPayrollFactor={addPayrollFactor} updatePayrollFactor={updatePayrollFactor} deletePayrollFactor={deletePayrollFactor} accountHeads={accountHeads} />;
            case 'registerMonthlyWorklog': return <MonthlyWorklog worklog={worklogDataByYear} saveWorklog={saveMonthlyWorklog} personnelList={personnelList} fiscalYears={fiscalYears} />;
            case 'monthlyPayrollCalculation': return <MonthlyPayroll personnelList={personnelList} worklogData={activeData.worklogData} payrollFactors={payrollFactors} accountHeads={accountHeads} fiscalYears={fiscalYears} addMonthlyPayrollRun={addMonthlyPayrollRun} />;
            case 'reports': return <IndependentBudgetingReports forecasts={forecasts} />;
            default: return <div>Select a view</div>;
        }
       case 'orgStructure':
        switch (view.subView) {
            case 'orgChartSetup': return <OrgChartSetup nodes={orgChart} addNode={addOrgChartNode} updateNode={updateOrgChartNode} deleteNode={deleteOrgChartNode} />;
            case 'orgTaskSetup': return <OrgTaskSetup orgChart={orgChart} deploymentStructure={deploymentStructure} assignedTasks={assignedTasks} onSaveAssignedTasks={saveAssignedTasks} />;
            case 'personnelDefinition': return <PersonnelDefinition personnel={personnelList} addPersonnel={addPersonnel} updatePersonnel={updatePersonnel} deletePersonnel={deletePersonnel} addContract={addContract} payrollFactors={payrollFactors} />;
            case 'personnelContractSettings': return <PersonnelContractSettings personnel={personnelList} addContract={addContract} updatePersonnel={updatePersonnel} payrollFactors={payrollFactors} />;
            default: return <div>Select a view</div>;
        }
      case 'assetManagement':
        switch (view.subView) {
            case 'defineAssetLocation': return <DefineAssetLocation />;
            case 'defineDepreciationMethod': return <DefineDepreciationMethod />;
            case 'defineAsset': return <DefineAsset 
                assets={assets}
                addAsset={addAsset}
                updateAsset={updateAsset}
                deleteAsset={deleteAsset}
                assetLocations={assetLocations}
                depreciationMethods={depreciationMethods}
                allSubLedgers={allSubLedgers}
            />;
            case 'assetDeployment': return <AssetDeployment
                deployments={activeData.assetDeployments}
                addDeployment={addAssetDeployment}
                assets={assets}
                warehouses={warehouses}
                purchaseItems={purchaseItems}
                formGroups={formGroups}
                assetLocations={assetLocations}
                depreciationMethods={depreciationMethods}
                allSubLedgers={allSubLedgers}
            />;
            case 'assetDepreciation': return <AssetDepreciation
                depreciations={activeData.assetDepreciations}
                addDepreciation={addAssetDepreciation}
                assetDeployments={activeData.assetDeployments}
                assets={assets}
            />;
            case 'operations': return <div>عملیات جمع داری اموال در حال توسعه است.</div>;
            case 'reports': return <div>گزارشات جمع داری اموال در حال توسعه است.</div>;
            default: return <div>Select a view</div>;
        }
      case 'budgeting':
        switch (view.subView) {
          case 'definitions': return <IndependentBudgetingDefinitions gdpData={gdpData} inflationData={inflationData} addData={addHistoricalData} budgetPrediction={activeData.budgetPrediction} updateBudgetPrediction={updateActiveBudgetPrediction} />;
// FIX: Pass predictedExchangeRate to SalesForecast component.
          case 'salesForecast': return <SalesForecast productGroups={productGroups} products={products} salesInvoices={activeData.salesInvoices} fiscalYears={fiscalYears} data={activeData.salesForecastData} setData={(d) => setDataForActiveYear(setSalesForecastDataByYear, d as SalesForecastRow[])} predictedExchangeRate={activeData.budgetPrediction.predictedExchangeRate} />;
          case 'directMaterialPurchaseForecast':
// FIX: Pass predictedInflationRate to DirectMaterialPurchaseForecast component.
            return <DirectMaterialPurchaseForecast purchaseItems={purchaseItems} fiscalYears={fiscalYears} data={activeData.purchaseForecastData} setData={(d) => setDataForActiveYear(setPurchaseForecastDataByYear, d as PurchaseForecastRow[])} predictedInflationRate={activeData.budgetPrediction.predictedInflationRate} />;
          case 'directLaborForecast': return <DirectLaborForecast personnelList={personnelList} fiscalYears={fiscalYears} data={activeData.laborForecastData} setData={(d) => setDataForActiveYear(setLaborForecastDataByYear, d as LaborForecastRow[])} />;
          case 'otherIncomeExpenseForecast': return <OtherIncomeExpenseForecast accountHeads={accountHeads} fiscalYears={fiscalYears} data={activeData.otherForecastData} setData={(d) => setDataForActiveYear(setOtherForecastDataByYear, d as OtherForecastRow[])} />;
// FIX: Pass predictedExchangeRate to SalesTargetControl component.
          case 'salesTargetControl': return <SalesTargetControl salesForecastData={activeData.salesForecastData} salesInvoices={activeData.salesInvoices} productGroups={productGroups} products={products} fiscalYears={fiscalYears} predictedExchangeRate={activeData.budgetPrediction.predictedExchangeRate} />;
          case 'reports': return <IndependentBudgetingReports forecasts={forecasts} />;
          default: return <div>Select a view</div>;
        }
      case 'invoiceManagement':
        switch (view.subView) {
            case 'definePersons': return <DefinePersons persons={persons} addPerson={addPerson} addPersonsBatch={addPersonsBatch} title="تعریف اشخاص (مشتریان)" contactTypeContext={ContactType.Customer} />;
            case 'registerSalesInvoice':
            case 'registerSalesReturnInvoice':
            case 'registerAssetSalesInvoice':
            case 'registerAssetSalesReturnInvoice':
            case 'registerServiceSalesInvoice':
                const salesPageTitle = salesPageTitles[view.subView] || "ثبت فاکتور فروش";
                const salesAutoDocSetting = autoDocSettings.find(s => s.formId === view.subView);
                 const salesInvoiceTypeMap: Record<string, SalesInvoiceType> = { registerSalesInvoice: 'items', registerAssetSalesInvoice: 'asset', registerServiceSalesInvoice: 'service', registerSalesReturnInvoice: 'items', registerAssetSalesReturnInvoice: 'asset' };
                const salesInvoiceType = salesInvoiceTypeMap[view.subView] || 'items';
                return <RegisterSalesInvoice title={salesPageTitle} invoices={activeData.salesInvoices} addInvoice={addSalesInvoice} deleteInvoice={deleteSalesInvoice} addInvoicesBatch={addSalesInvoicesBatch} customers={customers} items={products} accountHeads={accountHeads} autoDocSetting={salesAutoDocSetting} currencies={currencies} fiscalYears={fiscalYears} invoiceType={salesInvoiceType} />;
             case 'reports': return <div>گزارشات فروش در حال توسعه است.</div>;
            default: return <div>Select a view</div>;
        }
       case 'campaignManagement':
         switch (view.subView) {
            case 'defineCampaigns': return <DefineCampaigns campaigns={activeData.campaigns} addCampaign={addCampaign} updateCampaign={updateCampaign} deleteCampaign={deleteCampaign} audienceGroups={campaignAudienceGroups} />;
            case 'defineCampaignAudience':
            case 'defineEmailTemplate':
            case 'defineSmsTemplate':
            case 'defineSocialTemplate':
                return <div>این بخش در حال توسعه است.</div>;
            default: return <div>Select a view</div>;
         }
        case 'opportunityManagement':
            switch(view.subView) {
                case 'registerOpportunity':
                    return <OpportunityManagement
                        opportunities={activeData.opportunities}
                        addOpportunity={addOpportunity}
                        updateOpportunity={updateOpportunity}
                        deleteOpportunity={deleteOpportunity}
                        customers={customers}
                    />;
                case 'reports':
                    return <div>گزارشات فرصت ها در حال توسعه است.</div>;
                default: return <div>Select a view</div>;
            }
        case 'quotationManagement':
            switch (view.subView) {
                case 'registerQuotation': return <RegisterQuotation quotations={activeData.quotations} addQuotation={addQuotation} updateQuotation={updateQuotation} deleteQuotation={deleteQuotation} customers={customers} products={products} />;
                default: return <div>Select a view</div>;
            }
        case 'crm':
            switch (view.subView) {
                case 'salesTimeline':
                    return <SalesTimeline 
                        campaigns={activeData.campaigns} addCampaign={addCampaign} updateCampaign={updateCampaign} deleteCampaign={deleteCampaign}
                        opportunities={activeData.opportunities} addOpportunity={addOpportunity} updateOpportunity={updateOpportunity} deleteOpportunity={deleteOpportunity}
                        quotations={activeData.quotations} addQuotation={addQuotation} updateQuotation={updateQuotation} deleteQuotation={deleteQuotation}
                        salesInvoices={activeData.salesInvoices} addSalesInvoice={addSalesInvoice}
                        salesNotes={activeData.salesNotes} addSalesNote={addSalesNote} updateSalesNote={updateSalesNote} deleteSalesNote={deleteSalesNote}
                        salesReminders={activeData.salesReminders} addSalesReminder={addSalesReminder} updateSalesReminder={updateSalesReminder} deleteSalesReminder={deleteSalesReminder}
                        customers={customers} products={products} currencies={currencies} fiscalYears={fiscalYears}
                    />;
                default:
                    return <div>Select a view</div>;
            }
      case 'trendsManagement':
        switch (view.subView) {
            case 'defineTrend':
                return <DefineTrend 
                    onSaveForm={addTrendForm} 
                    trendForms={trendForms} 
                    updateTrendForm={updateTrendForm}
                    deploymentStructure={deploymentStructure} 
                    orgChart={orgChart} 
                />;
            case 'operations':
                return <TrendOperations 
                    trendForms={trendForms}
                    trendInstancesByFormId={trendInstancesByFormId}
                    addTrendInstance={addTrendInstance}
                    updateTrendInstance={updateTrendInstance}
                    getCurrentUser={getCurrentUser}
                />;
            case 'reports':
                return <TrendReports />;
            case 'personalSettings':
                return <PersonalSettings />;
            default:
                return <div>Select a view</div>;
        }
      case 'deploymentManagement':
        switch (view.subView) {
            case 'deploymentStructureDefinition':
                return <DeploymentStructureDefinition 
                    structure={deploymentStructure} 
                    setStructure={setDeploymentStructure}
                    addNode={addDeploymentNode}
                    updateNode={updateDeploymentNode}
                    deleteNode={deleteDeploymentNode}
                />;
            default:
                return <div>Select a view</div>;
        }
    }
  };

  return (
    <div className="flex h-screen bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200">
        <Sidebar 
            activeView={activeView} 
            onNavigate={handleNavigate} 
            isSidebarOpen={isSidebarOpen}
            setSidebarOpen={setSidebarOpen}
            onOpenSiteMap={() => setSiteMapModalOpen(true)}
        />
        <div className="flex flex-col flex-1 overflow-hidden">
            <Header 
                username="کاربر تست" 
                setSidebarOpen={setSidebarOpen} 
                setProfileModalOpen={setProfileModalOpen}
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
            />
            <Tabs
                openViews={openViews}
                activeViewIndex={activeViewIndex}
                getViewTitle={getViewTitle}
                onTabClick={handleTabClick}
                onTabClose={handleCloseTab}
            />
            <main className="flex-1 relative bg-slate-100 dark:bg-slate-900">
                    {openViews.map((view, index) => (
                    <div
                        key={`${view.module}-${view.subView || 'base'}-${index}`}
                        className="absolute inset-0 overflow-y-auto p-6"
                        style={{
// FIX: Corrected visibility property to use a ternary operator and the correct state variable `activeViewIndex`.
                            visibility: index === activeViewIndex ? 'visible' : 'hidden'
                        }}
                    >
                        {renderContentForView(view)}
                    </div>
                ))}
            </main>
            <Footer 
                fiscalYears={fiscalYears}
                activeFiscalYearId={activeFiscalYearId}
                setActiveFiscalYearId={setActiveFiscalYearId}
            />
        </div>
        
        {/* Modals */}
        <ProfileModal isOpen={isProfileModalOpen} onClose={() => setProfileModalOpen(false)} setChangePasswordModalOpen={setChangePasswordModalOpen} />
        <ChangePasswordModal isOpen={isChangePasswordModalOpen} onClose={() => setChangePasswordModalOpen(false)} setForgotPasswordModalOpen={setForgotPasswordModalOpen} />
        <ForgotPasswordModal isOpen={isForgotPasswordModalOpen} onClose={() => setForgotPasswordModalOpen(false)} />
        {backupToRestore && <RestoreModal isOpen={isRestoreModalOpen} onClose={() => setRestoreModalOpen(false)} backup={backupToRestore} />}
        <SiteMapModal 
            isOpen={isSiteMapModalOpen} 
            onClose={() => setSiteMapModalOpen(false)} 
            formFields={formFields} 
            formTypes={formTypes}
        />
    </div>
  );
};

// FIX: Added default export to fix import error in index.tsx.
export default App;
