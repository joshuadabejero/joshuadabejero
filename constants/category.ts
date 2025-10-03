export enum Category {
  FRONTEND = 1,
  BACKEND,
  FULLSTACK,
  CMS,
}

export const CategoryLabels: Record<Category, string> = {
  [Category.FRONTEND]: "Frontend",
  [Category.BACKEND]: "Backend",
  [Category.FULLSTACK]: "Fullstack",
  [Category.CMS]: "CMS",
};
