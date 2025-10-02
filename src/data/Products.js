import p1 from "../assets/images/p1.png";
import p2 from "../assets/images/p2.png";
import p3 from "../assets/images/p3.png";
import r1 from "../assets/images/p1.png"; 
import r2 from "../assets/images/p2.png";

export const products = [
  {
    id: "subsidies",
    category: "solar energy",
    title: "Subsidies And Tax Benefits",
    description:
      "The government encourages businesses to become more sustainable with various subsidies and tax schemes. We help you make maximum use of these financial benefits.",
    image: p1,
    projectInfo: [
      { label: "EIA Benefit", value: "45%" },
      { label: "SDE++ Budget", value: "$300 M" },
      { label: "ISDE Subsidy", value: "$25 K" },
    ],
    scope: {
      heading:
        "Our specialists closely monitor all changes in subsidy schemes and ensure correct applications for maximum success.",
      points: [
        {
          title: "45% EIA Benefit",
          description:
            "With the Energy Investment Allowance (EIA), you can deduct up to 45% of your investment costs from taxable profit, in addition to regular depreciation.",
        },
        {
          title: "$300M SDE++",
          description:
            "The Stimulation of Sustainable Energy Production (SDE++) offers large-scale subsidies for renewable energy production and CO2 reduction.",
        },
        {
          title: "$25K ISDE Subsidy",
          description:
            "For smaller investments in heat pumps and solar water heaters, the Sustainable Energy Investment Subsidy (ISDE) is available.",
        },
      ],
    },
    result: {
      description:
        "Our clients achieve measurable improvements in energy efficiency and cost savings. The integration of subsidies ensures long-term returns on investment.",
      images: [r1, r2],
    },
    prevId: "asset-management",
    nextId: "ems",
  },
  {
    id: "asset-management",
    category: "solar energy",
    title: "Asset Management Web Portal",
    description:
      "A smart platform to manage and monitor your solar assets with real-time data and analytics.",
    image: p2,
    projectInfo: [
      { label: "Efficiency", value: "99%" },
      { label: "Assets Tracked", value: "1,200+" },
    ],
    scope: {
      heading:
        "We provide digital solutions to ensure maximum uptime and asset longevity.",
      points: [
        {
          title: "Smart Monitoring",
          description:
            "Real-time monitoring ensures your assets are always optimized.",
        },
        {
          title: "Predictive Maintenance",
          description:
            "Reduce downtime by predicting failures before they occur.",
        },
        {
          title: "Detailed Reporting",
          description:
            "Comprehensive insights into performance and ROI.",
        },
      ],
    },
    result: {
      description:
        "Our portal allows businesses to track and manage their renewable assets efficiently.",
      images: [r2, r1],
    },
    prevId: "ems",
    nextId: "subsidies",
  },
  {
    id: "ems",
    category: "solar energy",
    title: "EMS Web Portal",
    description:
      "A comprehensive energy management system that combines hardware and software intelligence.",
    image: p3,
    projectInfo: [
      { label: "Energy Saved", value: "40%" },
      { label: "Budget Optimized", value: "$100 M" },
    ],
    scope: {
      heading:
        "We design EMS solutions to give businesses complete control over their energy usage.",
      points: [
        {
          title: "Energy Monitoring",
          description:
            "Get real-time energy consumption data across your facilities.",
        },
        {
          title: "Optimization Tools",
          description:
            "AI-powered recommendations to lower costs and improve efficiency.",
        },
        {
          title: "Sustainability Tracking",
          description:
            "Monitor CO2 reduction and meet ESG compliance goals.",
        },
      ],
    },
    result: {
      description:
        "EMS customers benefit from reduced costs, higher energy savings, and better sustainability tracking.",
      images: [r1, r2],
    },
    prevId: "subsidies",
    nextId: "asset-management",
  },
];
