import { Facebook, Instagram, Tiktok, Linkedin, X, Malaria, HIV, BreastCancer, Diabetes, Mission, Vision, MSAKE, IFMSA, User as Member } from "@/assets"
import { BadgeCheck, Puzzle, Lightbulb,Users } from "lucide-react";
import { image } from "framer-motion/client";
import { title } from "process";
export const socialLinks = [
    {
        name: "Facebook",
        url: "https://www.facebook.com/scophku",
        icon: Facebook,
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/scoph_ku",
        icon: Instagram,
    },
    {
        name: "Tiktok",
        url: "https://www.tiktok.com/@scophloku",
        icon: Tiktok,
    },
    {
        name: "Linkedin",
        url: "https://www.linkedin.com/scophku",
        icon: Linkedin,
    },
    {
        name: "X",
        url: "https://twitter.com/scoph_ku",
        icon: X,
    },
]
export const NavItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Team", path: "/team" },
    { name: "Events", path: "/events" },
    { name: "Blog", path: "/blog" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
    { name: "Campaigns", path: "/campaigns" }
];
export const contactDetails = [
    {name: "Email", url: "mailto:kZSdI@example.com", value: "kZSdI@example.com"},
    {name: "Phone", url: "tel:+254712345678", value: "+254712345678"},
    {name: "Address", url: "https://www.google.com/maps/place/Nairobi,+Kenya/@-1.286389,36.817223,12z/data=!3m1!4b1!4m6!3m5!1s0x182f0d2a2c2e7b9f:0x7c8e8f8e8e8e8e8e!8m2!3d-1.286389!4d36.817223!16zL20vMDJtZ3A", value: "Nairobi, Kenya"},
];

