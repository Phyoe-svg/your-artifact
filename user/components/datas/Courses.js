import db from "../Model.js";

const courses = new db.course();
courses.insert({
  info: {
    course_id: 0,
    imgURL: "./assets/images/js.png",
    title: "JavaScript",
    aurthor: "WaifarKolar( Brighter Myanmar )",
    info: "A course what'll up you to the next level of intermediate from beginner.",
    rating: "8",
    level: "Intermediate",
  },
  lessons: [
    {
      id: 0,
      course_id: 0,
      topic: "1 Course Introduction",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/FxRJkCy24HU?si=jGpyN7Njrmlni3-B" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: " Course Introduction",
    },
    {
      id: 1,
      course_id: 0,
      topic: "2 Environment Setup",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/rhrkiT0vByA?si=e08E8ifgaoBuGIkn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "Environment Setup",
    },
    {
      id: 2,
      course_id: 0,
      topic: "3 Plugin Installation",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/V-ISm92EmjA?si=mFEycei2MjsVYLkZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "Plugin Installation",
    },
    {
      id: 3,
      course_id: 0,
      topic: "4 Basic Concepts",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/xghATG_QbzA?si=l3Qhez3KOtApSW60" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "Basic Concepts",
    },
    {
      id: 4,
      course_id: 0,
      topic: "5 Single Line And Multiline Comments",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/UJZ57NfRtCM?si=Xsz9_G-U4k7fWRvf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "Single Line And Multiline Comments",
    },
    {
      id: 5,
      course_id: 0,
      topic: "6 Number And String",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/bNdpUhxS0vU?si=nUcG8be4L9CiSIVQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "Number And String",
    },
    {
      id: 6,
      course_id: 0,
      topic: "7 Assign And Reassign",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/QHyoAqskhgc?si=8dLUv_r8HtBi6R3Z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "Assign And Reassign",
    },
    {
      id: 7,
      course_id: 0,
      topic: "8 Naming Convenstion Consoles",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/awj2g4r5TZc?si=fqkb46KiJ8nmpByJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "Naming Convenstion Consoles",
    },
    {
      id: 8,
      course_id: 0,
      topic: "9 JavaScript Array",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/39nm0hSAYAY?si=P_asgrgnn-mZABUN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "JavaScript Array",
    },
    {
      id: 9,
      course_id: 0,
      topic: "10 Object",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/KSQOixN3WO4?si=7W-s0FGn7GOhg6Wy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "Object",
    },
    {
      id: 10,
      course_id: 0,
      topic: "11 Variable And Assigment Operators",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/LaMTnhRZa_U?si=YGUGhrhd1pzfXJe1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "Variable And Assigment Operators",
    },
    {
      id: 11,
      course_id: 0,
      topic: "12 Conditional Operators",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/meHuHEFB5gg?si=IkRRZzYR32GVHVpE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "Conditional Operators",
    },
    {
      id: 12,
      course_id: 0,
      topic: "13 Conditional Statement",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/zKGRI_5pMXw?si=MUPPemsGlc0Nce3l" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "Conditional Statement",
    },
    {
      id: 13,
      course_id: 0,
      topic: "14 If Statement",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/Nn_AP3b4zn4?si=6nguuHJmpRWAGtxQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "If Statement",
    },
    {
      id: 14,
      course_id: 0,
      topic: "15 Switch Statement",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/ZiOrZ0dB8Gk?si=mrm3j4UNIbXBYqBv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "Switch Statement",
    },
    {
      id: 15,
      course_id: 0,
      topic: "16 forloop",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/pmVQqZjVYwc?si=8dppwlNR3BEx7QOs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "forloop",
    },
    {
      id: 16,
      course_id: 0,
      topic: "17 while loop",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/1M6zq97wiKc?si=0Qq21zJypPbiuq3y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "while loop",
    },
    {
      id: 17,
      course_id: 0,
      topic: "18 Do While Loop",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/okTUIJ6d17c?si=KaE9nu6MIihf-79u" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "Do While Loop",
    },
    {
      id: 18,
      course_id: 0,
      topic: "19 For While Do While Loops",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/2oHQiNto1AI?si=_Vzv5eN7-bdKudLE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "For While Do While Loops",
    },
    {
      id: 19,
      course_id: 0,
      topic: "20 Foreach",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/qjBxAF_OrYE?si=ABo0a8Zw-mUXiTOm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "Foreach",
    },
    {
      id: 20,
      course_id: 0,
      topic: "21 For In Loop",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/sklr-ppafT4?si=Z37E3q5neKaCR_BR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "For In Loop",
    },
    {
      id: 21,
      course_id: 0,
      topic: "22 Object Map FindIndex",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/KLFnjcChQNI?si=X6H8S98lMnbfdiRp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "Object Map FindIndex",
    },
    {
      id: 22,
      course_id: 0,
      topic: "23 Permetive And Refrence Type",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/Aqzye0bkCzg?si=SpkUdoqebbCn2Mln" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "Permetive And Refrence Type",
    },
    {
      id: 23,
      course_id: 0,
      topic: "24 Math Object",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/u_tn1DiaS3A?si=jqw-BeI2qOXVDr2b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "Math Object",
    },
    {
      id: 24,
      course_id: 0,
      topic: "25 Type Converting",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/lBjpbzbHAxE?si=SHVKtAdda3cY61Vz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "Type Converting",
    },
    {
      id: 25,
      course_id: 0,
      topic: "26 Tynary Operator",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/l384O7jOYw0?si=h2TAT6mozoMbsXtr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "Tynary Operator",
    },
    {
      id: 26,
      course_id: 0,
      topic: "27 Functions",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/_i89D-0Tz48?si=m_pGyAKa6Gz0F3TN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "Functions",
    },
    {
      id: 27,
      course_id: 0,
      topic: "28 Template Literal",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/ExASwVfCsEg?si=zDx2eXg2SBkTArXT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "Template Literal",
    },
    {
      id: 28,
      course_id: 0,
      topic: "29 Function Express IIFEs",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/nHwOBgOVtvI?si=7nKFK0yU4mxVjoi_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "Function Express IIFEs",
    },
    {
      id: 29,
      course_id: 0,
      topic: "30 Array Functions",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/4InwBTEpol4?si=UErzBg-vV2YkES4w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "Array Functions",
    },
    {
      id: 30,
      course_id: 0,
      topic: "31 Date Object",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/B5H_4D85-_I?si=Mkq_XY5zU9JnSyvY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "Date Object",
    },
    {
      id: 31,
      course_id: 0,
      topic: "32 Array Sorting",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/tR7NT3UYWsk?si=8qr1AXAZsn67ywy2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "Array Sorting",
    },
    {
      id: 32,
      course_id: 0,
      topic: "33 Scope Var Let Const",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/mVHyvPLvryI?si=GqmK6nwY3WpHL7EN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "Scope Var Let Const",
    },
    {
      id: 33,
      course_id: 0,
      topic: "34 String Properties And Methods",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/MRjPJKsU-g8?si=pmR2cpnfoY3FC08z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "String Properties And Methods",
    },
    {
      id: 34,
      course_id: 0,
      topic: "35 WIndow Object",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/mKzVS6byiGg?si=smJCe3TyQylT85d8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "WIndow Object",
    },
    {
      id: 35,
      course_id: 0,
      topic: "36 DOM 1",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/H4Vf9_8A8lI?si=9Bib9quf2H7jC14-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "DOM 1",
    },
    {
      id: 36,
      course_id: 0,
      topic: "37 QuerySelector",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/SsKuJJV6MHc?si=N-O0RXEoWkDu8yFd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "QuerySelector",
    },
    {
      id: 37,
      course_id: 0,
      topic: "38 Travesting Nodes",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/hYS2zQXCIWQ?si=Vf3oT38QRAitLDRZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "Travesting Nodes",
    },
    {
      id: 38,
      course_id: 0,
      topic: "39 Create Element",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/xYyTAcSqeoM?si=WSHkMl_n1dtUU0sN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "Create Element",
    },
    {
      id: 39,
      course_id: 0,
      topic: "40 Replacing Elements",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/uVax6JVz2no?si=jhjOmbvSpRF3WDgp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "Replacing Elements",
    },
    {
      id: 40,
      course_id: 0,
      topic: "41 EventListener",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/kMxmDM5cdHA?si=8Fu0Wnt68f6UsXGk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "EventListener",
    },
    {
      id: 41,
      course_id: 0,
      topic: "42 More Events",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/Hly9VGbpyFg?si=K9O8wrUV38smRJ0x" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "More Events",
    },
    {
      id: 42,
      course_id: 0,
      topic: "43 Form Events",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/gUci6y_JtJM?si=dAwatZhyzExSjrgf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "Form Events",
    },
    {
      id: 43,
      course_id: 0,
      topic: "44 Local Storage",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/fh1_fmeF4ow?si=xKyn-Yy_p2ITumHT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "Local Storage",
    },
    {
      id: 44,
      course_id: 0,
      topic: "45 Session Storage",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/a7m1ClG1Qm8?si=tK8D3ho1fTvTsPn4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "45 Session Storage",
    },
    {
      id: 45,
      course_id: 0,
      topic: "46 Constructor And This",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/vo2whmmQk1Q?si=B0wQ2TTfzCRt7l18" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "Constructor And This",
    },
    {
      id: 46,
      course_id: 0,
      topic: "47 Build in Constructor",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/rSWKXZjZqU8?si=lLxdfRb5PSeaWwTE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "Build in Constructor",
    },
    {
      id: 47,
      course_id: 0,
      topic: "48 Prototype",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/Sx5WCAGPSn0?si=8ZKs1vjyplk-2JJk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "Prototype",
    },
    {
      id: 48,
      course_id: 0,
      topic: "49 Prototype Inherientance",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/OwVRAaC17aA?si=Al_lJHp1z8wn6CNT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "Prototype Inherientance",
    },
    {
      id: 49,
      course_id: 0,
      topic: "50 Prototype Otherway",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/vtkgTS7J34k?si=cn7djXQjpO07FOWX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "Prototype Otherway",
    },
    {
      id: 50,
      course_id: 0,
      topic: "51 Ecmas 6 Class",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/QSXujMgCF9U?si=HMVKFp_JKPNnnyaf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "Ecmas 6 Class",
    },
    {
      id: 51,
      course_id: 0,
      topic: "52 Ecmas Inheritance",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/DQ60itau7I8?si=BqSE3TENISwyNLaP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "Ecmas Inheritance",
    },
    {
      id: 52,
      course_id: 0,
      topic: "53 XMLHttpRequest",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/XFv0aaYNqGQ?si=k6ptRUV_xRpMZpfi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "XMLHttpRequest",
    },
    {
      id: 53,
      course_id: 0,
      topic: "54 XMLHttpRequest OnLoad",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/bvgrpSSLoWM?si=5MOCSj-R2vVT0leC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "XMLHttpRequest OnLoad",
    },
    {
      id: 54,
      course_id: 0,
      topic: "55 Callback Function",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/NFLZSRLgBa8?si=u_QsUvmXDykSBfdQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "Callback Function",
    },
    {
      id: 55,
      course_id: 0,
      topic: "56 Promise",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/DSwBbr3J5fI?si=HiJEPy6V85MEcZV4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "Promise",
    },
    {
      id: 56,
      course_id: 0,
      topic: "57 Fetch Api",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/h6AMeiY8IJQ?si=heMips2lKYKF8b8X" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "Fetch Api",
    },
    {
      id: 57,
      course_id: 0,
      topic: "58 Arrow Function",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/gZkWbXojtZo?si=BfckaFi3KnK1CjtS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "Arrow Function",
    },
    {
      id: 58,
      course_id: 0,
      topic: "59 Async Await",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/IzfRvimMDKM?si=JUExgi-9pxjD4zqD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "Async Await",
    },
    {
      id: 59,
      course_id: 0,
      topic: "60 Fetch And Promise",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/bZz-eowRx4U?si=-vr0rXc2jWPkdDCC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "Fetch And Promise",
    },
    {
      id: 60,
      course_id: 0,
      topic: "61 Error Handling",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/qv6155a13Io?si=T0hbD7eZ69VwL7ZF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "Error Handling",
    },
    {
      id: 61,
      course_id: 0,
      topic: "62 Regular Expression Functions",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/Hyrje_3LLHo?si=Yzsv6l3sE_svQqmJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "Regular Expression Functions",
    },
    {
      id: 62,
      course_id: 0,
      topic: "63 Regular Expression 2",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/SUw4XIlQeWQ?si=nKOgwUOVUjpiU8xw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "Regular Expression 2",
    },
    {
      id: 63,
      course_id: 0,
      topic: "64 Regular Expression 3",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/G_aOt7SwLBs?si=PLvY4VB_rcaI2GVs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "Regular Expression 3",
    },
    {
      id: 64,
      course_id: 0,
      topic: "65 Regular Expression 4",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/hONqH5SwaD8?si=rSgpgemT6X0Ciheq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "Regular Expression 4",
    },
    {
      id: 65,
      course_id: 0,
      topic: "66 Form Validation",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/18D9ax9qD74?si=ApohL5nk362DigzM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "Form Validation",
    },
    {
      id: 66,
      course_id: 0,
      topic: "67 Form Validation 2",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/jEDpAtZ0AJs?si=4hdLTbeFFqNoBo3A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "Form Validation 2",
    },
    {
      id: 67,
      course_id: 0,
      topic: "68 Form Validation 3",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/5ViWZDdPWF8?si=PE-aNeVIwmh35D4j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "Form Validation 3",
    },
    {
      id: 68,
      course_id: 0,
      topic: "69 Iterator",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/xyOrZ5ub57Y?si=fPnmfh_d2bzgHcx1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "Iterator",
    },
    {
      id: 69,
      course_id: 0,
      topic: "70 Generator",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/D9BFrd4rucQ?si=O9QaQAxP6YdN6zm7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "Generator",
    },
    {
      id: 70,
      course_id: 0,
      topic: "71 ItermGenerator Sample 1",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/p7beNGs6tAg?si=ES-96JxIA8EmYRHl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "ItermGenerator Sample 1",
    },
    {
      id: 71,
      course_id: 0,
      topic: "72 ItermGenerator Sample 2",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/LwKXiKJtnBc?si=XedQ9WGQzRjby14u" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "ItermGenerator Sample 2",
    },
    {
      id: 72,
      course_id: 0,
      topic: "73 Symbol",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/cNHBOzfA0Io?si=m7VsQyc-sEa7mOv2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "Symbol",
    },
    {
      id: 73,
      course_id: 0,
      topic: "74 Destruction 1",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/ryXs_cm3grw?si=UVN13hpzRIMnshn4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "Destruction 1",
    },
    {
      id: 74,
      course_id: 0,
      topic: "75 Destruction 2",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/CJPyAP6mWAg?si=p4lW1TPU591KO8Ny" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "Destruction 2",
    },
    {
      id: 75,
      course_id: 0,
      topic: "76 Map",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/diYFoT9KMd8?si=4v-ROL9OfbclbezD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "Map",
    },
    {
      id: 76,
      course_id: 0,
      topic: "77 Set",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/BLF3b90317s?si=SFrWsBxzixQQ6Dcb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "Set",
    },
  ],
});

