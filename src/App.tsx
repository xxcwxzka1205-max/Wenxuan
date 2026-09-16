import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, ExternalLink, ArrowRight, ChevronUp, ChevronDown } from 'lucide-react';

const poeticText = `hey there.
i'm Mera, a designer and product thinker from hong kong.
with a fashion design background, i now explore self-expression and product innovation through digital tech,
creating warm visuals and experiences at the intersection of art and technology.

我是Mera，一位来自香港的设计师与产品思考者。
曾深耕服装设计领域，如今专注用数字技术探索自我表达与产品创新，
在艺术与科技的交汇中，创造有温度的视觉与体验。

← 点击左侧可查看我的完整简历并与我取得联系
点击右侧的数字按钮可查看我的每个项目作品 →

← Click on the left side to view my complete resume and get in touch with me.
Click on the number buttons on the right to view each of my project works →`;

const redMarks: Record<number, boolean> = { 11: true, 35: true, 50: true, 69: true, 85: true };
const totalTicks = 92;

const PORTFOLIO_DATA: any[] = [
  {
    id: 1,
    title: "Art Seed",
    category: "Undergraduate work",
    date: "2026.2",
    type: "detailed",
    subtitle: "ART SEED 艺术集合资讯网站（人工智能体制作）",
    overview: {
      core: "基于人工智能体技术，搭建聚焦艺术资讯、作品展示、行业动态的综合性艺术集合资讯网站",
      background: "结合艺术行业资讯分散的痛点，利用人工智能体实现资讯精准推送、作品智能分类，提升用户浏览体验",
      aiHighlights: "智能内容抓取、用户画像分析、作品标签自动生成、智能搜索匹配",
      duration: "14天"
    },
    research: {
      background: "艺术资讯网站行业现状、目标用户需求（艺术从业者、艺术爱好者）、同类网站优缺点分析",
      slides: [
        { image: "https://s3.bmp.ovh/2026/03/12/yMwptXje.png", caption: "" },
        { image: "https://s3.bmp.ovh/2026/03/12/FKvNRNbw.png", caption: "选题依据总结" },
        { image: "https://s3.bmp.ovh/2026/03/12/fYO9T1zf.png", caption: "同类型艺术社群分析" },
        { image: "https://s3.bmp.ovh/2026/03/12/gMEVKguH.png", caption: "用户画像分析" },
        { image: "https://s3.bmp.ovh/2026/03/12/hjfGpJjk.png", caption: "技术条件分析" }
      ]
    },
    promotional: {
      posters: {
        theme: "贴合ART SEED艺术调性，突出“人工智能+艺术资讯”核心",
        images: [
          "https://s3.bmp.ovh/2026/03/12/RRWPImSD.jpg",
          "https://s3.bmp.ovh/2026/03/12/kKUIwzkG.png",
          "https://s3.bmp.ovh/2026/03/12/WGr4kXiV.png"
        ],
        description: "设计思路：采用极简排版与AI生成的抽象图形结合。AI元素：海报背景纹理均由AI生成。"
      },
      video: {
        url: "https://files.catbox.moe/lnkzh9.mp4",
        description: "30秒，节奏贴合艺术氛围，突出网站核心功能与人工智能优势"
      }
    },
    pages: [
      {
        name: "首页",
        image: "https://s3.bmp.ovh/2026/03/12/8n3dtGRT.png",
        features: "人工智能体推荐资讯区、热门艺术作品轮播、分类导航（资讯、作品、艺术家）",
        aiDetails: "首页推荐区完全由AI根据全局热度与用户初始偏好动态生成。"
      },
      {
        name: "艺文路线页",
        image: "https://s3.bmp.ovh/2026/03/12/VyQAJfUn.png",
        features: "城市标签、路线生成、智能分类标签（绘画、雕塑、装置等）、资讯列表、智能搜索框、个性化推荐区",
        aiDetails: "AI会规划出合理的艺术坐标路线，以及推荐出适合打卡的咖啡店、文创店等。"
      },
      {
        name: "市集资讯页",
        image: "https://s3.bmp.ovh/2026/03/12/xiZlez2o.png",
        features: "人工智能体自动分类市集信息、信息详情弹窗、相关信息推荐",
        aiDetails: "设置地点、时间、类型筛选项，AI呈现真实的艺术市集展览资讯"
      },
      {
        name: "艺术社区页",
        image: "https://s3.bmp.ovh/2026/03/13/stViNmal.png",
        features: "发表评论、参与论坛、查看实时艺术资讯",
        aiDetails: "AI持续分析用户的浏览和收藏行为，不断优化和更新用户画像，提升推送精准度。"
      }
    ],
    image: "https://picsum.photos/seed/artseed/800/600?grayscale",
    link: "https://art-seed-urban-youth-art-community-10325334486.us-west1.run.app/"
  },
  {
    id: 2,
    title: "牡丹亭",
    category: "Master work",
    date: "2025.10",
    type: "detailed_mudanting",
    subtitle: "牡丹亭   设计马拉松时尚工坊金奖：基于戏曲文化融合的时尚设计",
    description: "设计马拉松比赛合作小组项目，项目版权归小组成员所有人所有",
    process: {
      slides: [
        { image: "https://s3.bmp.ovh/2026/03/13/OppZfrna.png", caption: "前期概念草图与灵感收集" },
        { image: "https://s3.bmp.ovh/2026/03/13/a2qBQxEg.png", caption: "戏曲元素提取与纹样设计" },
        { image: "https://s3.bmp.ovh/2026/03/13/RJGUtbuU.png", caption: "面料测试与打版过程" },
        { image: "https://s3.bmp.ovh/2026/03/13/i1GIlVBo.png", caption: "成衣制作与细节调整" },
        { image: "https://s3.bmp.ovh/2026/03/13/mmQNlwAY.png", caption: "作品展示" },
        { image: "https://s3.bmp.ovh/2026/03/13/UBOdz2hU.png", caption: "细节展示" },
        { image: "https://files.catbox.moe/kpijpf.png", caption: "最终效果呈现" }
      ]
    },
    boards: {
      images: [
        "https://files.catbox.moe/41ek84.jpg",
        "https://files.catbox.moe/usmfq8.jpg"
      ],
      video: {
        url: "https://files.catbox.moe/lnxtc3.mp4",
        description: "1-3分钟，项目宣传与展示"
      }
    },
    products: [
      "https://files.catbox.moe/f08w9x.jpg",
      "https://files.catbox.moe/ga28hj.jpg",
      "https://files.catbox.moe/h5z6o8.jpg",
      "https://files.catbox.moe/fkiyae.jpg",
      "https://files.catbox.moe/5qoyed.jpg",
      "https://files.catbox.moe/6grebp.jpg"
    ],
    image: "https://picsum.photos/seed/mudanting/800/600?grayscale",
    link: "#"
  },
  {
    id: 3,
    title: "贡㿟",
    category: "Work Experience",
    date: "2022.8-2024.1",
    type: "detailed_gongbai",
    subtitle: "贡㿟   复古小众风格男装品牌",
    description: "初创男装复古小众风格品牌，负责了秋冬系列新品设计全流程工作，包含前期市场调研，面料采购、设计样衣落地，产品量产等，并协助同组设计师完成设计落地，同时参与整季新品拍摄计划",
    sketches: [
      "https://files.catbox.moe/ckjvp0.jpg",
      "https://files.catbox.moe/kg3h7u.jpg",
      "https://files.catbox.moe/385pq7.jpg",
      "https://files.catbox.moe/0zb84x.jpg",
      "https://files.catbox.moe/gaopm6.jpg",
      "https://files.catbox.moe/zpv5wh.jpg",
      "https://files.catbox.moe/il5axq.jpg"
    ],
    products: [
      "https://files.catbox.moe/tkb8bz.jpg",
      "https://files.catbox.moe/fyilnn.jpg",
      "https://files.catbox.moe/n23kyn.jpg",
      "https://files.catbox.moe/f4whnz.jpg",
      "https://files.catbox.moe/vhsgbm.jpg",
      "https://files.catbox.moe/9kr5lc.jpg",
      "https://files.catbox.moe/1hgm8u.jpg",
      "https://files.catbox.moe/oxg84s.jpg",
      "https://files.catbox.moe/4wyizz.jpg",
      "https://files.catbox.moe/gjo1ey.jpg",
      "https://files.catbox.moe/jxr35x.jpg",
      "https://files.catbox.moe/qoxt2n.jpg",
      "https://files.catbox.moe/05705e.jpg",
      "https://files.catbox.moe/tjyn8e.jpg",
      "https://files.catbox.moe/2hz5bf.jpg",
      "https://files.catbox.moe/q66ona.jpg",
      "https://files.catbox.moe/mhxqqu.jpg",
      "https://files.catbox.moe/6w6upx.jpg",
      "https://files.catbox.moe/cwu7zf.jpg",
      "https://files.catbox.moe/08i3pw.jpg",
      "https://files.catbox.moe/z790rs.jpg",
      "https://files.catbox.moe/qhfj18.jpg",
      "https://files.catbox.moe/i7zlo6.jpg",
      "https://files.catbox.moe/67em6s.jpg",
      "https://files.catbox.moe/4ck17k.jpg",
      "https://files.catbox.moe/feu0ia.jpg",
      "https://files.catbox.moe/z790rs.jpg",
      "https://files.catbox.moe/z790rs.jpg",
      "https://files.catbox.moe/qhfj18.jpg",
      "https://files.catbox.moe/lpkh68.jpg",
      "https://files.catbox.moe/g76bex.jpg",
      "https://files.catbox.moe/rwx1f5.jpg",
      "https://files.catbox.moe/la6ee9.jpg",
      "https://files.catbox.moe/7n1kir.jpg",
      "https://files.catbox.moe/m1c2x0.jpg",
      "https://files.catbox.moe/0xvaii.jpg",
      "https://files.catbox.moe/oef1tf.jpg",
      "https://files.catbox.moe/2pxmqx.jpg",
      "https://files.catbox.moe/7qoy0a.jpg",
      "https://files.catbox.moe/eukiju.jpg"
    ],
    workRecords: [
      "https://files.catbox.moe/mu5pck.png",
      "https://files.catbox.moe/e7s7x9.png",
      "https://files.catbox.moe/047es6.png"
    ],
    image: "https://picsum.photos/seed/gongbai/800/600?grayscale",
    link: "#"
  },
  {
    id: 4,
    title: "individual proposal & research",
    category: "visual works",
    date: "2024.7-10",
    type: "detailed_proposal",
    subtitle: "individual proposal & research",
    description: "Individual proposal：The rise of virtual fashion has had an impact on the traditional fashion industry and its future development in the fashion industry\nResearch：Research on artisanal Style Brands at Home and Abroad",
    proposal: {
      slides: [
        "https://files.catbox.moe/eu89cp.jpg",
        "https://s3.bmp.ovh/2026/03/17/J8SccWWr.jpg",
        "https://files.catbox.moe/9fkhta.jpg",
        "https://files.catbox.moe/6geg6d.jpg",
        "https://files.catbox.moe/41wd5d.jpg",
        "https://files.catbox.moe/xxpb2g.jpg",
        "https://files.catbox.moe/rw47fx.jpg",
        "https://files.catbox.moe/lwdn27.jpg",
        "https://files.catbox.moe/e5tmy2.jpg",
        "https://files.catbox.moe/4j7gvt.jpg",
        "https://files.catbox.moe/kpdiub.jpg",
        "https://files.catbox.moe/tpg0av.jpg",
        "https://files.catbox.moe/hyyq0l.jpg",
        "https://files.catbox.moe/2j6tkc.jpg",
        "https://files.catbox.moe/9gxd0l.jpg",
        "https://files.catbox.moe/9qbv5g.jpg",
        "https://files.catbox.moe/tu6uxa.jpg",
        "https://files.catbox.moe/qpgzwj.jpg",
        "https://files.catbox.moe/u0f45q.jpg",
        "https://files.catbox.moe/l8f9b5.jpg",
        "https://files.catbox.moe/qwrmtf.jpg",
        "https://files.catbox.moe/ksm6qf.jpg",
        "https://files.catbox.moe/xbf8dh.jpg",
        "https://files.catbox.moe/9ay4gb.jpg",
        "https://s3.bmp.ovh/2026/03/17/hN0YWZXT.jpg",
        "https://files.catbox.moe/nhj0l4.jpg",
        "https://files.catbox.moe/xmjcnx.jpg",
        "https://files.catbox.moe/xvvmab.jpg",
        "https://files.catbox.moe/yhmjwj.jpg",
        "https://files.catbox.moe/tu7ll2.jpg",
        "https://files.catbox.moe/5ih6dp.jpg",
        "https://files.catbox.moe/2h4ev6.jpg",
        "https://files.catbox.moe/zh34mt.jpg",
        "https://files.catbox.moe/su6e67.jpg",
        "https://files.catbox.moe/980gxp.jpg",
        "https://files.catbox.moe/jogjqn.jpg",
        "https://files.catbox.moe/ardmub.jpg",
        "https://files.catbox.moe/m3ls46.jpg"
      ]
    },
    research: {
      slides: [
        "https://files.catbox.moe/gemiri.jpg",
        "https://files.catbox.moe/gbc7pg.jpg",
        "https://files.catbox.moe/vx772l.jpg",
        "https://files.catbox.moe/fyl2g1.jpg",
        "https://files.catbox.moe/tnhh8x.jpg",
        "https://files.catbox.moe/ng17f0.jpg",
        "https://files.catbox.moe/tq4he0.jpg",
        "https://files.catbox.moe/15push.jpg",
        "https://files.catbox.moe/j7kqof.jpg",
        "https://files.catbox.moe/mmqyvy.jpg",
        "https://files.catbox.moe/ink1sz.jpg",
        "https://files.catbox.moe/jfxgcs.jpg",
        "https://files.catbox.moe/d555fq.jpg",
        "https://files.catbox.moe/0a6ooi.jpg",
        "https://files.catbox.moe/4431j9.jpg",
        "https://files.catbox.moe/5e55hj.jpg",
        "https://files.catbox.moe/18y42f.jpg",
        "https://files.catbox.moe/z4nkyt.jpg",
        "https://s3.bmp.ovh/2026/03/17/hYVXJqQN.jpg",
        "https://files.catbox.moe/t6rpk9.jpg"
      ]
    },
    image: "https://picsum.photos/seed/proposal/800/600?grayscale",
    link: "#"
  },
  {
    id: 5,
    title: "other work",
    category: "other works",
    date: "2020-2024",
    type: "detailed_other",
    subtitle: "other work",
    description: "包含了个人服装作品，平面类排版作品，个人手作创作",
    fashionDesign1: [
      "https://files.catbox.moe/a0d6w4.jpg",
      "https://files.catbox.moe/wi55ul.jpg",
      "https://files.catbox.moe/io2tb8.jpg",
      "https://files.catbox.moe/j688gw.jpg",
      "https://files.catbox.moe/ffgso1.jpg",
      "https://files.catbox.moe/0qmjdj.jpg"
    ],
    fashionDesign2: [
      "https://files.catbox.moe/5fzhwm.jpg",
      "https://files.catbox.moe/mngtj7.jpg",
      "https://files.catbox.moe/ofw6cw.jpg",
      "https://files.catbox.moe/i9eake.jpg",
      "https://files.catbox.moe/gr87uw.jpg"
    ],
    personalWorks1: [
      "https://files.catbox.moe/st3p8r.jpg",
      "https://files.catbox.moe/ose45w.jpg"
    ],
    personalWorks2: [
      "https://files.catbox.moe/32xwz1.png",
      "https://files.catbox.moe/rcd6qo.png",
      "https://files.catbox.moe/1hu5xl.png"
    ],
    image: "https://picsum.photos/seed/other/800/600?grayscale",
    link: "#"
  }
];

