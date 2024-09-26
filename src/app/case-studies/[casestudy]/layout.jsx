
//===== Meta Data =====
export const generateMetadata = ({ params }) => {
    return {
        //===== Meta Tags =====
        title: "Case Studies | BitsWits",
        description: "",
        //===== OG Tags =====
        openGraph: {
            title: "Case Studies | BitsWits",
            description: "",
            url: `/case-studies/${params.casestudy}`,
            siteName: 'BitsWits',
            locale: 'en_US',
            type: 'website',
            images: "/public/images/icons/footerlogo.png",
        },
        //===== Canonical =====
        alternates: { canonical: `/case-studies/${params.casestudy}` },
    }
}


export default function RootLayout({ children, params }) {
    const metadata = generateMetadata({ params });
    return (children)
}