courses.insert({
  info: {
    course_id: 1,
    imgURL: "./assets/images/php.png",
    title: "PHP",
    aurthor: "Waifar Kolar",
    info: "PHP course that'll bring u from beginner to intermediate level. ",
    rating: "7",
    level: "Intermediate",
  },
  lessons: [
    {
      id: 0,
      course_id: 1,
      topic: "001 Project Setup",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/76zHxm4tTfk?si=aKmENiBCnpW6o9Ln" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "001 Project Setup",
    },
    {
      id: 1,
      course_id: 1,
      topic: "002 Creating A Class",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/kO8KG39JBSg?si=sRLG8X59uPeNi8bc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "002 Creating A Class",
    },
    {
      id: 2,
      course_id: 1,
      topic: "003 Creating Class Object",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/Z2sAhdPROv4?si=Qan65htroO8IsaeH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "003 Creating Class Object",
    },
    {
      id: 3,
      course_id: 1,
      topic: "004 Accessing Class Properties",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/8hOHvzdDWAM?si=36H6aha_upYeWi7x" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "004 Accessing Class Properties",
    },
    {
      id: 4,
      course_id: 1,
      topic: "005 Accessing Class Method",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/CoWMWxMHtW4?si=-SRisrCs2mPC1zCm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "005 Accessing Class Method",
    },
    {
      id: 5,
      course_id: 1,
      topic: "006 Method Overloading",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/okVCTtNbz7c?si=keHErnHmXzOHK6NZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "006 Method Overloading",
    },
    {
      id: 6,
      course_id: 1,
      topic: "007 Access Modifier",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/Fmnz8TBwJcw?si=VFbOOxLGQcW_PvaS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "007 Access Modifier",
    },
    {
      id: 7,
      course_id: 1,
      topic: "008 This Variable",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/7gT-VCHMYBY?si=39XpSK_MN_SZuaRU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "008 This Variable",
    },
    {
      id: 8,
      course_id: 1,
      topic: "009 Getter And Enculation",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/ju5SbVF03Bs?si=FkN8OM09-8nZvCt2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "009 Getter And Enculation",
    },
    {
      id: 9,
      course_id: 1,
      topic: "010 Setter And Getter",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/NTidyUp_V08?si=xF8TFpDoihIN_lhO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "010 Setter And Getter",
    },
    {
      id: 10,
      course_id: 1,
      topic: "011 Constructor",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/B4CwSEBw85g?si=Xqp9uWupvXZ5W4a-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "011 Constructor",
    },
    {
      id: 11,
      course_id: 1,
      topic: "012 Destructor",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/-7-1r-C0Fek?si=-pQkxS5w1_ROG7eQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "012 Destructor",
    },
    {
      id: 12,
      course_id: 1,
      topic: "013 Inheritance Introduction",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/THQNcngiiCk?si=lsYpAxbE4KKvvvPU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "013 Inheritance Introduction",
    },
    {
      id: 13,
      course_id: 1,
      topic: "014 Inheritance Simple Sample",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/s-x1ILmZTT8?si=69gCHGW1kZyYCMFQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "014 Inheritance Simple Sample",
    },
    {
      id: 14,
      course_id: 1,
      topic: "015 Overriding",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/ztk63ugT6mE?si=8u_CboF3O9NnKorA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "015 Overriding",
    },
    {
      id: 15,
      course_id: 1,
      topic: "016 Parent Constructor Invoking",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/1q5zVmQ6M3w?si=3bV8oa95ntBl78zN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "016 Parent Constructor Invoking",
    },
    {
      id: 16,
      course_id: 1,
      topic: "017 Trait",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/YL5SWVexf4o?si=VAwalW9Fs_pn67W9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "017 Trait",
    },
    {
      id: 17,
      course_id: 1,
      topic: "18 inter Array To Object",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/FHBaj2X04tA?si=Ou4LzZ2i1Zut7gev" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "18 inter Array To Object",
    },
    {
      id: 18,
      course_id: 1,
      topic: "19 magic 1 set get",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/CockzObpNkg?si=iS7QWFz4040aaL56" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "19 magic 1 set get",
    },
    {
      id: 19,
      course_id: 1,
      topic: "20 magic 2 isset unset",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/xwqRUQN7_VA?si=Bktem8pJqYSdpJh2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "20 magic 2 isset unset",
    },
    {
      id: 20,
      course_id: 1,
      topic: "21 magic 3 call staticCall",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/n2Y4gnXbHFU?si=5jzJVThWeB2_8kvg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "21 magic 3 call staticCall",
    },
    {
      id: 21,
      course_id: 1,
      topic: "22 magic 4 serialize And unserialize",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/X2AeW-4w1Rs?si=wwX54vGo9r3zUxv_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "22 magic 4 serialize And unserialize",
    },
    {
      id: 22,
      course_id: 1,
      topic: "23 magic 5 sleep and wakeup",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/gKswk9EffwI?si=TjZ4pHsB_z92-UN3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "23 magic 5 sleep and wakeup",
    },
    {
      id: 23,
      course_id: 1,
      topic: "24 magic 6 tostring invoke clone",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/TStSJf7_ka8?si=BtYAjAnv7AEV_y1M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "24 magic 6 tostring invoke clone",
    },
    {
      id: 24,
      course_id: 1,
      topic: "25 inter interface",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/klQmxK2oKzk?si=tXpdiwo42IgM-j7y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "25 inter interface",
    },
    {
      id: 25,
      course_id: 1,
      topic: "26 inter interface 2",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/yLFtj9dxcBY?si=-p8nduog5sqfBHne" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "26 inter interface 2",
    },
    {
      id: 26,
      course_id: 1,
      topic: "27 inter interface 3",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/Wn9Dt7PRoME?si=-_419lNNzstjLgDb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "27 inter interface 3",
    },
    {
      id: 27,
      course_id: 1,
      topic: "28 inter Static Modifier",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/7pkJ-umDLLk?si=A45iLXzAU2ZEuU5_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "28 inter Static Modifier",
    },
    {
      id: 28,
      course_id: 1,
      topic: "29 Static And None Static",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/ABFQbEBO2Wo?si=N9gPxVP_aIco11l0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "29 Static And None Static",
    },
    {
      id: 29,
      course_id: 1,
      topic: "30 Data Binding Introduction",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/IPZH1EEowI4?si=yE35gJDgXRjxvfad" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "30 Data Binding Introduction",
    },
    {
      id: 30,
      course_id: 1,
      topic: "31 Early Binding And Late Binding Sample 1",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/uaPpMefFYNI?si=eG6Q6NldqXgaHVw8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "31 Early Binding And Late Binding Sample 1",
    },
    {
      id: 31,
      course_id: 1,
      topic: "32 Early Binding And Late Binding Sample 2",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/6VExTUgKbKQ?si=DFCjaL6b2T5IWOL9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "32 Early Binding And Late Binding Sample 2",
    },
    {
      id: 32,
      course_id: 1,
      topic: "33 SignleTon Sample",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/rXfmkelwiGE?si=CfYRxFRunGbRKo0j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "33 SignleTon Sample",
    },
    {
      id: 33,
      course_id: 1,
      topic: "34 Constant Variable",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/7seidGTtlOg?si=dQcoqXn2WkkbQPsZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "34 Constant Variable",
    },
    {
      id: 34,
      course_id: 1,
      topic: "35 Abstract Method 1",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/JvHPJ13vDOo?si=tCJKSJeSy_KkJLfq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "35 Abstract Method 1",
    },
    {
      id: 35,
      course_id: 1,
      topic: "36 Abstract Method 2",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/ODRdsD6E_aI?si=C7wuNE10pBvgFbmD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "36 Abstract Method 2",
    },
    {
      id: 36,
      course_id: 1,
      topic: "37 Checking Veriable Types",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/9g3EA22Sfjs?si=ZbudeOCEwGY7inJS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "37 Checking Veriable Types",
    },
    {
      id: 37,
      course_id: 1,
      topic: "38 Scalar Type Hints",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/lZiPclrxeRM?si=5d1CkrlWgoBBy53U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "38 Scalar Type Hints",
    },
    {
      id: 38,
      course_id: 1,
      topic: "39 Array Type And Object Type Hint",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/Epktoy6nMQk?si=vih_-HbsnC0Me1LR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "39 Array Type And Object Type Hint",
    },
    {
      id: 39,
      course_id: 1,
      topic: "40 Return Type",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/rFP0oXxHTlM?si=fvSJyrTnxlIk5Edj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "40 Return Type",
    },
    {
      id: 40,
      course_id: 1,
      topic: "41 Complex Type Sample 1",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/Ln3SSJsshgw?si=-3Gw2yjc1Du6OgpA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "41 Complex Type Sample 1",
    },
    {
      id: 41,
      course_id: 1,
      topic: "42 Complex Type Sample 2",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/Fos1XQkLHKA?si=Kqzru2YexBIDC5Ub" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "42 Complex Type Sample 2",
    },
    {
      id: 42,
      course_id: 1,
      topic: "43 create function usage",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/_w1LqgvgueI?si=hLZFsSVYRDLzCDBp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "43 create function usage",
    },
    {
      id: 43,
      course_id: 1,
      topic: "44 Anonymous Functione",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/7yZnxAFDtwk?si=VfPqaHAFb4yruEIM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "44 Anonymous Functione",
    },
    {
      id: 44,
      course_id: 1,
      topic: "45 Lambda",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/hOxhmsx-Sm4?si=txb4CdUI7BglY7Zg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "45 Lambda",
    },
    {
      id: 45,
      course_id: 1,
      topic: "46 Closure",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/c1xWY3UiOKc?si=1L_Ro__7fdYbVGyr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "46 Closure",
    },
    {
      id: 46,
      course_id: 1,
      topic: " 47 Array Walker ",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/0hiGwHa17n8?si=IpQ6-45IfkBk1aU1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: " 47 Array Walker ",
    },
    {
      id: 47,
      course_id: 1,
      topic: "48 Array Walker And Lanbda Closure",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/JjVd7AO_nUk?si=q27-p_MWUsM0JmeO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "48 Array Walker And Lanbda Closure",
    },
    {
      id: 48,
      course_id: 1,
      topic: "49 Variadic",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/wTlKJOhEYeM?si=XgZxna4HpsbbhmIF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "49 Variadic",
    },
    {
      id: 49,
      course_id: 1,
      topic: "50 Coalesce",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/JCXdwZmeHAo?si=z9Drvz1bLuDeuLGM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "50 Coalesce",
    },
    {
      id: 50,
      course_id: 1,
      topic: "51 CallBack",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/pIPw5hmKYLM?si=uAC5AtJqku57XQ_n" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "51 CallBack",
    },
    {
      id: 51,
      course_id: 1,
      topic: "52 Try Catch And Finally",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/0-n7RNnTPBY?si=j6RFTnRYH8KWXnl-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "52 Try Catch And Finally",
    },
    {
      id: 52,
      course_id: 1,
      topic: "53 Simple Autoload",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/8umdV6CbVpg?si=MdBq0ggVkTf52L6s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "53 Simple Autoload",
    },
    {
      id: 53,
      course_id: 1,
      topic: "54 Composer Installation",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/fAYQqHLic1E?si=REV-6R1A3sE_a4g0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "54 Composer Installation",
    },
    {
      id: 54,
      course_id: 1,
      topic: "55 Composer Autoload",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/8UmwM2GoA0c?si=eu6HSyi93mhkXVXR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "55 Composer Autoload",
    },
    {
      id: 55,
      course_id: 1,
      topic: "56 Namespace",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/A-fUewULmjw?si=ZYHEiomocQ6EVb_1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "56 Namespace",
    },
    {
      id: 56,
      course_id: 1,
      topic: "57 PSR 4 Autoload",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/YvlUZEmYZlE?si=JAO37GDc6Agvf5Zv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "57 PSR 4 Autoload",
    },
    {
      id: 57,
      course_id: 1,
      topic: "58 PolyMorphism 1",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/8XZDqVPb17Y?si=dgZsYfqj_zj7wzjN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "58 PolyMorphism 1",
    },
    {
      id: 58,
      course_id: 1,
      topic: "59 PolyMorphism 2",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/ftYC50dvBgM?si=PQWIIhK1ajo3Qn03" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "59 PolyMorphism 2",
    },
    {
      id: 59,
      course_id: 1,
      topic: "60 Dependency Injection",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/nfHtdwEaLwc?si=imT03XJ1VBTuSqa6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "60 Dependency Injection",
    },
    {
      id: 60,
      course_id: 1,
      topic: "61 Dependency Injection 2",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/c6ShFvzUNSU?si=bAur28fWJpytzugC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "61 Dependency Injection 2",
    },
  ],
});

