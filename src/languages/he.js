const he = {
  definitions: {
    hello: "היי",
    iam: "אני",
    specialized: "מתמחה ב",
  },
  languages: {
    title: "שנה שפה",
    hebrew: "עברית",
    english: "אנגלית",
  },
  data: {
    name: "עידן לזר",
    description: "מפתח פולסטאק",
    skills: [
      "Front-End Development",
      "Back-End Development",
      "React JS",
      "Node JS",
      "UX/UI",
      "HTML + CSS + JS",
    ],
    about: {
      header: "קצת עליי",
      title: "היי, אני עידן לזר. נעים להכיר",
      content: "מאז תחילת דרכי כמפתח אתרים עצמאי לפני כמעט 3 שנים, עשיתי עבודה מרחוק עבור סוכנויות, התייעצתי עם חברות סטארט-אפ ושיתפתי פעולה עם אנשים מוכשרים ליצירת מוצרים דיגיטליים לשימוש עסקי וגם לצרכן. אני בטוח בעצמי, סקרן באופן טבעי ועובד ללא הרף על שיפור כישורי צעד אחר צעד.",
      resume: {
        title: 'צפייה בקו"ח',
        link:
          "https://drive.google.com/file/d/1SQXUT1AVyrrbO_XkHGtM6Vnfspy7PGg-/view?usp=sharing",
      },
      hireMe: "להעסיק אותי",
    },
    social: {
      github: "https://github.com/lazarid",
      whatsapp: "https://wa.me/972548370965",
    },
    ContactElement: "Contact",
  },
  services: {
    header: "מה אני עושה",
    title: "השירותים שלי:",
    myServices: [
      {
        icon: "icon-desktop",
        title: "עיצוב",
        content:
          "הגישה שלי לעיצוב אתרים היא ליצור אתר שמחזק את המותג של החברה שלך תוך הקפדה על קלות שימוש ופשטות לקהל שלך.",
      },
      {
        icon: "icon-pencil",
        title: "פיתוח",
        content:
          "פיתוח פרונט ובק , עיצוב אינטראקציה עם הטכנולוגיות המתקדמות ביותר בשוק: HTML5, CSS3, React Js, Node Js, Express, Mongo DB, ועוד רבים אחרים כדי לספק שירות איתם, ולבנות את האתר הטוב ביותר עבורכם",
      },
      {
        icon: "icon-tools",
        title: "ניסיון",
        content:
          "מפתח פולסטאק יותר משנתיים, ניסיון רב בפיתוח אפליקציות אינטרנטיות עם הטכנולוגיות החדשות ביותר בשוק",
      },
      {
        icon: "icon-linegraph",
        title: "אסטרטגיה",
        content:
          "עבוד יחד לבניית אסטרטגיה מלאה להמשך הדרך לבניית האתר הטוב ביותר לצורך שלך.",
      },
      {
        icon: "icon-gears",
        title: "תמיכה",
        content:
          "תמיכה מלאה בתחזוקת האתר ומתן מענה לכל בעיה שתתעורר בדרך.",
      },
      {
        icon: "icon-presentation",
        title: "רספונסיבי ומהיר",
        content:
          "צריך לבנות כל אתר עם שתי מטרות עיקריות: ראשית, הוא צריך לעבוד בכל המכשירים. שנית, זה צריך להיות מהיר ככל האפשר.",
      },
    ],
  },
  tabs: ["ראשי", "קצת עליי", "שירותים", /* "תיק עבודות", */ /* "בבנייה", */ "צור קשר"],
  portfolio: {
    header: "תיק העבודות שלי",
    title: "אני אוהב את מה שאני עושה. אני מתגאה מאוד במה שאני עושה.",
    projects: [
      {
        name: "Zira1 - Real Estate Platform",
        image: "/images/zira1.png",
        description: "Build With: React + Node JS + Express + MongoDB",
        link: "https://www.zira1.com/",
        code_link: "",
      },
      {
        name: "Zira1",
        image: "/images/zira1.png",
        description:
          "Build With: React + TypeScript + Node JS + Express + MongoDB",
        link: "",
        code_link: "",
      },
      {
        name: "Zira1",
        image: "/images/zira1.png",
        description:
          "Build With: React + TypeScript + Node JS + Express + MongoDB",
        link: "",
        code_link: "",
      },
      {
        name: "Zira1",
        image: "/images/zira1.png",
        description:
          "Build With: React + TypeScript + Node JS + Express + MongoDB",
        link: "",
        code_link: "",
      },
    ],
  },
  contact: {
    info: {
      title: "פרטים ליצירת קשר",
      details: [
        {
          icon: "https://unpkg.com/@icon/elegant-icons/icons/icon_pin_alt.svg",
          title: "כתובת: יבנה , ישראל",
        },
        {
          icon: "https://unpkg.com/@icon/elegant-icons/icons/icon_phone.svg",
          title: "טלפון: 0548370965",
        },
        {
          icon: "https://unpkg.com/@icon/elegant-icons/icons/icon_mail.svg",
          title: "מייל: Idanlazar8241@gmail.com",
        },
      ],
    },
    message: {
      title: "צור איתי קשר",
      body: {
        name: "שם*",
        email: "מייל*",
        subject: "נושא*",
        context: "תוכן ההודעה ...",
        send: "שלח הודעה",
        success: 'הבקשה נשלחה, אני אפנה אליך בהקדם.'
      },
    },
  },
};

export default he;
