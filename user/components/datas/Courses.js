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

export default courses;
