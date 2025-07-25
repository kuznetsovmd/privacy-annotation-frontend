const VISUAL_LAYERS = {

// Activities
    Activity:  {
        label: "Activity",
        css_classes: ["s", "s-1"],
    }, //  Thing
    DataBreachProcessing:  {
        label: "DataBreachProcessing",
        css_classes: ["s", "s-1"],
    }, //  Activity
    DataActivity:  {
        label: "DataActivity",
        css_classes: ["s", "s-1"],
    }, //  Activity
    PolicyChange:  {
        label: "PolicyChange",
        css_classes: ["s", "s-1"],
    }, //  DataActivity
    DataUse:  {
        label: "DataUse",
        css_classes: ["s", "s-1"],
    }, //  DataActivity
    DataProtection:  {
        label: "DataProtection",
        css_classes: ["s", "s-1"],
    }, //  DataActivity
    FPCollection:  {
        label: "FPCollection",
        css_classes: ["s", "s-1"],
    }, //  DataActivity
    TPCollection:  {
        label: "TPCollection",
        css_classes: ["s", "s-1"],
    }, //  DataActivity
    TPSharing:  {
        label: "TPSharing",
        css_classes: ["s", "s-1"],
    }, //  DataActivity
    DataRetention:  {
        label: "DataRetention",
        css_classes: ["s", "s-1"],
    }, //  DataActivity
    NotificationActivity:  {
        label: "NotificationActivity",
        css_classes: ["s", "s-1"],
    }, //  Activity
    FPNotification:  {
        label: "FPNotification",
        css_classes: ["s", "s-1"],
    }, //  NotificationActivity
    UserNotification:  {
        label: "UserNotification",
        css_classes: ["s", "s-1"],
    }, //  NotificationActivity
    DataControl:  {
        label: "DataControl",
        css_classes: ["s", "s-1"],
    }, //  Activity
    AdvertisingDataControl:  {
        label: "AdvertisingDataControl",
        css_classes: ["s", "s-1"],
    }, //  DataControl
    OptInOptOutControl:  {
        label: "OptInOptOutControl",
        css_classes: ["s", "s-1"],
    }, //  DataControl

// Agents
    Agent:  {
        label: "Agent",
        css_classes: ["s", "s-2"],
    }, //  Thing
    User:  {
        label: "User",
        css_classes: ["s", "s-2"],
    }, //  Agent
    FirstParty:  {
        label: "FirstParty",
        css_classes: ["s", "s-2"],
    }, //  Agent
    ThirdParty:  {
        label: "ThirdParty",
        css_classes: ["s", "s-2"],
    }, //  Agent

// Data
    Data:  {
        label: "Data",
        css_classes: ["s", "s-3"],
    }, //  Thing
    PersonalData:  {
        label: "PersonalData",
        css_classes: ["s", "s-3"],
    }, //  Data
    NonPersonalData:  {
        label: "NonPersonalData",
        css_classes: ["s", "s-3"],
    }, //  Data
    ServiceData:  {
        label: "ServiceData",
        css_classes: ["s", "s-3"],
    }, //  PersonalData
    FinancialData:  {
        label: "FinancialData",
        css_classes: ["s", "s-3"],
    }, //  PersonalData
    DeviceData:  {
        label: "DeviceData",
        css_classes: ["s", "s-3"],
    }, //  PersonalData
    ApplicationData:  {
        label: "ApplicationData",
        css_classes: ["s", "s-3"],
    }, //  PersonalData
    AccountData:  {
        label: "AccountData",
        css_classes: ["s", "s-3"],
    }, //  PersonalData
    TrackingData:  {
        label: "TrackingData",
        css_classes: ["s", "s-3"],
    }, //  PersonalData
    SensitiveData:  {
        label: "SensitiveData",
        css_classes: ["s", "s-3"],
    }, //  PersonalData
    ReligionData:  {
        label: "ReligionData",
        css_classes: ["s", "s-3"],
    }, //  SensitiveData
    RacialData:  {
        label: "RacialData",
        css_classes: ["s", "s-3"],
    }, //  SensitiveData
    HealthData:  {
        label: "HealthData",
        css_classes: ["s", "s-3"],
    }, //  SensitiveData
    GenericData:  {
        label: "GenericData",
        css_classes: ["s", "s-3"],
    }, //  SensitiveData
    CrimeData:  {
        label: "CrimeData",
        css_classes: ["s", "s-3"],
    }, //  SensitiveData
    BiometricData:  {
        label: "BiometricData",
        css_classes: ["s", "s-3"],
    }, //  SensitiveData

// Mechanisms
    Mechanism:  {
        label: "Mechanism",
        css_classes: ["s", "s-4"],
    }, //  Thing
    DataRetentionMechanism:  {
        label: "DataRetentionMechanism",
        css_classes: ["s", "s-4"],
    }, //  Mechanism
    StoreOnOwnServers:  {
        label: "StoreOnOwnServers",
        css_classes: ["s", "s-4"],
    }, //  DataRetentionMechanism
    StoreOnEmployedServers:  {
        label: "StoreOnEmployedServers",
        css_classes: ["s", "s-4"],
    }, //  DataRetentionMechanism
    TPSharingAndCollectionCMechanism:  {
        label: "TPSharingAndCollectionCMechanism",
        css_classes: ["s", "s-4"],
    }, //  Mechanism
    TPSharingOrCollectionByContract:  {
        label: "TPSharingOrCollectionByContract",
        css_classes: ["s", "s-4"],
    }, //  TPSharingAndCollectionCMechanism
    TPSharingOrCollectionForFree:  {
        label: "TPSharingOrCollectionForFree",
        css_classes: ["s", "s-4"],
    }, //  TPSharingAndCollectionCMechanism
    SecurityMechanism:  {
        label: "SecurityMechanism",
        css_classes: ["s", "s-4"],
    }, //  Mechanism
    TechnicalSecurityMeasure:  {
        label: "TechnicalSecurityMeasure",
        css_classes: ["s", "s-4"],
    }, //  SecurityMechanism
    PseudoAnonymization:  {
        label: "PseudoAnonymization",
        css_classes: ["s", "s-4"],
    }, //  TechnicalSecurityMeasure
    Encryption:  {
        label: "Encryption",
        css_classes: ["s", "s-4"],
    }, //  TechnicalSecurityMeasure
    SecureStorage:  {
        label: "SecureStorage",
        css_classes: ["s", "s-4"],
    }, //  Encryption
    SecuredCommunication:  {
        label: "SecuredCommunication",
        css_classes: ["s", "s-4"],
    }, //  Encryption
    Firewall:  {
        label: "Firewall",
        css_classes: ["s", "s-4"],
    }, //  TechnicalSecurityMeasure
    AccessControls:  {
        label: "AccessControls",
        css_classes: ["s", "s-4"],
    }, //  TechnicalSecurityMeasure
    OrganizationalSecurityMeasure:  {
        label: "OrganizationalSecurityMeasure",
        css_classes: ["s", "s-4"],
    }, //  SecurityMechanism
    LockedOffice:  {
        label: "LockedOffice",
        css_classes: ["s", "s-4"],
    }, //  OrganizationalSecurityMeasure
    SecurityTraining:  {
        label: "SecurityTraining",
        css_classes: ["s", "s-4"],
    }, //  OrganizationalSecurityMeasure
    UserMaintainsSecurity:  {
        label: "UserMaintainsSecurity",
        css_classes: ["s", "s-4"],
    }, //  OrganizationalSecurityMeasure
    CommunicationMechanism:  {
        label: "CommunicationMechanism",
        css_classes: ["s", "s-4"],
    }, //  Mechanism
    UserSpecificCommunicationMechanism:  {
        label: "UserSpecificCommunicationMechanism",
        css_classes: ["s", "s-4"],
    }, //  CommunicationMechanism
    AutomaticCommunicationMechanism:  {
        label: "AutomaticCommunicationMechanism",
        css_classes: ["s", "s-4"],
    }, //  UserSpecificCommunicationMechanism
    ViaServiceApp:  {
        label: "ViaServiceApp",
        css_classes: ["s", "s-4"],
    }, //  AutomaticCommunicationMechanism
    ViaWebsite:  {
        label: "ViaWebsite",
        css_classes: ["s", "s-4"],
    }, //  AutomaticCommunicationMechanism
    ManualCommunicationMechanism:  {
        label: "ManualCommunicationMechanism",
        css_classes: ["s", "s-4"],
    }, //  UserSpecificCommunicationMechanism
    WebsiteForm:  {
        label: "WebsiteForm",
        css_classes: ["s", "s-4"],
    }, //  ManualCommunicationMechanism
    ServiceAppForm:  {
        label: "ServiceAppForm",
        css_classes: ["s", "s-4"],
    }, //  ManualCommunicationMechanism
    DataProvision:  {
        label: "DataProvision",
        css_classes: ["s", "s-4"],
    }, //  ManualCommunicationMechanism
    PersonalVisit:  {
        label: "PersonalVisit",
        css_classes: ["s", "s-4"],
    }, //  ManualCommunicationMechanism
    GeneralCommunicationMechanism:  {
        label: "GeneralCommunicationMechanism",
        css_classes: ["s", "s-4"],
    }, //  CommunicationMechanism
    Email:  {
        label: "Email",
        css_classes: ["s", "s-4"],
    }, //  GeneralCommunicationMechanism
    PostalMail:  {
        label: "PostalMail",
        css_classes: ["s", "s-4"],
    }, //  GeneralCommunicationMechanism
    PhoneCall:  {
        label: "PhoneCall",
        css_classes: ["s", "s-4"],
    }, //  GeneralCommunicationMechanism
    SMS:  {
        label: "SMS",
        css_classes: ["s", "s-4"],
    }, //  GeneralCommunicationMechanism
    FPSpecificCommunicationMechanism:  {
        label: "FPSpecificCommunicationMechanism",
        css_classes: ["s", "s-4"],
    }, //  CommunicationMechanism
    OnWebsitePage:  {
        label: "OnWebsitePage",
        css_classes: ["s", "s-4"],
    }, //  FPSpecificCommunicationMechanism
    OnServiceApp:  {
        label: "OnServiceApp",
        css_classes: ["s", "s-4"],
    }, //  FPSpecificCommunicationMechanism
    InPrivacyPolicy:  {
        label: "InPrivacyPolicy",
        css_classes: ["s", "s-4"],
    }, //  FPSpecificCommunicationMechanism

// Modes
    Mode:  {
        label: "Mode",
        css_classes: ["s", "s-5"],
    }, //  Thing
    DataTransmissionMode:  {
        label: "DataTransmissionMode",
        css_classes: ["s", "s-5"],
    }, //  Mode
    PermanentTransmission:  {
        label: "PermanentTransmission",
        css_classes: ["s", "s-5"],
    }, //  DataTransmissionMode
    TransmissionByRequest:  {
        label: "TransmissionByRequest",
        css_classes: ["s", "s-5"],
    }, //  DataTransmissionMode

// Causes
    Cause:  {
        label: "Cause",
        css_classes: ["s", "s-6"],
    }, //  Thing
    DataBreach:  {
        label: "DataBreach",
        css_classes: ["s", "s-6"],
    }, //  Cause
    ForceMajeurIncident:  {
        label: "ForceMajeurIncident",
        css_classes: ["s", "s-6"],
    }, //  DataBreach
    IntentionalBreach:  {
        label: "IntentionalBreach",
        css_classes: ["s", "s-6"],
    }, //  DataBreach
    UnintentionalBreach:  {
        label: "UnintentionalBreach",
        css_classes: ["s", "s-6"],
    }, //  DataBreach
    PolicyChangeCause:  {
        label: "PolicyChangeCause",
        css_classes: ["s", "s-6"],
    }, //  Cause
    PrivacyRelatedCause:  {
        label: "PrivacyRelatedCause",
        css_classes: ["s", "s-6"],
    }, //  PolicyChangeCause
    NonPrivacyRelatedCause:  {
        label: "NonPrivacyRelatedCause",
        css_classes: ["s", "s-6"],
    }, //  PolicyChangeCause
    MergeAcquisitionCause:  {
        label: "MergeAcquisitionCause",
        css_classes: ["s", "s-6"],
    }, //  PolicyChangeCause

// Consequences
    Consequence:  {
        label: "Consequence",
        css_classes: ["s", "s-7"],
    }, //  Thing
    DataBreachConsequence:  {
        label: "DataBreachConsequence",
        css_classes: ["s", "s-7"],
    }, //  Consequence
    RemoveCompromisedInformation:  {
        label: "RemoveCompromisedInformation",
        css_classes: ["s", "s-7"],
    }, //  DataBreachConsequence
    DataBreachCompensation:  {
        label: "DataBreachCompensation",
        css_classes: ["s", "s-7"],
    }, //  DataBreachConsequence
    PolicyChangeConsequence:  {
        label: "PolicyChangeConsequence",
        css_classes: ["s", "s-7"],
    }, //  Consequence
    UserChoiceConsequence:  {
        label: "UserChoiceConsequence",
        css_classes: ["s", "s-7"],
    }, //  Consequence
    NoServiceRestriction:  {
        label: "NoServiceRestriction",
        css_classes: ["s", "s-7"],
    }, //  UserChoiceConsequence
    PartialServiceRestriction:  {
        label: "PartialServiceRestriction",
        css_classes: ["s", "s-7"],
    }, //  UserChoiceConsequence
    FullServiceRestriction:  {
        label: "FullServiceRestriction",
        css_classes: ["s", "s-7"],
    }, //  UserChoiceConsequence

// Purposes
    Purpose:  {
        label: "Purpose",
        css_classes: ["s", "s-8"],
    }, //  Thing
    DataActivityPurpose:  {
        label: "DataActivityPurpose",
        css_classes: ["s", "s-8"],
    }, //  Purpose
    LegalCompliancePurpose:  {
        label: "LegalCompliancePurpose",
        css_classes: ["s", "s-8"],
    }, //  DataActivityPurpose
    ServiceProvisionPurpose:  {
        label: "ServiceProvisionPurpose",
        css_classes: ["s", "s-8"],
    }, //  DataActivityPurpose
    HealthMonitoringPurpose:  {
        label: "HealthMonitoringPurpose",
        css_classes: ["s", "s-8"],
    }, //  ServiceProvisionPurpose
    ServiceEnhancementPurpose:  {
        label: "ServiceEnhancementPurpose",
        css_classes: ["s", "s-8"],
    }, //  DataActivityPurpose
    AnalyticsPurpose:  {
        label: "AnalyticsPurpose",
        css_classes: ["s", "s-8"],
    }, //  ServiceEnhancementPurpose
    SecurityPurpose:  {
        label: "SecurityPurpose",
        css_classes: ["s", "s-8"],
    }, //  ServiceEnhancementPurpose
    ResearchPurpose:  {
        label: "ResearchPurpose",
        css_classes: ["s", "s-8"],
    }, //  ServiceEnhancementPurpose
    MarketingPurpose:  {
        label: "MarketingPurpose",
        css_classes: ["s", "s-8"],
    }, //  ServiceEnhancementPurpose

// Time periods
    TimePeriod:  {
        label: "TimePeriod",
        css_classes: ["s", "s-9"],
    }, //  Thing
    DataRetentionTime:  {
        label: "DataRetentionTime",
        css_classes: ["s", "s-9"],
    }, //  TimePeriod
    NotificationTime:  {
        label: "NotificationTime",
        css_classes: ["s", "s-9"],
    }, //  TimePeriod
    DataBreachProcessingTime:  {
        label: "DataBreachProcessingTime",
        css_classes: ["s", "s-9"],
    }, //  TimePeriod
    PolicyAcceptanceTime:  {
        label: "PolicyAcceptanceTime",
        css_classes: ["s", "s-9"],
    }, //  TimePeriod

// Basis
    Basis:  {
        label: "Basis",
        css_classes: ["s", "s-10"],
    }, //  Thing
    LegalBasis:  {
        label: "LegalBasis",
        css_classes: ["s", "s-10"],
    }, //  Basis

// Policy change scope
    PolicyChangeScope:  {
        label: "PolicyChangeScope",
        css_classes: ["s", "s-11"],
    }, //  Thing

// User special category
    UserSpecialCategory:  {
        label: "UserSpecialCategory",
        css_classes: ["s", "s-12"],
    }, //  Thing
    EuropeanResident:  {
        label: "EuropeanResident",
        css_classes: ["s", "s-12"],
    }, //  UserSpecialCategory
    CaliforniaResident:  {
        label: "CaliforniaResident",
        css_classes: ["s", "s-12"],
    }, //  UserSpecialCategory
    RussianFederationResident:  {
        label: "RussianFederationResident",
        css_classes: ["s", "s-12"],
    }, //  UserSpecialCategory
    ChildCategory:  {
        label: "ChildCategory",
        css_classes: ["s", "s-12"],
    }, //  UserSpecialCategory

}

export default VISUAL_LAYERS;