export const Campaigns = [
    {
        id: "campaign-1",
        rank: "featured",
        image: Malaria,
        name: "Malaria Campaign",
        date: "June 7th, 2025",
        overview: "Raising awareness about malaria prevention, diagnosis, and treatment in collaboration with NiMSA-SCOPH.",
        description : "Our Malaria Awareness Campaign aims to educate communities about malaria prevention, early diagnosis, and effective treatment. Malaria remains a significant public health concern in many parts of Kenya, and through education and community engagement, we can reduce its impact.",
        collaboration: "Partnered with NiMSA-SCOPH (Nigeria) for knowledge exchange and resource sharing.",
        activities : "Online awareness campaign reaching over 5,000 people with educational content.",
        impact: "Official launch of Kenyatta University SCOPH chapter during this campaign."
    },
    {
        id: "campaign-2",
        rank: "featured",
        image: BreastCancer,
        name: "Breast Cancer Awareness",
        date: "October, 2025",
        overview: "Raising awareness about breast cancer prevention, early diagnosis, and treatment in collaboration with NiMSA-SCOPH.",
        description: "Every October, SCOPH-KU runs a comprehensive breast cancer awareness campaign to educate our community about early detection, risk factors, and the importance of regular screening. We believe that awareness and education are powerful tools in the fight against breast cancer.",
        collaboration: "Collaboration with Aga Khan Kamakis for professional screening services.",
        activities: "Organized workshops and seminars on breast self-examination techniques and early detection, distributing pink ribbons across campus to raise awareness,  and social media campaigns to promote breast cancer awareness.",
        impact: "Increased awareness about breast cancer prevention and early detection among students and staff, with over 1,000 participants in workshops and seminars."
    },
    {
        id: "campaign-3",
        rank: "featured",
        image: HIV,
        name: "HIV/AIDS Awareness",
        date: "December, 2025",
        overview: "December 1st campaign in collaboration with Kiambu County Government and MEDSAR-SCOPH.",
        description: "On World AIDS Day, SCOPH-KU organizes a comprehensive campaign to raise awareness about HIV/AIDS prevention, testing, and treatment. We aim to reduce stigma, increase knowledge, and promote healthy behaviors in our community.",
        collaboration: "Collaboration with Kiambu County Government for an educational event on campus and with Partnered with MEDSAR-SCOPH (Rwanda) for an international perspective on HIV/AIDS.",
        activities: "Organized free HIV testing events on campus, Exchange of public health strategies and approaches between different countries.",
        impact: "Increased awareness about HIV/AIDS prevention and treatment among students and staff, with over 1,500 participants in testing events and educational activities."
    },
    {
        id: "campaign-4",
        rank: "campaign",
        image: Diabetes,
        name: "Diabetes Awareness",
        date: "November, 2025",
        overview: "Raising awareness about diabetes prevention, management, and healthy lifestyles.",
        description: "Our Diabetes Awareness Campaign focuses on educating our community about diabetes prevention, management, and the importance of a healthy lifestyle. We aim to empower individuals to make informed choices that promote their health and well-being.",
        collaboration: "Collaboration with local health organizations for educational resources and support.",
        activities: "Organized workshops on healthy eating and physical activity, distributed educational materials on diabetes prevention and management, and hosted a health fair with free blood sugar screenings.",
        impact: "Increased awareness about diabetes prevention and management among students and staff, with over 800 participants in workshops and health fair activities."
    },
    {
        id: "campaign-5",
        rank: "campaign",
        image: Malaria,
        name: "Malaria Awareness Campaign",
        date: "June 7th, 2025",
        overview: "Raising awareness about malaria prevention, diagnosis, and treatment in collaboration with NiMSA-SCOPH.",
        description : "Our Malaria Awareness Campaign aims to educate communities about malaria prevention, early diagnosis, and effective treatment. Malaria remains a significant public health concern in many parts of Kenya, and through education and community engagement, we can reduce its impact.",
        collaboration: "Partnered with NiMSA-SCOPH (Nigeria) for knowledge exchange and resource sharing.",
        activities : "Online awareness campaign reaching over 5,000 people with educational content.",
        impact: "Official launch of Kenyatta University SCOPH chapter during this campaign."
    }
]
export const MissionVision = [
    {
        title: "Our Mission",
        image: Mission,
        description: "To inspire and equip medical students to become proactive advocates for public health by nurturing their knowledge, skills, and passion for tackling global health challenges.",
    },
    {
        title: "Our Vision",
        image: Vision,
        description: "A future where healthcare professionals are empowered to champion health equity, prevent diseases, and enhance the well-being of communities around the globe.",
    },
]
export const CoreValues = [
    {
        id: 1,
        title: "Collaboration",
        icon: Users,
        description: "We believe in the power of teamwork and partnerships to achieve greater impact in public health.",
    },
    {
        id: 2,
        title: "Innovation",
        icon: Lightbulb,
        description: "We embrace creative and forward-thinking approaches to address public health challenges.",
    },
    {
        id: 3,
        title: "Inclusivity",
        icon: Puzzle,
        description: "We value diversity and ensure that our initiatives are accessible and beneficial to all communities.",
    },    
    {
        id: 4,
        title: "Excellence",
        icon: BadgeCheck,
        description: "We strive for the highest standards in all our activities and educational programs.",
    }
]
export const Affiliations = [
    {
        id: 1,
        name: "Medical Students Association of Kenya (MSAKE)",
        link: "https://msake.org/",
        description: "SCOPH-KU operates as a key committee under MSAKE, which represents medical students across Kenya. MSAKE is The national body representing medical students in Kenya, working towards the advancement of medical education and healthcare in the country.",
        logo: MSAKE,
    },
    {
        id: 2,
        name: "International Federation of Medical Students' Associations (IFMSA)",
        link: "https://ifmsa.org/",
        description: "Through MSAKE, we are connected to IFMSA, A global federation of medical students' organizations, dedicated to improving global health and advocating for the rights of medical students.",
        logo: IFMSA,
    },
    
]
export const TeamMembers = [
  {
    id: 1,
    name: "Faith Okwaro",
    role: "Committee Chair",
    bio: "Faith leads with passion and dedication, overseeing all SCOPH-KU initiatives and ensuring our team works effectively towards our public health goals.",
    image: Member,
  },
  {
    id: 2,
    name: "Peter Walibora",
    role: "Vice Chair",
    bio: "Peter assists in coordinating activities and steps in when the chair is unavailable, bringing enthusiasm and fresh ideas to our campaigns.",
    image: Member,
  },
  {
    id: 3,
    name: "Kanga Okubasu",
    role: "Secretary",
    bio: "Kanga maintains records, handles correspondence, and ensures smooth communication between the committee and its partners.",
    image: Member,
  },
  {
    id: 4,
    name: "Fredrick Mukani",
    role: "Treasurer",
    bio: "Fredrick manages financial resources, prepares budgets for campaigns, and ensures fiscal responsibility in all our activities.",
    image: Member,
  },
  {
    id: 5,
    name: "Immaculate Wambui",
    role: "Campaigns Coordinator",
    bio: "Immaculate organizes and leads our health awareness campaigns, bringing creativity and strategic planning to our outreach efforts.",
    image: Member,
  },
  {
    id: 6,
    name: "Nicole Oduor",
    role: "Public Relations Officer",
    bio: "Nicole manages our online presence, creates engaging content, and builds relationships with other organizations and the community.",
    image: Member
  },
  {
    id: 7,
    name: "Peter Mumo",
    role: "Research Coordinator",
    bio: "Peter guides our evidence-based approaches, leading research initiatives and analyzing data to improve our public health interventions.",
    image: Member,
  },
  {
    id: 8,
    name: "Sandra Gatwiri",
    role: "Community Outreach Officer",
    bio: "Sandra develops and maintains relationships with local communities, identifying needs and opportunities for health education and support.",
    image: Member,
  },
  {
    id: 9,
    name: "Mark Ian Mwangi",
    role: "Education Coordinator",
    bio: "Mark develops educational resources and workshops to equip medical students with knowledge and skills in public health practice.",
    image: Member,
  },
  {
    id: 10,
    name: "Bethwell Hillary",
    role: "Logistics Coordinator",
    bio: "Bethwell ensures that all campaigns and events run smoothly by handling the practical aspects of organization and resource management.",
    image: Member,
  }
];
export const PortfolioItems = [
    {
        id: 1,
        title: "Malaria Awareness Campaign Launch",
        category: "Campaign",
        date: "June 7, 2025",
        description: "Official launch of our malaria awareness initiative in collaboration with NiMSA-SCOPH (Nigeria).",
        outcomes : [
            "Increased awareness about malaria prevention and treatment.",
            "Engaged over 5,000 people through online platforms.",
            "Strengthened collaboration with NiMSA-SCOPH for future initiatives.",
        ],
        images: [
            Malaria,
            Diabetes,
            BreastCancer,
            HIV,
        ],
    },
    {
        id: 2,
        title: "Breast Cancer Education Workshop",
        category: "Workshop",
        date: "October 2025",
        description: "A workshop focused on breast cancer awareness, prevention, and early detection techniques.",
        outcomes : [
            "Organized workshops and seminars on breast self-examination techniques.",
            "Distributed educational materials on breast cancer prevention.",
            "Increased awareness about breast cancer among students and staff.",
        ],
        images: [
            BreastCancer,
            Malaria,
            Diabetes,
            HIV,
        ],
    },
    {
        id: 3,
        title: "World AIDS Day Webinar",
        category: "Webinar",
        date: "December 1, 2025",
        description: "Joint online seminar with MEDSAR-SCOPH Rwanda discussing HIV prevention strategies.",
        outcomes : [
            "Increased awareness about HIV/AIDS prevention and treatment.",
            "Engaged over 1,500 participants in testing events and educational activities.",
            "Strengthened collaboration with MEDSAR-SCOPH Rwanda for future initiatives.",
        ],
        images: [
            HIV,
            Malaria,
            Diabetes,
            BreastCancer,
        ],
    },
    {
        id:4,
        title: "Community Health Screening Event",
        category: "Outreach",
        date: "November 2025",
        description: "A community health screening event focusing on diabetes prevention and management.",
        outcomes : [
            "Organized workshops on healthy eating and physical activity.",
            "Distributed educational materials on diabetes prevention and management.",
            "Increased awareness about diabetes prevention among students and staff.",
        ],
        images: [
            Diabetes,
            Malaria,
            BreastCancer,
            HIV,
        ],
    },
    {
        id: 5,
        title: "Public Health Advocacy Training",
        category: "Training",
        date: "January 2026",
        description: "Training session for medical students on public health advocacy and leadership skills.",
        outcomes : [
            "Equipped students with knowledge and skills in public health advocacy.",
            "Fostered a culture of proactive public health engagement among participants.",
            "Strengthened the capacity of future healthcare leaders.",
        ],
        images: [
            Malaria,
            Diabetes,
            BreastCancer,
            HIV,
        ],
    },
    {
        id: 6,
        title: "Public Health Research Symposium",
        category: "Academic",
        date: "February 2025",
        description: "A symposium where medical students showcase research projects and findings related to local public health issues.",
        outcomes : [
            "Increased awareness about health equity issues among students and staff.",
            "Fostered discussions on strategies for addressing healthcare disparities.",
            "Strengthened partnerships with local health organizations.",
        ],
        images: [
            BreastCancer,
            Malaria,
            Diabetes,
            HIV,
        ],
    },
    {
        id: 7,
        title: "Health Equity Awareness Campaign",
        category: "Campaign",
        date: "March 2025",
        description: "A campaign focused on raising awareness about health equity issues in our community.",
        outcomes : [
            "Increased awareness about health equity issues among students and staff.",
            "Fostered discussions on strategies for addressing healthcare disparities.",
            "Strengthened partnerships with local health organizations.",
        ],
        images: [
            HIV,
            Malaria,
            Diabetes,
            BreastCancer,
        ],
    },
    {
        id: 8,
        title: "IFMSA Regional Meeting Participation",
        category: "Conference",
        date: "April 2025",
        description: "SCOPH-KU representatives attending the IFMSA regional meeting to share experiences and learn from other chapters.",
        outcomes : [
            "Strengthened connections with other IFMSA chapters.",
            "Shared best practices and strategies for effective public health initiatives.",
            "Gained insights into global health challenges and solutions.",
        ],
        images: [
            Diabetes,
            Malaria,
            BreastCancer,
            HIV,
        ]
    },
];
export const PortfolioCategories = [
    
    {   
        id: 1,
        name: "All",
    },

    {
        id: 2,
        name: "Campaign",
    },
    {
        id: 3,
        name: "Workshop",
    },
    {
        id: 4,
        name: "Webinar",
    },
    {
        id: 5,
        name: "Outreach",
    },
    {
        id: 6,
        name: "Training",
    },
    {
        id: 7,
        name: "Academic",
    },
    {
        id: 8,
        name: "Conference",
    },
]