const MUSIC_PLAYLIST = [
  'https://files.catbox.moe/9tjbbz.mp3',
  'https://files.catbox.moe/ypxbob.mp3',
  'https://files.catbox.moe/28zyy8.mp3'
];

const SketchesCarousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full bg-transparent group">
      {/* Preload all images to eliminate loading time */}
      <div className="hidden">
        {images.map((img, idx) => (
          <img key={`preload-${idx}`} src={img} referrerPolicy="no-referrer" loading="eager" />
        ))}
      </div>
      <div className="overflow-hidden w-full flex justify-center items-center">
        <img 
          src={images[currentIndex]} 
          alt={`Sketch ${currentIndex + 1}`} 
          className="w-full h-auto object-contain max-h-[80vh] transition-opacity duration-500 mix-blend-multiply" 
          referrerPolicy="no-referrer" 
          loading="eager"
          fetchPriority="high"
        />
      </div>
      
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/20 hover:bg-black/50 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/20 hover:bg-black/50 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <div 
            key={idx} 
            className={`w-2 h-2 rounded-full transition-colors ${idx === currentIndex ? 'bg-warm-accent' : 'bg-warm-border'}`}
          />
        ))}
      </div>
    </div>
  );
};

const MudantingCarousel = ({ slides }: { slides: { image: string, caption: string }[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full group flex flex-col items-center">
      {/* Preload all images to eliminate loading time */}
      <div className="hidden">
        {slides.map((slide, idx) => (
          <img key={`preload-${idx}`} src={slide.image} referrerPolicy="no-referrer" loading="eager" />
        ))}
      </div>
      <div className="relative w-full flex justify-center items-center">
        <img 
          src={slides[currentIndex].image} 
          alt={slides[currentIndex].caption} 
          className="w-full h-auto object-contain max-h-[80vh]" 
          referrerPolicy="no-referrer" 
          loading="eager"
          fetchPriority="high"
        />
        
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/20 hover:bg-black/50 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/20 hover:bg-black/50 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="flex gap-2 mt-6">
        {slides.map((_, idx) => (
          <div 
            key={idx} 
            className={`w-2 h-2 rounded-full transition-colors ${idx === currentIndex ? 'bg-warm-accent' : 'bg-warm-border'}`}
          />
        ))}
      </div>
    </div>
  );
};

const MultiPageCarousel = ({ images, itemsToShow, labelPrefix }: { images: string[], itemsToShow: number, labelPrefix: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const maxIndex = Math.max(0, Math.ceil(images.length - itemsToShow));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length, maxIndex]);

  const nextSlide = () => setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));

  return (
    <div className="relative w-full group">
      {/* Preload all images to eliminate loading time */}
      <div className="hidden">
        {images.map((img, idx) => (
          <img key={`preload-${idx}`} src={img} referrerPolicy="no-referrer" loading="eager" />
        ))}
      </div>
      
      <div className="overflow-hidden w-full">
        <div 
          className="flex transition-transform duration-500 ease-in-out items-start"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
        >
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className="flex-none px-2 flex flex-col items-center justify-start"
              style={{ width: `${100 / itemsToShow}%` }}
            >
              <img 
                src={img} 
                alt={`${labelPrefix} ${idx + 1}`} 
                className="w-full h-auto object-contain shadow-sm" 
                referrerPolicy="no-referrer"
                loading="eager"
                fetchPriority={idx < Math.ceil(itemsToShow) ? "high" : "auto"}
              />
              <p className="label-text text-center text-warm-fg/60 mt-4">{labelPrefix} {idx + 1} / {images.length}</p>
            </div>
          ))}
        </div>
      </div>
      
      <button 
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/20 hover:bg-black/50 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/20 hover:bg-black/50 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

const LookbookCarousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const itemsToShow = 3.5;
  const maxIndex = Math.ceil(images.length - itemsToShow);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length, maxIndex]);

  const nextSlide = () => setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));

  return (
    <div className="relative w-full group">
      <div className="overflow-hidden w-full">
        <div 
          className="flex transition-transform duration-500 ease-in-out items-center"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
        >
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className="flex-none px-2 flex justify-center"
              style={{ width: `${100 / itemsToShow}%` }}
            >
              <img 
                src={img} 
                alt={`Lookbook ${idx + 1}`} 
                className="max-h-[45vh] w-auto object-contain mix-blend-multiply scale-90" 
                referrerPolicy="no-referrer"
                loading="eager"
                fetchPriority={idx < 4 ? "high" : "auto"}
              />
            </div>
          ))}
        </div>
      </div>
      
      <button 
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/20 hover:bg-black/50 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/20 hover:bg-black/50 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

const MobileScaleWrapper = ({ children }: { children: React.ReactNode }) => {
  const [transformStyle, setTransformStyle] = useState({});

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      const contentWidth = 980;
      const contentHeight = 520; // Approximate height of the device frame

      if (height > width) {
        // Portrait orientation (Mobile or Tablet)
        // Rotate 90deg and scale to fit perfectly
        const scaleX = height / contentWidth;
        const scaleY = width / contentHeight;
        const scale = Math.min(scaleX, scaleY) * 0.98;
        
        setTransformStyle({
          transform: `rotate(90deg) scale(${scale})`,
          transformOrigin: 'center'
        });
      } else {
        // Landscape orientation (Mobile, Tablet, Desktop)
        const scaleX = width / contentWidth;
        const scaleY = height / contentHeight;
        let scale = Math.min(scaleX, scaleY) * 0.98;
        
        // Cap at 1 for large desktop screens to prevent it from becoming comically large
        if (width > 1366 && scale > 1) {
          scale = 1;
        }
        
        setTransformStyle({
          transform: `scale(${scale})`,
          transformOrigin: 'center'
        });
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-hidden bg-[#a0a0a0]">
      <div style={transformStyle} className="transition-transform duration-300">
        {children}
      </div>
    </div>
  );
};

export default function App() {
  const [now, setNow] = useState(new Date());
  const [isTyping, setIsTyping] = useState(true);
  const [displayedText, setDisplayedText] = useState('');
  const [isPowerOn, setIsPowerOn] = useState(true);
  const [isSoundOn, setIsSoundOn] = useState(false);
  const [isLightOn, setIsLightOn] = useState(false);
  const [isMusicOn, setIsMusicOn] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [shareText, setShareText] = useState('share');
  const [mainScreenView, setMainScreenView] = useState<'home' | 'skill' | 'about' | 'resume' | 'contact'>('home');
  const charIndex = useRef(0);

  const clickAudioRef = useRef<HTMLAudioElement | null>(null);
  const typingAudioRef = useRef<HTMLAudioElement | null>(null);
  const musicAudioRef = useRef<HTMLAudioElement | null>(null);
  
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const dataArrayRef = useRef<Uint8Array | null>(null);
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null);

  const [selectedWork, setSelectedWork] = useState<any>(null);
  const mudantingScrollRef = useRef<HTMLDivElement>(null);
  const proposalScrollRef = useRef<HTMLDivElement>(null);

  // Clock
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Audio setup
  useEffect(() => {
    clickAudioRef.current = new Audio('https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3');
    typingAudioRef.current = new Audio('https://files.catbox.moe/hjf0s8.mp3');
    if (typingAudioRef.current) {
      typingAudioRef.current.loop = true;
    }
    musicAudioRef.current = new Audio();
    musicAudioRef.current.crossOrigin = 'anonymous';
    musicAudioRef.current.src = MUSIC_PLAYLIST[0];
  }, []);

  // Music logic
  useEffect(() => {
    const audio = musicAudioRef.current;
    if (!audio) return;

    const handleEnded = () => {
      setCurrentTrackIndex((prev) => (prev + 1) % MUSIC_PLAYLIST.length);
    };

    audio.addEventListener('ended', handleEnded);
    return () => audio.removeEventListener('ended', handleEnded);
  }, []);

  useEffect(() => {
    const audio = musicAudioRef.current;
    if (!audio) return;

    if (isMusicOn) {
      if (!audioContextRef.current) {
        const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
        audioContextRef.current = new AudioContext();
        analyserRef.current = audioContextRef.current.createAnalyser();
        analyserRef.current.fftSize = 256;
        
        sourceRef.current = audioContextRef.current.createMediaElementSource(audio);
        sourceRef.current.connect(analyserRef.current);
        analyserRef.current.connect(audioContextRef.current.destination);
        
        const bufferLength = analyserRef.current.frequencyBinCount;
        dataArrayRef.current = new Uint8Array(bufferLength);
      }

      if (audioContextRef.current.state === 'suspended') {
        audioContextRef.current.resume();
      }

      if (!audio.src.includes(MUSIC_PLAYLIST[currentTrackIndex])) {
        audio.src = MUSIC_PLAYLIST[currentTrackIndex];
      }
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }, [isMusicOn, currentTrackIndex]);

  // Visualizer loop
  useEffect(() => {
    let animationFrameId: number;

    const renderFrame = () => {
      if (isMusicOn && analyserRef.current && dataArrayRef.current) {
        analyserRef.current.getByteFrequencyData(dataArrayRef.current);
        
        for (let i = 0; i < totalTicks; i++) {
          const tickElement = document.getElementById(`tick-${i}`);
          if (tickElement) {
            const isRed = redMarks[i + 1];
            const baseHeight = isRed ? 48 : 32;
            const value = dataArrayRef.current[i];
            const extraHeight = (value / 255) * 40;
            tickElement.style.height = `${baseHeight + extraHeight}px`;
          }
        }

        // Speaker dots animation
        for (let i = 0; i < 76; i++) {
          const dotElement = document.getElementById(`speaker-dot-${i}`);
          if (dotElement) {
            const value = dataArrayRef.current[i % dataArrayRef.current.length];
            if (value > 50) {
              const scale = 1 + (value / 255) * 0.8;
              const hue = (i * 10 + value) % 360;
              dotElement.style.transform = `scale(${scale})`;
              dotElement.style.background = `hsl(${hue}, 80%, 60%)`;
              dotElement.style.boxShadow = 'none';
            } else {
              dotElement.style.transform = '';
              dotElement.style.background = '';
              dotElement.style.boxShadow = '';
            }
          }
        }
      } else {
        for (let i = 0; i < totalTicks; i++) {
          const tickElement = document.getElementById(`tick-${i}`);
          if (tickElement) {
            const isRed = redMarks[i + 1];
            const baseHeight = isRed ? 48 : 32;
            tickElement.style.height = `${baseHeight}px`;
          }
        }

        // Reset speaker dots
        for (let i = 0; i < 76; i++) {
          const dotElement = document.getElementById(`speaker-dot-${i}`);
          if (dotElement) {
            dotElement.style.transform = '';
            dotElement.style.background = '';
            dotElement.style.boxShadow = '';
          }
        }
      }
      animationFrameId = requestAnimationFrame(renderFrame);
    };

    renderFrame();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMusicOn]);

  // Global click sound
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button') && isSoundOn) {
        if (clickAudioRef.current) {
          clickAudioRef.current.currentTime = 0;
          clickAudioRef.current.play().catch(() => {});
        }
      }
    };
    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, [isSoundOn]);

  // Typing sound logic
  useEffect(() => {
    if (!isSoundOn) {
      typingAudioRef.current?.pause();
      return;
    }
    
    const isCurrentlyTyping = isPowerOn && mainScreenView === 'home' && isTyping && displayedText.length < poeticText.length;

    if (isCurrentlyTyping) {
      typingAudioRef.current?.play().catch(() => {});
    } else {
      typingAudioRef.current?.pause();
    }
  }, [isSoundOn, isTyping, isPowerOn, mainScreenView, displayedText.length]);

  // Typewriter
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const typeWriter = () => {
      if (!isTyping) return;
      if (charIndex.current < poeticText.length) {
        setDisplayedText(poeticText.substring(0, charIndex.current + 1));
        charIndex.current++;
        let speed = Math.random() * 30 + 20;
        if (poeticText.charAt(charIndex.current - 1) === '\n') speed = 150;
        timeout = setTimeout(typeWriter, speed);
      }
    };
    if (isTyping) {
      timeout = setTimeout(typeWriter, 500);
    }
    return () => clearTimeout(timeout);
  }, [isTyping]);

  const toggleAutoplay = () => {
    const nextState = !isTyping;
    setIsTyping(nextState);
    if (nextState && charIndex.current >= poeticText.length) {
      setDisplayedText('');
      charIndex.current = 0;
    }
  };

  const togglePower = () => {
    setIsPowerOn(prev => {
      const next = !prev;
      if (next) {
        setMainScreenView('home');
        // Do not clear the text to prevent black screen
        // setDisplayedText('');
        // charIndex.current = 0;
        setIsTyping(true);
      }
      return next;
    });
  };

  const handleAction = (action: string) => {
    console.log(`Action triggered: ${action}`);
    if (action === 'Skill') {
      setMainScreenView('skill');
      setIsPowerOn(true);
    } else if (action === 'Home') {
      setMainScreenView('home');
      setIsPowerOn(true);
    } else if (action === 'About Me') {
      setMainScreenView('about');
      setIsPowerOn(true);
    } else if (action === 'Resume') {
      setMainScreenView('resume');
      setIsPowerOn(true);
    } else if (action === 'Contact') {
      setMainScreenView('contact');
      setIsPowerOn(true);
    } else if (action === 'Share') {
      navigator.clipboard.writeText(window.location.href).then(() => {
        setShareText('copied!');
        setTimeout(() => setShareText('share'), 2000);
      }).catch(() => {
        console.error('Failed to copy');
      });
    } else if (action === 'Sound') {
      setIsSoundOn(!isSoundOn);
    } else if (action === 'Light') {
      setIsLightOn(!isLightOn);
    } else if (action === 'Music') {
      setIsMusicOn(!isMusicOn);
    }
  };

  const handleNum = (num: number) => {
    console.log(`Number button ${num} activated.`);
    if (num === 1) setSelectedWork(PORTFOLIO_DATA.find(w => w.id === 1)); // Art Seed
    if (num === 2) setSelectedWork(PORTFOLIO_DATA.find(w => w.id === 2)); // 牡丹亭
    if (num === 3) setSelectedWork(PORTFOLIO_DATA.find(w => w.id === 4)); // individual proposal
    if (num === 4) setSelectedWork(PORTFOLIO_DATA.find(w => w.id === 3)); // 贡㿟
    if (num === 5) setSelectedWork(PORTFOLIO_DATA.find(w => w.id === 5)); // other design works
  };

  const scrollMudanting = (direction: 'left' | 'right') => {
    if (mudantingScrollRef.current) {
      const scrollAmount = mudantingScrollRef.current.clientWidth;
      mudantingScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollProposal = (direction: 'left' | 'right') => {
    if (proposalScrollRef.current) {
      const scrollAmount = proposalScrollRef.current.clientWidth * 0.27;
      proposalScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const handleSpeakerPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isMusicOn) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const startX = e.clientX;
    const startY = e.clientY;
    let isSwiping = false;
    let songChanged = false;
    
    // Initial progress set
    const y = startY - rect.top;
    let progress = 1 - (y / rect.height);
    progress = Math.max(0, Math.min(1, progress));
    if (musicAudioRef.current && isFinite(musicAudioRef.current.duration)) {
      musicAudioRef.current.currentTime = progress * musicAudioRef.current.duration;
    }
    
    const handlePointerMove = (moveEvent: PointerEvent) => {
      const deltaX = moveEvent.clientX - startX;
      
      if (!isSwiping && Math.abs(deltaX) > 20) {
        isSwiping = true;
      }
      
      if (isSwiping && !songChanged) {
        if (deltaX > 30) {
          setCurrentTrackIndex((prev) => (prev + 1) % MUSIC_PLAYLIST.length);
          songChanged = true;
        } else if (deltaX < -30) {
          setCurrentTrackIndex((prev) => (prev - 1 + MUSIC_PLAYLIST.length) % MUSIC_PLAYLIST.length);
          songChanged = true;
        }
      } else if (!isSwiping) {
        // Adjust progress
        const y = moveEvent.clientY - rect.top;
        let progress = 1 - (y / rect.height);
        progress = Math.max(0, Math.min(1, progress));
        if (musicAudioRef.current && isFinite(musicAudioRef.current.duration)) {
          musicAudioRef.current.currentTime = progress * musicAudioRef.current.duration;
        }
      }
    };
    
    const handlePointerUp = () => {
      document.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerup', handlePointerUp);
    };
    
    document.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('pointerup', handlePointerUp);
  };

  return (
    <>
      <MobileScaleWrapper>
        <div className={`device-frame flex flex-col gap-4 w-[980px] ${isLightOn ? 'light-mode' : ''}`}>
          {/* Top Section */}
        <div className="flex gap-4 h-[368px]">
          
          {/* Column 1: Speaker */}
          <div 
            className="w-20 recessed-panel p-3 flex justify-center items-center cursor-pointer relative"
            onPointerDown={handleSpeakerPointerDown}
            title="Slide vertically to adjust progress, swipe horizontally to change song"
          >
            <div className="grid grid-cols-4 gap-2 pointer-events-none">
              {Array.from({ length: 76 }).map((_, i) => (
                <div key={i} id={`speaker-dot-${i}`} className="speaker-dot transition-transform duration-75" />
              ))}
            </div>
          </div>

          {/* Column 2: Left Controls */}
          <div className="w-36 flex flex-col gap-3">
            {/* Meter */}
            <div className="grid-unit recessed-panel flex flex-col items-center justify-center px-3 py-2">
              <div className="flex justify-between w-full text-[10px] text-gray-500 mb-1 px-1">
                <span>-6</span><span>-2</span><span>0</span><span>2</span><span>6</span>
              </div>
              <div className="flex justify-between w-full px-1">
                {Array.from({ length: 21 }).map((_, i) => (
                  <div key={i} className={`w-[1px] bg-gray-400 ${i % 5 === 0 ? 'h-3' : 'h-1.5'}`} />
                ))}
              </div>
            </div>
            {/* Row 1 */}
            <div className="grid grid-cols-2 gap-3 grid-unit">
              <button className="btn-3d" onClick={() => handleAction('Home')}>home</button>
              <button className="btn-3d" onClick={() => handleAction('Skill')}>skill</button>
            </div>
            {/* Row 2 */}
            <div className="grid grid-cols-2 gap-3 grid-unit">
              <button className="btn-3d" onClick={() => handleAction('Share')}>{shareText}</button>
              <button className="btn-3d" onClick={() => handleAction('Contact')}>contact</button>
            </div>
            {/* Row 3 */}
            <button className="btn-3d grid-unit w-full" onClick={() => handleAction('About Me')}>
              <div className={`indicator-dot ${mainScreenView === 'about' ? 'dot-red' : 'dot-grey'}`}></div>
              about me
            </button>
            {/* Row 4 */}
            <button className="btn-3d grid-unit w-full" onClick={() => handleAction('Resume')}>
              <div className={`indicator-dot ${mainScreenView === 'resume' ? 'dot-red' : 'dot-grey'}`}></div>
              resume
            </button>
          </div>

          {/* Column 3: Main Screen */}
          <div className="flex-1 screen-bezel relative">
            <div className={`main-screen ${isPowerOn ? 'crt-effect' : ''}`}>
              {isPowerOn ? (
                mainScreenView === 'home' ? (
                  <div className="typewriter-text h-full overflow-y-auto custom-scrollbar pr-2">{displayedText}</div>
                ) : mainScreenView === 'skill' ? (
                <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar text-white/90">
                  <h2 className="text-xl font-bold mb-6 border-b border-white/20 pb-2">Skills</h2>
                  
                  <div className="mb-6">
                    <h3 className="text-xs text-gray-400 mb-3 uppercase tracking-wider">专业技能 (Professional)</h3>
                    <div className="space-y-3">
                      <div className="flex flex-col gap-1">
                        <div className="flex justify-between text-xs"><span>UI&UX设计</span><span className="text-gray-400">80%</span></div>
                        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <motion.div initial={{ width: 0 }} animate={{ width: '80%' }} transition={{ duration: 1, ease: "easeOut" }} className="h-full bg-white/80 rounded-full" />
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="flex justify-between text-xs"><span>平面设计</span><span className="text-gray-400">85%</span></div>
                        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <motion.div initial={{ width: 0 }} animate={{ width: '85%' }} transition={{ duration: 1, ease: "easeOut" }} className="h-full bg-white/80 rounded-full" />
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="flex justify-between text-xs"><span>服装设计</span><span className="text-gray-400">85%</span></div>
                        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <motion.div initial={{ width: 0 }} animate={{ width: '85%' }} transition={{ duration: 1, ease: "easeOut" }} className="h-full bg-white/80 rounded-full" />
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="flex justify-between text-xs"><span>产品思维</span><span className="text-gray-400">80%</span></div>
                        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <motion.div initial={{ width: 0 }} animate={{ width: '80%' }} transition={{ duration: 1, ease: "easeOut" }} className="h-full bg-white/80 rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xs text-gray-400 mb-3 uppercase tracking-wider">工具技能 (Tools)</h3>
                    <div className="space-y-3">
                      <div className="flex flex-col gap-1">
                        <div className="flex justify-between text-xs"><span>Figma</span><span className="text-gray-400">90%</span></div>
                        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <motion.div initial={{ width: 0 }} animate={{ width: '90%' }} transition={{ duration: 1, ease: "easeOut" }} className="h-full bg-white/80 rounded-full" />
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="flex justify-between text-xs"><span>Photoshop (PS)</span><span className="text-gray-400">80%</span></div>
                        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <motion.div initial={{ width: 0 }} animate={{ width: '80%' }} transition={{ duration: 1, ease: "easeOut" }} className="h-full bg-white/80 rounded-full" />
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="flex justify-between text-xs"><span>Adobe Illustrator (AI)</span><span className="text-gray-400">85%</span></div>
                        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <motion.div initial={{ width: 0 }} animate={{ width: '85%' }} transition={{ duration: 1, ease: "easeOut" }} className="h-full bg-white/80 rounded-full" />
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="flex justify-between text-xs"><span>AIGC工具</span><span className="text-gray-400">90%</span></div>
                        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <motion.div initial={{ width: 0 }} animate={{ width: '90%' }} transition={{ duration: 1, ease: "easeOut" }} className="h-full bg-white/80 rounded-full" />
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="flex justify-between text-xs"><span>Power BI</span><span className="text-gray-400">70%</span></div>
                        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <motion.div initial={{ width: 0 }} animate={{ width: '70%' }} transition={{ duration: 1, ease: "easeOut" }} className="h-full bg-white/80 rounded-full" />
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="flex justify-between text-xs"><span>Excel</span><span className="text-gray-400">75%</span></div>
                        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <motion.div initial={{ width: 0 }} animate={{ width: '75%' }} transition={{ duration: 1, ease: "easeOut" }} className="h-full bg-white/80 rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-2">
                    <h3 className="text-xs text-gray-400 mb-3 uppercase tracking-wider">软技能 (Soft Skills)</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-white/10 rounded-full text-xs">沟通协作</span>
                      <span className="px-3 py-1 bg-white/10 rounded-full text-xs">需求拆解</span>
                      <span className="px-3 py-1 bg-white/10 rounded-full text-xs">同理心</span>
                      <span className="px-3 py-1 bg-white/10 rounded-full text-xs">快速学习</span>
                      <span className="px-3 py-1 bg-white/10 rounded-full text-xs">高效率</span>
                      <span className="px-3 py-1 bg-white/10 rounded-full text-xs">制定计划</span>
                    </div>
                  </div>
                </div>
              ) : mainScreenView === 'about' ? (
                <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar text-white/90 text-sm">
                  <h2 className="text-xl font-bold mb-6 border-b border-white/20 pb-2">About Me</h2>
                  
                  <div className="mb-6 flex gap-4 items-start">
                    <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 border border-white/20">
                      <img src="https://s3.bmp.ovh/2026/03/12/xW667Svu.jpg" alt="Profile" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold mb-1">个人简介 (Profile)</h3>
                      <p className="text-xs text-gray-300 leading-relaxed">
                        拥有跨学科背景的复合型设计师，从服装设计跨界至艺术科技领域。拥有丰富的行业经历，致力于将美学与逻辑完美结合。核心定位为“懂产品的全链路设计师”，不仅关注视觉呈现，更注重业务目标与用户体验的平衡。
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-sm font-bold mb-2">个人理念 (Philosophy)</h3>
                    <p className="text-xs text-gray-300 leading-relaxed border-l-2 border-white/30 pl-3">
                      “设计不仅是让事物看起来更美，更是让事物运作得更好。”<br/>
                      从业初心源于对创造美好体验的热爱。相信优秀的设计应该隐于无形，在潜移默化中解决用户痛点，传递品牌温度与核心价值观。
                    </p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-sm font-bold mb-2">个人优势 (Core Strengths)</h3>
                    <ul className="text-xs text-gray-300 space-y-2 list-disc list-inside">
                      <li><span className="text-white">化繁为简：</span>擅长将复杂的业务需求转化为直观、简洁的用户界面。</li>
                      <li><span className="text-white">跨界思维：</span>结合服装设计的审美与UI交互逻辑，打造独特的视觉体验。</li>
                      <li><span className="text-white">全链路能力：</span>从需求分析、原型设计到高保真视觉及动效，熟练掌握多端适配开发。</li>
                      <li>拥有贯穿整个时尚设计全周期的端到端经验，以及艺术展览策划、执行和销售的整个流程经验。</li>
                      <li>拥有设计与商业研究的跨学科背景，同时具备深厚的艺术素养和以时尚为中心的思维。</li>
                    </ul>
                  </div>

                  <div className="mb-2">
                    <h3 className="text-sm font-bold mb-2">辅助补充 (More About Me)</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-2 py-1 bg-white/10 rounded text-[10px]">摄影爱好者</span>
                      <span className="px-2 py-1 bg-white/10 rounded text-[10px]">独立思考者</span>
                      <span className="px-2 py-1 bg-white/10 rounded text-[10px]">终身学习</span>
                      <span className="px-2 py-1 bg-white/10 rounded text-[10px]">咖啡续命</span>
                      <span className="px-2 py-1 bg-white/10 rounded text-[10px]">手工艺发烧友</span>
                    </div>
                    <p className="text-xs text-gray-400">
                      工作之余，我喜欢通过摄影记录生活中的光影之美，这不仅是我的兴趣，也是我获取设计灵感的源泉。同时，我也一直保持着对手工艺创作的热情，保持对世界的好奇心，持续探索未知的领域。
                    </p>
                  </div>
                </div>
              ) : mainScreenView === 'resume' ? (
                <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar text-white/90 text-sm">
                  <div className="flex justify-between items-center mb-6 border-b border-white/20 pb-2">
                    <h2 className="text-xl font-bold">Resume</h2>
                    <a href="#" className="flex items-center gap-1 text-xs bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                      下载 PDF
                    </a>
                  </div>

                  {/* 工作经历 */}
                  <div className="mb-8">
                    <h3 className="text-sm font-bold mb-4 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                      工作经历 (Work Experience)
                    </h3>
                    <div className="space-y-4">
                      
                      {/* 经历 1 */}
                      <div className="p-3 rounded border border-white/10 bg-white/5">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-bold text-xs">网页视觉设计</h4>
                          <span className="text-[10px] text-gray-400">2025.10 - 至今</span>
                        </div>
                        <div className="text-[10px] text-gray-400 mb-2">Arty Y Australia</div>
                        <div className="text-xs text-gray-300 space-y-1">
                          <p><span className="text-white">核心职责：</span>负责线上艺术品平台的网页视觉设计及制作，包括主页视觉设计，画作选品，分页制作等。</p>
                          <p><span className="text-white">关键成果：</span>远程顺利对接协调平台资源，流程推进高效及时，平台公司满意度高，促进线上平台的及时发布。</p>
                        </div>
                      </div>

                      {/* 经历 2 */}
                      <div className="p-3 rounded border border-white/10 bg-white/5">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-bold text-xs">服装与视觉设计</h4>
                          <span className="text-[10px] text-gray-400">2022.08 - 2024.01</span>
                        </div>
                        <div className="text-[10px] text-gray-400 mb-2">贡㿟品牌</div>
                        <div className="text-xs text-gray-300 space-y-1">
                          <p><span className="text-white">核心职责：</span>负责了秋冬系列新品设计全流程工作，包含前期市场调研，面料采购、设计样衣落地，产品量产等，并协助同组设计师完成设计落地，同时参与整季新品拍摄计划。</p>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* 实习经历 */}
                  <div className="mb-8">
                    <h3 className="text-sm font-bold mb-4 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                      实习经历 (Internship Experience)
                    </h3>
                    <div className="space-y-4">
                      <div className="p-3 rounded border border-white/10 bg-white/5">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-bold text-xs">未来社品牌策划公司</h4>
                          <span className="text-[10px] text-gray-400">2022.05 - 2022.07</span>
                        </div>
                        <div className="text-[10px] text-gray-400 mb-2">活动执行干事</div>
                        <div className="text-xs text-gray-300 space-y-1">
                          <p>负责活动策划和创意设计，结合品牌特征和用户群体特征，策划营销点，提升客户认知度，同时负责活动落地和艺术商店管理。</p>
                        </div>
                      </div>
                      <div className="p-3 rounded border border-white/10 bg-white/5">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-bold text-xs">农造治愈所</h4>
                          <span className="text-[10px] text-gray-400">2021.09 - 2022.02</span>
                        </div>
                        <div className="text-[10px] text-gray-400 mb-2">策展助理及运营专员</div>
                        <div className="text-xs text-gray-300 space-y-1">
                          <p>负责完成展陈布置和策划宣发工作，同时负责与客户沟通和发展潜在客户。负责展陈门店的日常运营维护与商品售卖。</p>
                        </div>
                      </div>
                      <div className="p-3 rounded border border-white/10 bg-white/5">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-bold text-xs">九月画廊</h4>
                          <span className="text-[10px] text-gray-400">2021.07 - 2021.09</span>
                        </div>
                        <div className="text-[10px] text-gray-400 mb-2">策展助理及运营专员</div>
                        <div className="text-xs text-gray-300 space-y-1">
                          <p>负责展览方案制定落地和管理并销售每日艺术品，从策划到销售全流程跟进，同时负责接待艺术家、协助讲师授课及相关宣发工作。</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 教育经历 */}
                  <div className="mb-8">
                    <h3 className="text-sm font-bold mb-4 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
                      教育经历 (Education)
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-2 rounded hover:bg-white/5 transition-colors">
                        <div>
                          <h4 className="font-bold text-xs">香港岭南大学</h4>
                          <div className="text-[10px] text-gray-400">艺术科技与商业（MscATB） - 硕士</div>
                        </div>
                        <span className="text-[10px] text-gray-400">2025.09 - 2026.08</span>
                      </div>
                      <div className="flex justify-between items-center p-2 rounded hover:bg-white/5 transition-colors">
                        <div>
                          <h4 className="font-bold text-xs">广东技术师范大学</h4>
                          <div className="text-[10px] text-gray-400">服装与服饰设计 - 学士</div>
                        </div>
                        <span className="text-[10px] text-gray-400">2018.09 - 2022.02</span>
                      </div>
                    </div>
                  </div>

                  {/* 附加补充 */}
                  <div className="mb-4">
                    <h3 className="text-sm font-bold mb-4 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
                      附加补充 (Awards & Activities)
                    </h3>
                    <ul className="text-xs text-gray-300 space-y-2">
                      <li className="flex gap-2"><span className="text-white/50">2025.09</span> <span>全国设计大赛-设计马拉松时尚设计工坊-金奖</span></li>
                      <li className="flex gap-2"><span className="text-white/50">2022.07</span> <span>广东技术师范大学美术学院优秀毕业设计（前10%）</span></li>
                    </ul>
                  </div>

                </div>
              ) : mainScreenView === 'contact' ? (
                <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar text-white/90 text-sm flex flex-col justify-center items-center h-full">
                  <h2 className="text-xl font-bold mb-8 border-b border-white/20 pb-2 w-full text-center">Contact Me</h2>
                  <div className="space-y-6 w-full max-w-xs">
                    <div className="bg-white/5 p-4 rounded border border-white/10">
                      <div className="text-xs text-gray-400 mb-2">直接联系方式 (Email)</div>
                      <a href="mailto:xxcwxzka1205@gmail.com" className="text-white hover:text-emerald-400 transition-colors font-mono text-sm break-all flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        xxcwxzka1205@gmail.com
                      </a>
                    </div>
                    <div className="bg-white/5 p-4 rounded border border-white/10">
                      <div className="text-xs text-gray-400 mb-2">社交账号 (Social Media)</div>
                      <div className="flex items-center gap-2">
                        <span className="text-white font-mono text-sm">800800211 (Red Book)</span>
                        <a href="https://xhslink.com/m/74d3BpY6Hzt" target="_blank" rel="noopener noreferrer" className="text-[#FF2442] hover:opacity-80 transition-opacity flex items-center" title="小红书主页">
                          <svg viewBox="0 0 1024 1024" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                            <rect width="1024" height="1024" rx="256" fill="currentColor"/>
                            <path d="M685.2 349.8c-10.2-13.8-28.8-19.2-45-12.6L488.4 396.6V256.2c0-17.4-14.4-31.8-31.8-31.8s-31.8 14.4-31.8 31.8v169.2L273 355.2c-15.6-7.2-34.2-1.2-42.6 13.8-7.8 15.6-1.8 34.2 13.8 42.6l180.6 84v273.6c0 17.4 14.4 31.8 31.8 31.8s31.8-14.4 31.8-31.8V499.2l184.2-66.6c16.2-6 24-24 12.6-39.6z" fill="#FFFFFF"/>
                            <path d="M751.2 595.2c-15.6-7.8-34.2-1.8-42.6 13.8l-46.2 91.8-46.2-91.8c-7.8-15.6-27-21.6-42.6-13.8-15.6 7.8-21.6 27-13.8 42.6l67.8 135.6c6 12 18 19.2 31.2 19.2h6.6c13.2-1.8 24.6-10.2 29.4-22.8l69.6-132c8.4-15 2.4-34.2-13.2-42.6z" fill="#FFFFFF"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null) : null}
            </div>
          </div>

          {/* Column 4: Number Buttons */}
          <div className="w-16 flex flex-col gap-3">
            {[1, 2, 3, 4, 5].map(num => (
              <button key={num} className="btn-3d grid-unit text-lg" onClick={() => handleNum(num)}>{num}</button>
            ))}
          </div>

          {/* Column 5: Right Controls */}
          <div className="w-36 flex flex-col gap-3">
            {/* Digital Display */}
            <div className="grid-double digital-display p-3 flex flex-col justify-between relative">
              <div className="flex justify-between items-start text-[10px] text-gray-400">
                <div className="leading-tight">
                  {days[now.getDay()]}, {months[now.getMonth()]}<br/>{now.getDate()}
                </div>
                {/* Battery Icon */}
                <div className="w-5 h-2.5 border border-gray-500 rounded-sm relative mt-0.5">
                  <div className="absolute right-[-3px] top-[2px] w-[2px] h-[4px] bg-gray-500"></div>
                  <div className="w-3/4 h-full bg-gray-400"></div>
                </div>
              </div>
              <div className="flex items-baseline justify-center mt-1">
                <span className="text-3xl tracking-wider text-gray-200">
                  {now.getHours().toString().padStart(2, '0')}:{now.getMinutes().toString().padStart(2, '0')}
                </span>
                <span className="text-xs ml-1 text-gray-500">
                  {now.getSeconds().toString().padStart(2, '0')}
                </span>
              </div>
              <div className="flex justify-between items-end text-[10px] text-gray-400">
                <span>22.5°C</span>
                <span>Hong Kong</span>
              </div>
            </div>
            {/* Row 1 */}
            <div className="grid grid-cols-2 gap-3 grid-unit">
              <button className="btn-3d" onClick={() => handleAction('Sound')}>
                <div className={`indicator-dot ${isSoundOn ? 'dot-red' : 'dot-grey'}`}></div>
                sound
              </button>
              <button className="btn-3d" onClick={toggleAutoplay}>
                <div className={`indicator-dot ${isTyping ? 'dot-red' : 'dot-grey'}`}></div>
                autoplay
              </button>
            </div>
            {/* Row 2 */}
            <div className="grid grid-cols-2 gap-3 grid-unit">
              <button className="btn-3d" onClick={() => handleAction('Light')}>
                <div className={`indicator-dot ${isLightOn ? 'dot-red' : 'dot-grey'}`}></div>
                light
              </button>
              <button className="btn-3d" onClick={() => handleAction('Music')}>
                <div className={`indicator-dot ${isMusicOn ? 'dot-red' : 'dot-grey'}`}></div>
                music
              </button>
            </div>
            {/* Row 3 */}
            <button className="btn-3d grid-unit w-full" onClick={togglePower}>
              <div className={`indicator-dot ${isPowerOn ? 'dot-red' : 'dot-grey'}`}></div>
              power on
            </button>
          </div>

        </div>

        {/* Bottom Section: Tape Measure / Ruler */}
        <div className="recessed-panel h-24 p-3 flex items-start justify-between overflow-hidden relative">
          {Array.from({ length: totalTicks }).map((_, i) => {
            const tickNum = i + 1;
            const isRed = redMarks[tickNum];
            return (
              <div key={tickNum} className="flex flex-col items-center h-full w-[8px] pt-2">
                <div 
                  id={`tick-${i}`}
                  className={`w-[2px] transition-all duration-75 ${isRed ? 'bg-[#ff3b30] shadow-[0_0_2px_rgba(255,59,48,0.4)]' : 'bg-gray-400 shadow-[inset_1px_0_1px_rgba(0,0,0,0.2)]'}`}
                  style={{ height: isRed ? '48px' : '32px' }}
                />
                {isRed && <span className="text-[10px] font-mono text-gray-700 mt-1 leading-none">{tickNum}</span>}
              </div>
            );
          })}
        </div>
      </div>
      </MobileScaleWrapper>

      {/* Modals for Projects */}
      <AnimatePresence>
        {selectedWork && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed inset-0 z-[100] bg-warm-bg overflow-y-auto text-warm-fg font-sans"
          >
            <div className="min-h-screen relative">
              <button onClick={() => setSelectedWork(null)} className="fixed top-6 right-6 p-4 bg-warm-bg border border-warm-border hover:bg-warm-fg hover:text-warm-bg transition-colors z-[110] rounded-full shadow-lg">
                <X size={24} />
              </button>

              {selectedWork.type === 'detailed_other' ? (
                <div className="max-w-5xl mx-auto px-6 py-24">
                  {/* 顶部引导区 */}
                  <div className="mb-24">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="label-text bg-warm-fg text-warm-bg px-3 py-1.5">{selectedWork.category}</span>
                      <span className="label-text text-warm-fg/60">{selectedWork.date}</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">{selectedWork.title}</h1>
                    <h2 className="text-xl md:text-2xl font-serif italic text-warm-fg/80 mb-6">{selectedWork.subtitle}</h2>
                    <p className="text-lg leading-relaxed border-l-2 border-warm-accent pl-4 text-warm-fg/80 whitespace-pre-line">{selectedWork.description}</p>
                  </div>

                  {/* 一、fashion design展示 */}
                  <div className="mb-24">
                    <h2 className="text-3xl font-black uppercase tracking-tight mb-8 border-b border-warm-border pb-4">01. Fashion Design <span className="font-serif italic font-normal text-warm-fg/50">展示</span></h2>
                    
                    <div className="mb-16">
                      <h3 className="text-xl font-bold mb-6">project 1: half of face</h3>
                      <div className="border border-warm-border overflow-hidden mb-4 bg-warm-fg/5">
                        <SketchesCarousel images={selectedWork.fashionDesign1} />
                      </div>
                      <p className="text-sm text-center text-warm-fg/60 mt-4">2022-服装与服饰设计毕业设计</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-6">project 2:战神卡尔迪亚</h3>
                      <div className="border border-warm-border overflow-hidden mb-4 bg-warm-fg/5">
                        <SketchesCarousel images={selectedWork.fashionDesign2} />
                      </div>
                      <p className="text-sm text-center text-warm-fg/60 mt-4">2021-个人设计作品</p>
                    </div>
                  </div>

                  {/* 二、个人创作及经历展示说明 */}
                  <div className="mb-24">
                    <h2 className="text-3xl font-black uppercase tracking-tight mb-8 border-b border-warm-border pb-4">02. Personal Works <span className="font-serif italic font-normal text-warm-fg/50">个人创作及经历展示说明</span></h2>
                    
                    <div className="mb-16">
                      <h3 className="text-xl font-bold mb-6">1、个人手工创作</h3>
                      <div className="border border-warm-border overflow-hidden mb-4 bg-warm-fg/5">
                        <SketchesCarousel images={selectedWork.personalWorks1} />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-6">2、实习经历记录</h3>
                      <div className="border border-warm-border overflow-hidden mb-4 bg-warm-fg/5">
                        <SketchesCarousel images={selectedWork.personalWorks2} />
                      </div>
                    </div>
                  </div>
                </div>
              ) : selectedWork.type === 'detailed_proposal' ? (
                <div className="max-w-5xl mx-auto px-6 py-24">
                  {/* 顶部引导区 */}
                  <div className="mb-24">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="label-text bg-warm-fg text-warm-bg px-3 py-1.5">{selectedWork.category}</span>
                      <span className="label-text text-warm-fg/60">{selectedWork.date}</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">{selectedWork.title}</h1>
                    <h2 className="text-xl md:text-2xl font-serif italic text-warm-fg/80 mb-6">{selectedWork.subtitle}</h2>
                    <p className="text-lg leading-relaxed border-l-2 border-warm-accent pl-4 text-warm-fg/80 whitespace-pre-line">{selectedWork.description}</p>
                  </div>

                  {/* Proposal展示 */}
                  <div className="mb-24">
                    <div className="mb-8 border-b border-warm-border pb-4">
                      <h2 className="text-3xl font-black uppercase tracking-tight">01. Proposal <span className="font-serif italic font-normal text-warm-fg/50">展示</span></h2>
                    </div>
                    <div className="w-full mb-4">
                      <MultiPageCarousel images={selectedWork.proposal.slides} itemsToShow={3.5} labelPrefix="Page" />
                    </div>
                  </div>

                  {/* Research */}
                  <div className="mb-24">
                    <h2 className="text-3xl font-black uppercase tracking-tight mb-8 border-b border-warm-border pb-4">02. Research <span className="font-serif italic font-normal text-warm-fg/50">展示</span></h2>
                    <div className="w-full mb-4">
                      <MultiPageCarousel images={selectedWork.research.slides} itemsToShow={1.5} labelPrefix="Slide" />
                    </div>
                  </div>

                </div>
              ) : selectedWork.type === 'detailed_gongbai' ? (
                <div className="max-w-5xl mx-auto px-6 py-24">
                  {/* 顶部引导区 */}
                  <div className="mb-24">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="label-text bg-warm-fg text-warm-bg px-3 py-1.5">{selectedWork.category}</span>
                      <span className="label-text text-warm-fg/60">{selectedWork.date}</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">{selectedWork.title}</h1>
                    <h2 className="text-xl md:text-2xl font-serif italic text-warm-fg/80 mb-6">{selectedWork.subtitle}</h2>
                    <p className="text-lg leading-relaxed border-l-2 border-warm-accent pl-4 text-warm-fg/80">{selectedWork.description}</p>
                  </div>

                  {/* 手稿展示 */}
                  <div className="mb-24">
                    <h2 className="text-3xl font-black uppercase tracking-tight mb-8 border-b border-warm-border pb-4">01. Sketches <span className="font-serif italic font-normal text-warm-fg/50">手稿展示</span></h2>
                    <SketchesCarousel images={selectedWork.sketches} />
                    <p className="text-center text-sm text-warm-fg/60 mt-6">手绘图案手稿，最终版权归贡㿟品牌所有。</p>
                  </div>

                  {/* 产品展示 */}
                  <div className="mb-24">
                    <h2 className="text-3xl font-black uppercase tracking-tight mb-8 border-b border-warm-border pb-4">02. Lookbook <span className="font-serif italic font-normal text-warm-fg/50">展示</span></h2>
                    <LookbookCarousel images={selectedWork.products} />
                    <p className="text-center text-sm text-warm-fg/60 mt-6">贡㿟2024AW lookbook</p>
                  </div>

                  {/* 工作记录 */}
                  <div className="mb-24">
                    <h2 className="text-3xl font-black uppercase tracking-tight mb-8 border-b border-warm-border pb-4">03. Work Records <span className="font-serif italic font-normal text-warm-fg/50">工作记录</span></h2>
                    <div className="flex flex-col gap-12">
                      {selectedWork.workRecords.map((img: string, idx: number) => (
                        <div key={idx} className="flex justify-center items-center overflow-hidden">
                          <img 
                            src={img} 
                            alt={`Record ${idx+1}`} 
                            className="w-full h-auto max-h-[80vh] object-contain mix-blend-multiply scale-90 transition-all duration-500" 
                            referrerPolicy="no-referrer"
                            loading="eager"
                            fetchPriority="high"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              ) : selectedWork.type === 'detailed_mudanting' ? (
                <div className="max-w-5xl mx-auto px-6 py-24">
                  {/* 顶部引导区 */}
                  <div className="mb-24">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="label-text bg-warm-fg text-warm-bg px-3 py-1.5">{selectedWork.category}</span>
                      <span className="label-text text-warm-fg/60">{selectedWork.date}</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">{selectedWork.title}</h1>
                    <h2 className="text-xl md:text-2xl font-serif italic text-warm-fg/80 mb-6">{selectedWork.subtitle}</h2>
                    <p className="text-lg leading-relaxed border-l-2 border-warm-accent pl-4 text-warm-fg/80">{selectedWork.description}</p>
                  </div>

                  {/* 制作过程展示 */}
                  <div className="mb-24">
                    <div className="mb-8 border-b border-warm-border pb-4">
                      <h2 className="text-3xl font-black uppercase tracking-tight">01. Process <span className="font-serif italic font-normal text-warm-fg/50">制作过程展示</span></h2>
                    </div>
                    <div className="w-full mb-4">
                      <MudantingCarousel slides={selectedWork.process.slides} />
                    </div>
                  </div>

                  {/* 展板展示 */}
                  <div className="mb-24">
                    <h2 className="text-3xl font-black uppercase tracking-tight mb-8 border-b border-warm-border pb-4">02. Exhibition Boards <span className="font-serif italic font-normal text-warm-fg/50">展板展示</span></h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                      {selectedWork.boards.images.map((img: string, idx: number) => (
                        <div key={idx} className="border border-warm-border overflow-hidden">
                          <img src={img} alt={`Board ${idx+1}`} className="w-full h-auto object-contain transition-all duration-500" referrerPolicy="no-referrer" />
                        </div>
                      ))}
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-6">宣传视频展示</h3>
                      <div className="aspect-video border border-warm-border bg-warm-fg flex items-center justify-center relative group cursor-pointer mb-4">
                        <video className="w-full h-full object-cover transition-opacity" controls>
                          <source src={selectedWork.boards.video.url} type="video/mp4" />
                        </video>
                      </div>
                      <p className="text-sm leading-relaxed text-warm-fg/80">{selectedWork.boards.video.description}</p>
                    </div>
                  </div>

                  {/* 高清产品图展示 */}
                  <div className="mb-24">
                    <h2 className="text-3xl font-black uppercase tracking-tight mb-8 border-b border-warm-border pb-4">03. Products <span className="font-serif italic font-normal text-warm-fg/50">高清产品图展示</span></h2>
                    
                    {/* Preload all images to eliminate loading time */}
                    <div className="hidden">
                      {selectedWork.products.map((img: string, idx: number) => (
                        <img key={`preload-product-${idx}`} src={img} referrerPolicy="no-referrer" loading="eager" />
                      ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {selectedWork.products.map((img: string, idx: number) => (
                        <div key={idx} className="overflow-hidden flex items-center justify-center">
                          <img src={img} alt={`Product ${idx+1}`} className="w-full h-auto object-contain" referrerPolicy="no-referrer" loading="eager" fetchPriority="high" />
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              ) : selectedWork.type === 'detailed' ? (
                <div className="max-w-5xl mx-auto px-6 py-24">
                  {/* 顶部引导区 */}
                  <div className="mb-24">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="label-text bg-warm-fg text-warm-bg px-3 py-1.5">{selectedWork.category}</span>
                      <span className="label-text text-warm-fg/60">{selectedWork.date}</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">{selectedWork.title}</h1>
                    <h2 className="text-xl md:text-2xl font-serif italic text-warm-fg/80 mb-12">{selectedWork.subtitle}</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-warm-border pt-12">
                      <div>
                        <h3 className="label-text text-warm-accent mb-4">项目核心 / Core</h3>
                        <p className="text-lg leading-relaxed">{selectedWork.overview.core}</p>
                      </div>
                      <div>
                        <h3 className="label-text text-warm-accent mb-4">创作背景 / Background</h3>
                        <p className="text-lg leading-relaxed">{selectedWork.overview.background}</p>
                      </div>
                      <div>
                        <h3 className="label-text text-warm-accent mb-4">AI 应用亮点 / AI Highlights</h3>
                        <p className="text-lg leading-relaxed">{selectedWork.overview.aiHighlights}</p>
                      </div>
                      <div>
                        <h3 className="label-text text-warm-accent mb-4">创作周期 / Duration</h3>
                        <p className="text-lg leading-relaxed">{selectedWork.overview.duration}</p>
                      </div>
                    </div>
                  </div>

                  {/* 制作过程展示 */}
                  <div className="mb-24">
                    <h2 className="text-3xl font-black uppercase tracking-tight mb-8 border-b border-warm-border pb-4">01. Research <span className="font-serif italic font-normal text-warm-fg/50">调研部分</span></h2>
                    <div className="mb-8 flex flex-col md:flex-row md:justify-between md:items-end gap-4">
                      <div>
                        <h3 className="label-text text-warm-accent mb-2">调研背景</h3>
                        <p className="text-lg leading-relaxed">{selectedWork.research.background}</p>
                      </div>
                      <div className="flex items-center gap-2 text-warm-fg/50 shrink-0">
                        <span className="label-text">向左/右滑动查看更多</span>
                        <ArrowRight size={14} />
                      </div>
                    </div>
                    <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 hide-scrollbar">
                      {selectedWork.research.slides.map((slide: any, idx: number) => (
                        <div key={idx} className="min-w-full snap-center shrink-0">
                          <div className="w-full border border-warm-border overflow-hidden mb-4 bg-warm-fg/5 flex items-center justify-center p-2 md:p-6">
                            <img src={slide.image} alt={slide.caption} className="w-full h-auto max-h-[40vh] md:max-h-[50vh] lg:max-h-[70vh] object-contain transition-all duration-500" referrerPolicy="no-referrer" />
                          </div>
                          {slide.caption && <p className="label-text text-center text-warm-fg/60">{slide.caption}</p>}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 宣传物料展示 */}
                  <div className="mb-24">
                    <h2 className="text-3xl font-black uppercase tracking-tight mb-8 border-b border-warm-border pb-4">02. Promotional <span className="font-serif italic font-normal text-warm-fg/50">宣传物料</span></h2>
                    
                    <div className="mb-16">
                      <h3 className="text-xl font-bold mb-6">宣传海报展示</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        {selectedWork.promotional.posters.images.map((img: string, idx: number) => (
                          <div key={idx} className="aspect-[2/3] border border-warm-border overflow-hidden">
                            <img src={img} alt={`Poster ${idx+1}`} className="w-full h-full object-cover transition-all duration-500" referrerPolicy="no-referrer" />
                          </div>
                        ))}
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-warm-fg/5 p-8 border border-warm-border">
                        <div>
                          <h4 className="label-text text-warm-accent mb-2">海报主题</h4>
                          <p className="text-sm leading-relaxed">{selectedWork.promotional.posters.theme}</p>
                        </div>
                        <div>
                          <h4 className="label-text text-warm-accent mb-2">补充说明</h4>
                          <p className="text-sm leading-relaxed">{selectedWork.promotional.posters.description}</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-6">宣传视频展示</h3>
                      <div className="aspect-video border border-warm-border bg-warm-fg flex items-center justify-center relative group cursor-pointer mb-4">
                        <video className="w-full h-full object-cover transition-opacity" controls>
                          <source src={selectedWork.promotional.video.url} type="video/mp4" />
                        </video>
                      </div>
                      <p className="text-sm leading-relaxed text-warm-fg/80">{selectedWork.promotional.video.description}</p>
                    </div>
                  </div>

                  {/* 网站页面展示 */}
                  <div className="mb-24">
                    <h2 className="text-3xl font-black uppercase tracking-tight mb-8 border-b border-warm-border pb-4">03. Interface <span className="font-serif italic font-normal text-warm-fg/50">页面展示</span></h2>
                    <div className="space-y-16">
                      {selectedWork.pages.map((page: any, idx: number) => (
                        <div key={idx} className="border border-warm-border p-4 md:p-8 bg-warm-bg">
                          <div className="flex items-center gap-4 mb-6">
                            <span className="text-2xl font-black text-warm-accent">0{idx+1}</span>
                            <h3 className="text-xl font-bold">{page.name}</h3>
                          </div>
                          <div className="aspect-video border border-warm-border overflow-hidden mb-8">
                            <img src={page.image} alt={page.name} className="w-full h-full object-cover transition-all duration-500" referrerPolicy="no-referrer" />
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                              <h4 className="label-text text-warm-accent mb-2">核心功能 / Features</h4>
                              <p className="text-sm leading-relaxed">{page.features}</p>
                            </div>
                            <div>
                              <h4 className="label-text text-warm-accent mb-2">AI 应用细节 / AI Details</h4>
                              <p className="text-sm leading-relaxed">{page.aiDetails}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 附加功能 */}
                  <div className="border-t border-warm-border pt-12 text-center">
                    <h2 className="text-2xl font-black uppercase tracking-tight mb-6">Live Demo</h2>
                    <a href={selectedWork.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-warm-fg text-warm-bg px-8 py-4 label-text hover:bg-warm-accent transition-colors ease-custom">
                      访问在线演示 <ExternalLink size={16} />
                    </a>
                  </div>

                </div>
              ) : null}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
