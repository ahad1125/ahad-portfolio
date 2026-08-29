import {
  BriefcaseBusinessIcon,
  CodeXmlIcon,
  DraftingCompassIcon,
  GraduationCapIcon,
  LightbulbIcon,
} from "lucide-react";

const iconMap = {
  code: CodeXmlIcon,
  design: DraftingCompassIcon,
  education: GraduationCapIcon,
  business: BriefcaseBusinessIcon,
  idea: LightbulbIcon,
};

export function ExperienceIcon({ icon, ...props }) {
  const IconComponent = icon ? iconMap[icon] : BriefcaseBusinessIcon;
  return <IconComponent {...props} />;
}