// node js
courses.insert({
  info: {
    course_id: "2",
    imgURL: "./assets/images/nodejs.png",
    title: "Node JS",
    aurthor: "Waiferkola",
    info: "Introduction to Node.js  Node.js is an open-source and cross-platform JavaScript runtime environment. It is a popular tool for almost any kind of project!  Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser. This allows Node.js to be very performant.  A Node.js app runs in a single process, without creating a new thread for every request. Node.js provides a set of asynchronous I/O primitives in its standard library that prevent JavaScript code from blocking and generally, libraries in Node.js are written using non-blocking paradigms, making blocking behavior the exception rather than the norm.  When Node.js performs an I/O operation, like reading from the network, accessing a database or the filesystem, instead of blocking the thread and wasting CPU cycles waiting, Node.js will resume the operations when the response comes back.  This allows Node.js to handle thousands of concurrent connections with a single server without introducing the burden of managing thread concurrency, which could be a significant source of bugs.  Node.js has a unique advantage because millions of frontend developers that write JavaScript for the browser are now able to write the server-side code in addition to the client-side code without the need to learn a completely different language.  In Node.js the new ECMAScript standards can be used without problems, as you don't have to wait for all your users to update their browsers - you are in charge of deciding which ECMAScript version to use by changing the Node.js version, and you can also enable specific experimental features by running Node.js with flags. An Example Node.js Application  The most common example Hello World of Node.js is a web server:  const http = require('node:http');  const hostname = '127.0.0.1'; const port = 3000;  const server = http.createServer((req, res) => {   res.statusCode = 200;   res.setHeader('Content-Type', 'text/plain');   res.end('Hello World\\n'); });  server.listen(port, hostname, () => {   console.log(`Server running at http://${hostname}:${port}/`); });  //JavaScript  To run this snippet, save it as a server.js file and run node server.js in your terminal.  This code first includes the Node.js http module.  Node.js has a fantastic standard library, including first-class support for networking.  The createServer() method of http creates a new HTTP server and returns it.  The server is set to listen on the specified port and host name. When the server is ready, the callback function is called, in this case informing us that the server is running.  Whenever a new request is received, the request event is called, providing two objects: a request (an http.IncomingMessage object) and a response (an http.ServerResponse object).  Those 2 objects are essential to handle the HTTP call.  The first provides the request details. In this simple example, this is not used, but you could access the request headers and request data.  The second is used to return data to the caller.  In this case with:  res.statusCode = 200;  //JavaScript  we set the statusCode property to 200, to indicate a successful response.  We set the Content-Type header:  res.setHeader('Content-Type', 'text/plain');  JavaScript  and we close the response, adding the content as an argument to end():  res.end('Hello World\\n');  JavaScript",
    rating: "7.5",
    level: "Beginner",
  },
  lessons: [
    {
      id: 0,
      course_id: "2",
      topic: "001 Introduction",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/awI7KrBAjss?si=tiSmSCg5dQktkqNG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "001 Introduction",
    },
    {
      id: 1,
      course_id: "2",
      topic: "002 What is V8 Engine",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/AsZ8A5Q4D4U?si=M01wgpNpaBsEI64r" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "002 What is V8 Engine",
    },
    {
      id: 2,
      course_id: "2",
      topic: "002 What is V8 Engine",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/AsZ8A5Q4D4U?si=U47vnGlzrU-brVvm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "002 What is V8 Engine",
    },
    {
      id: 3,
      course_id: "2",
      topic: "003 Initial Requirement",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/Wj63sWR_oJY?si=xKPvwjXn1y1nMRCE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "003 Initial Requirement",
    },
    {
      id: 4,
      course_id: "2",
      topic: "004 First App ",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/C2W4_KQIGc0?si=FYPFWtSIKbOJ1asB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "004 First App ",
    },
    {
      id: 5,
      course_id: "2",
      topic: "005 Global Methods",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/E3VXZ-dfVv0?si=XI2q4nb6uFiSmkSx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "005 Global Methods",
    },
    {
      id: 6,
      course_id: "2",
      topic: "006 Function And Function Expression",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/hGva75fI3M8?si=Ceur01IGf9rFFAaI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "006 Function And Function Expression",
    },
    {
      id: 7,
      course_id: "2",
      topic: "007 Module Export And Import",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/kPLpPBW4JtU?si=lGQPnf3rBKCVLNDm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "007 Module Export And Import",
    },
    {
      id: 8,
      course_id: "2",
      topic: "008 Multiple Module Export",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/b4T1IZZfq4E?si=uayW1eUWoZGX5n1V" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "008 Multiple Module Export",
    },
    {
      id: 9,
      course_id: "2",
      topic: "009 Multiple File Export",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/Z9Yfsd6qZjk?si=StIqvUQYG1oZr1sQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "009 Multiple File Export",
    },
    {
      id: 10,
      course_id: "2",
      topic: "010 EventEmitter",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/YJWnCbQrpNc?si=_dDfSWA3JukItvG5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "010 EventEmitter",
    },
    {
      id: 11,
      course_id: "2",
      topic: "011 EventEmitter With Parameter",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/-LAT38GW1u0?si=E4RIeFng89iLGO6T" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "011 EventEmitter With Parameter",
    },
    {
      id: 12,
      course_id: "2",
      topic: "012 For Each And For Of",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/nPMgfRy7DpQ?si=Up_2tAxSo_cW2VKk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "012 For Each And For Of",
    },
    {
      id: 13,
      course_id: "2",
      topic: "013 Foreach Loop",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/rkUo_GAGHD8?si=LX4Dm1akOamjEW75" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "013 Foreach Loop",
    },
    {
      id: 14,
      course_id: "2",
      topic: "014 File Handling With Synchronously",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/wP68FglLCUg?si=Ub1OoNPhfaMVuH3K" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "014 File Handling With Synchronously",
    },
    {
      id: 15,
      course_id: "2",
      topic: "015 File Handling Asynchronously",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/vI8T_9nCFBk?si=uiEfC6qznOa6PbHk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "015 File Handling Asynchronously",
    },
    {
      id: 16,
      course_id: "2",
      topic: "016 Deleting File And Create Directory",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/80hmNaO0E4M?si=i25ORDcCuSNkS_bu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "016 Deleting File And Create Directory",
    },
    {
      id: 17,
      course_id: "2",
      topic: "017 Buffer And Stream Explaination",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/dKr6pF1I7Lc?si=pito8saRAD2XFYPP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "017 Buffer And Stream Explaination",
    },
    {
      id: 18,
      course_id: "2",
      topic: "018 Piping",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/hgvUVRrQJwg?si=Y_vx4c-K1X9s8ICd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "018 Piping",
    },
    {
      id: 19,
      course_id: "2",
      topic: "019 ReadableString",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/vjUGWm3ow4I?si=reqYj-sjcuk2mqKu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "019 ReadableString",
    },
    {
      id: 20,
      course_id: "2",
      topic: "020 Writeable Stream",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/IxBh1VQTbzg?si=l4ri9iyXkOdDMbK8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "020 Writeable Stream",
    },
    {
      id: 21,
      course_id: "2",
      topic: "021 Client And Server Technology",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/Fuwd80Tlltg?si=h5KO297aR1o9J46H" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "021 Client And Server Technology",
    },
    {
      id: 22,
      course_id: "2",
      topic: "022 Creating Server",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/R1qP-P0o-FI?si=60K6iLZo3Ih-Bga4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "022 Creating Server",
    },
    {
      id: 23,
      course_id: "2",
      topic: "023 Server ReadableStr Piping",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/dthh56bhnxU?si=qx1ceRnxvXEBtyqt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "023 Server ReadableStr Piping",
    },
    {
      id: 24,
      course_id: "2",
      topic: "024 Serving HTML File",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/sV7a4TzbpfE?si=HlIOa6kYWDsUhO9U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "024 Serving HTML File",
    },
    {
      id: 25,
      course_id: "2",
      topic: "025 Serving JSON Data",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/icaEnN-Cyqo?si=ueMdgiI5137P3szw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "025 Serving JSON Data",
    },
    {
      id: 26,
      course_id: "2",
      topic: "026 Basic Routing",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/IuXHI3vlrug?si=xlOwVs2RKTyj38d5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "026 Basic Routing",
    },
    {
      id: 27,
      course_id: "2",
      topic: "027 PackageJSON Creating",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/26OfOBqlWJk?si=_YfRe5lmG6jeaGxq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "027 PackageJSON Creating",
    },
    {
      id: 28,
      course_id: "2",
      topic: "028 Installation Express",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/MqjInNerLtw?si=VCACAJ8rEImMeGDn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "028 Installation Express",
    },
    {
      id: 29,
      course_id: "2",
      topic: "029 Nodemon Installation And Usage",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/QOisMkZCgrw?si=8H636lfCuXxLCs0u" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "029 Nodemon Installation And Usage",
    },
    {
      id: 30,
      course_id: "2",
      topic: "  030 Using Express ",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/OpkIFXJ0LYw?si=iaZakzmxjGHrn6Ya" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: " 030 Using Express ",
    },
    {
      id: 31,
      course_id: "2",
      topic: "31 REPL",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/ryJUcB_N_mE?si=EX6HUpcI4HwB4svi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "31 REPL",
    },
    {
      id: 32,
      course_id: "2",
      topic: "32 Starting Server",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/fJ0WB66g2fI?si=7RshlCcjrtfDz1j7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "32 Starting Server",
    },
    {
      id: 33,
      course_id: "2",
      topic: "33 Get Or Post",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/ND1EAqPhwDo?si=yol_KJSB-v1lMDgA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "33 Get Or Post",
    },
    {
      id: 34,
      course_id: "2",
      topic: "34 Request Path",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/TDhVyeBpjU0?si=U5YYUHdPAHAqR8__" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "34 Request Path",
    },
    {
      id: 35,
      course_id: "2",
      topic: "35 Custom Router",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/Ud4IURQQjmw?si=OJ2LnXdWPyhAnXBa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "35 Custom Router",
    },
    {
      id: 36,
      course_id: "2",
      topic: "36 Undefined Route Handling",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/gu8lDNRYV7o?si=fu3H33gvTZ4Zq67k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "36 Undefined Route Handling",
    },
    {
      id: 37,
      course_id: "2",
      topic: "37 Dot Env Usage",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/MZ8GRIlhLaI?si=SjQbN5VOEwdm-6Rf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "37 Dot Env Usage",
    },
    {
      id: 38,
      course_id: "2",
      topic: "38 GitHub Project",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/T9dGwFZTGNg?si=tRtTQqOVdG1I_waf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "38 GitHub Project",
    },
    {
      id: 39,
      course_id: "2",
      topic: "39 Getting Post URLEncoded Values",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/7TSsmneFoXY?si=BXr7QyiWgCl42cXP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "39 Getting Post URLEncoded Values",
    },
    {
      id: 40,
      course_id: "2",
      topic: "39 Getting Post URLEncoded Values",
      videoURL:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/wLw_t1PUnSM?si=gkiYHXnA_NFcqzE7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      description: "39 Getting Post URLEncoded Values",
    },
  ],
});
// end

export default courses;
