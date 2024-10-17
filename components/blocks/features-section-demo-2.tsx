import { cn } from "@/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export default function FeaturesSectionDemo() {
  const features = [
    {
      title: "Unleash Your Creativity",
      description:
        "Effortlessly convert images with our powerful tool. From JPEG to PNG and more, enhance your visuals seamlessly.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Ease of use",
      description:
        "It's as easy as using an Apple. No sign-up, no sign-in required. ",
      icon: <IconEaseInOut />,
    },
    {
      title: "Pricing like no other",
      description:
        "Our service is completely free. No cap, no lock, no credit card required.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "100% Uptime guarantee",
      description: "We just cannot be taken down by anyone.",
      icon: <IconCloud />,
    },
    {
      title: "Unlimited Usage",
      description:
        "Enjoy unlimited file conversions with no strings attached.",
      icon: <IconAdjustmentsBolt/>,
    },
    {
      title: "Stay Ahead with Regular Updates",
      description:
        "Expect regular updates and new features to keep your multimedia experience fresh and exciting.",
      icon: <IconHeart/>,
    },
    {
      title: "Seamless Access Across All Devices",
      description:
        "Whether you're on your computer, tablet, or smartphone, you can use our platform with ease.",
      icon: < IconHelp />,
    },
    {
      title: "Secure and Private",
      description: "We prioritize your privacy and data security, ensuring that your files remain yours alone.",
      icon: < IconRouteAltLeft />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number; // Pass index to determine first feature
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border py-10 relative group/feature dark:border-neutral-800", // Add top border for every feature
        index === 0 && "lg:border-l", // Add left border for the first feature
        "lg:border-r dark:border-neutral-800" // Keep right border for larger screens
      )}
    >
      <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
