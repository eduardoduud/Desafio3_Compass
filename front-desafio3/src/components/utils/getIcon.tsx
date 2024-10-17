const iconsPath = "/src/assets/images/icons/";
const imagePath = "/src/assets/images/images";
const buttonPath = "/src/assets/images/button";
export const getIconPath = (iconName: string): string => {
  return `${iconsPath}/${iconName}.svg`;
};

export const getImagePath = (imageName: string): string => {
  return `${imagePath}/${imageName}.svg`;
};

export const getButtonPath = (buttonName: string): string => {
  return `${buttonPath}/${buttonName}.svg`;
};
