export type LegalContentType = "terms-and-conditions" | "privacy-policy";

export type LegalContentItem = {
  _id: string;
  type: LegalContentType;
  title: string;
  contentHtml: string;
  plainText: string;
  isPublished: boolean;
  createdBy: string;
  updatedBy: string;
  createdAt: string;
  updatedAt: string;
};

export type LegalContentApiResponse = {
  success: boolean;
  message: string;
  data: {
    type: LegalContentType;
    items: LegalContentItem[];
  };
};
