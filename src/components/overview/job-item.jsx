import {
  BriefcaseBusinessIcon,
  CodeXmlIcon,
  LightbulbIcon,
} from "lucide-react";

import {
  IntroItem,
  IntroItemContent,
  IntroItemIcon,
  IntroItemLink,
} from "./intro-item";

export function JobItem({ title, company, website }) {
  return (
    <IntroItem>
      <IntroItemIcon>{getJobIcon(title)}</IntroItemIcon>

      <IntroItemContent>
        {title} @
        <IntroItemLink
          className="ml-0.5 font-medium"
          href={website}
          aria-label={`${company} website`}
        >
          {company}
        </IntroItemLink>
      </IntroItemContent>
    </IntroItem>
  );
}

function getJobIcon(title) {
  if (/(developer|engineer)/i.test(title)) {
    return <CodeXmlIcon />;
  }

  if (/(founder|co-founder)/i.test(title)) {
    return <LightbulbIcon />;
  }

  return <BriefcaseBusinessIcon />;
}
