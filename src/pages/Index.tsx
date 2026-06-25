import type React from "react"
import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  CheckCircle,
  TrendingUp,
  Shield,
  FileText,
  Clock,
  Users,
  MapPin,
  Phone,
  Mail,
  ChevronDown,
  ChevronRight,
  Menu,
  DollarSign,
  Target,
  Wallet,
  ArrowLeftRight,
  LineChart,
  Heart,
  FileCheck,
  Scale,
  Compass,
  Building2,
  Brain,
  GraduationCap,
  BarChart3,
  Receipt,
} from "lucide-react"

interface StrategyCardProps {
  id: string
  icon:
    | "shield"
    | "target"
    | "clock"
    | "wallet"
    | "arrows"
    | "chart"
    | "heartbeat"
    | "file-check"
    | "scales"
    | "compass"
  title: string
  valueProp: string
  what: string[]
  metrics: string[]
  sources: string[]
  tag: "Priority" | "Risk" | "Tax" | "Income" | "Estate" | "Health" | "Implementation"
}

const tagLabels: Record<StrategyCardProps["tag"], string> = {
  Priority: "Приоритет",
  Risk: "Качество",
  Tax: "Логистика",
  Income: "Выгода",
  Estate: "Ассортимент",
  Health: "Безопасность",
  Implementation: "Поставка",
}

function StrategyCard({ id, icon, title, valueProp, what, metrics, sources, tag }: StrategyCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const iconMap = {
    shield: <Shield className="h-6 w-6 text-primary" />,
    target: <Target className="h-6 w-6 text-primary" />,
    clock: <Clock className="h-6 w-6 text-primary" />,
    wallet: <Wallet className="h-6 w-6 text-primary" />,
    arrows: <ArrowLeftRight className="h-6 w-6 text-primary" />,
    chart: <LineChart className="h-6 w-6 text-primary" />,
    heartbeat: <Heart className="h-6 w-6 text-primary" />,
    "file-check": <FileCheck className="h-6 w-6 text-primary" />,
    scales: <Scale className="h-6 w-6 text-primary" />,
    compass: <Compass className="h-6 w-6 text-primary" />,
  }

  const tagColors = {
    Priority: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    Risk: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
    Tax: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    Income: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    Estate: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    Health: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
    Implementation: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200",
  }

  return (
    <Card
      className="cursor-pointer transition-all duration-200 hover:shadow-lg rounded-2xl border-2"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">{iconMap[icon]}</div>
            <CardTitle className="text-xl leading-tight text-balance">{title}</CardTitle>
          </div>
          <Badge className={`${tagColors[tag]} text-xs font-semibold flex-shrink-0 ml-2`}>{tagLabels[tag]}</Badge>
        </div>
        <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
          <p className="text-base text-foreground leading-relaxed">{valueProp}</p>
        </div>
      </CardHeader>
      {isExpanded && (
        <CardContent className="space-y-6 pt-0">
          <div>
            <h5 className="font-semibold text-foreground mb-3 text-base">Что включено</h5>
            <ul className="space-y-2 text-base text-muted-foreground">
              {what.map((item, index) => (
                <li key={index} className="leading-relaxed flex items-start">
                  <span className="mr-2 flex-shrink-0">-</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-foreground mb-3 text-base">Метрики успеха</h5>
            <ul className="space-y-2 text-base text-muted-foreground">
              {metrics.map((metric, index) => (
                <li key={index} className="leading-relaxed flex items-start">
                  <span className="mr-2 flex-shrink-0">-</span>
                  <span>{metric}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="pt-4 border-t">
            <h5 className="font-semibold text-foreground mb-2 text-sm">Источники</h5>
            <p className="text-sm text-muted-foreground italic">{sources.join("; ")}</p>
          </div>
        </CardContent>
      )}
    </Card>
  )
}

interface RecommendationCardProps {
  number: number
  title: string
  icon: React.ReactNode
  what: string
  why: string
  firstSteps: string[]
}

function RecommendationCard({ number, title, icon, what, why, firstSteps }: RecommendationCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card className="cursor-pointer transition-all duration-200 hover:shadow-md">
      <CardHeader className="pb-3 min-h-[60px] flex justify-center" onClick={() => setIsExpanded(!isExpanded)}>
        <CardTitle className="flex items-center justify-between text-base sm:text-lg leading-tight">
          <div className="flex items-center space-x-2 pr-2">
            <div className="flex-shrink-0">{icon}</div>
            <span className="text-balance">
              {number}. {title}
            </span>
          </div>
          <div className="flex-shrink-0 ml-2">
            {isExpanded ? (
              <ChevronDown className="h-5 w-5 text-muted-foreground" />
            ) : (
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            )}
          </div>
        </CardTitle>
      </CardHeader>
      {isExpanded && (
        <CardContent className="space-y-6 pt-0 px-4 sm:px-6">
          <div className="bg-muted/50 p-4 rounded-lg border-l-4 border-primary">
            <p className="text-sm text-foreground font-medium leading-relaxed">{why}</p>
          </div>
          <div>
            <h5 className="font-semibold text-foreground mb-3 text-base">Что включено</h5>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{what}</p>
          </div>
          <div>
            <h5 className="font-semibold text-foreground mb-3 text-base">Первые шаги</h5>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {firstSteps.map((step, index) => (
                <li key={index} className="leading-relaxed flex items-start">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      )}
    </Card>
  )
}

function TableOfContents() {
  const [activeSection, setActiveSection] = useState("")
  const [isOpen, setIsOpen] = useState(false)

  const sections = [
    { id: "team", label: "Команда" },
    { id: "executive-summary", label: "Резюме" },
    { id: "service-options", label: "Форматы сотрудничества" },
    { id: "recommendations", label: "Продукция" },
    { id: "fees", label: "Цены и условия" },
    { id: "onboarding", label: "Старт сотрудничества" },
    { id: "next-steps", label: "Следующие шаги" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
      setIsOpen(false)
    }
  }

  return (
    <>
      {/* Mobile TOC Toggle */}
      <div className="fixed top-4 right-4 z-50 lg:hidden">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
          className="bg-background/95 backdrop-blur-sm shadow-lg"
        >
          <Menu className="h-4 w-4" />
        </Button>
      </div>

      {/* Mobile TOC Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <Card className="absolute top-16 right-4 w-48 bg-background shadow-lg">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Содержание</CardTitle>
            </CardHeader>
            <CardContent className="space-y-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left text-xs px-2 py-1 rounded transition-colors ${
                    activeSection === section.id
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}

interface ServiceCategory {
  id: string
  title: string
  color: string
  icon: React.ReactNode
  services: ServiceItem[]
}

interface ServiceItem {
  service: string
  details: string
  isPersonalized?: boolean
}

const financialPlanningServices: ServiceCategory[] = [
  {
    id: "assortment",
    title: "Ассортимент свежемороженой продукции",
    color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
    icon: <Clock className="h-6 w-6" />,
    services: [
      {
        service: "Замороженные ягоды",
        details: "Клубника, малина, черника, смородина, вишня — собраны в сезон и заморожены в течение нескольких часов",
      },
      {
        service: "Замороженные овощи",
        details: "Брокколи, цветная капуста, зелёный горошек, кукуруза, стручковая фасоль, перец",
      },
      {
        service: "Овощные смеси",
        details: "Готовые смеси для гарниров, супов и вторых блюд: «Мексиканская», «Гавайская», «Паприкаш», «Лечо»",
      },
      {
        service: "Замороженные грибы",
        details: "Шампиньоны, лесные грибы, ассорти — очищенные и порционно нарезанные",
      },
      {
        service: "Полуфабрикаты и заготовки",
        details: "Картофель фри, овощные котлеты, наггетсы, заправки для борща и рагу",
      },
      {
        service: "Замороженная зелень",
        details: "Укроп, петрушка, кинза, шпинат — сохраняют цвет, аромат и витамины после шоковой заморозки",
      },
      {
        service: "Морепродукты",
        details: "Креветки, морской коктейль, филе рыбы — глубокая заморозка с контролем глазури",
      },
    ],
  },
  {
    id: "quality-freezing",
    title: "Контроль качества и шоковая заморозка",
    color: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
    icon: <Receipt className="h-6 w-6" />,
    services: [
      {
        service: "Технология шоковой заморозки (IQF)",
        details: "Раздельная заморозка при -35 °C сохраняет структуру, вкус и питательную ценность продукта",
        isPersonalized: true,
      },
      {
        service: "Входной контроль сырья",
        details: "Каждая партия сырья проходит лабораторную проверку по органолептике и микробиологии",
        isPersonalized: true,
      },
      {
        service: "Непрерывный холодовой цикл",
        details: "Контроль температуры на всех этапах: от поля до отгрузки партнёру без размораживания",
        isPersonalized: true,
      },
      {
        service: "Система менеджмента ХАССП (HACCP)",
        details: "Производство построено на принципах ХАССП с контролем критических точек безопасности",
        isPersonalized: true,
      },
      {
        service: "Прослеживаемость партий",
        details: "По номеру партии можно отследить происхождение сырья, дату и параметры заморозки",
        isPersonalized: true,
      },
      {
        service: "Лабораторный контроль готовой продукции",
        details: "Регулярные проверки готовой продукции на соответствие ГОСТ и ТУ перед отгрузкой",
        isPersonalized: true,
      },
    ],
  },
  {
    id: "logistics-storage",
    title: "Логистика и хранение",
    color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    icon: <Wallet className="h-6 w-6" />,
    services: [
      {
        service: "Доставка рефрижераторным транспортом",
        details: "Собственный и партнёрский автопарк с поддержанием температуры -18 °C на всём маршруте",
        isPersonalized: true,
      },
      {
        service: "Складские мощности с режимом -18 °C",
        details: "Низкотемпературные склады позволяют формировать страховой запас под объёмы партнёра",
        isPersonalized: true,
      },
      {
        service: "Гибкий график отгрузок",
        details: "Согласование графика поставок под вашу логистику и оборачиваемость склада",
        isPersonalized: true,
      },
    ],
  },
  {
    id: "packaging",
    title: "Упаковка и фасовка",
    color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    icon: <BarChart3 className="h-6 w-6" />,
    services: [
      {
        service: "Потребительская фасовка 300–1000 г",
        details: "Розничная упаковка с печатью под полку магазина и удобными порциями",
        isPersonalized: true,
      },
      {
        service: "Весовая упаковка для HoReCa",
        details: "Фасовка 2,5–10 кг для ресторанов, столовых и пищевых производств",
        isPersonalized: true,
      },
      {
        service: "Брендирование и Private Label",
        details: "Выпуск продукции под торговой маркой партнёра с индивидуальным дизайном упаковки",
        isPersonalized: true,
      },
      {
        service: "Транспортная упаковка и паллетирование",
        details: "Гофрокороба и паллеты, оптимизированные под загрузку фуры и складское хранение",
        isPersonalized: true,
      },
    ],
  },
  {
    id: "wholesale-terms",
    title: "Условия оптовых поставок",
    color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    icon: <Shield className="h-6 w-6" />,
    services: [
      {
        service: "Скидки за объём",
        details: "Прогрессивная шкала скидок при росте объёма заказа и заключении долгосрочного контракта",
        isPersonalized: true,
      },
      {
        service: "Фиксация цены по контракту",
        details: "Возможность зафиксировать отпускные цены на сезон для предсказуемости закупок",
        isPersonalized: true,
      },
    ],
  },
  {
    id: "certification-safety",
    title: "Сертификация и безопасность продукции",
    color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    icon: <FileCheck className="h-6 w-6" />,
    services: [
      {
        service: "Декларации соответствия ТР ТС",
        details: "Вся продукция сопровождается декларациями соответствия техническим регламентам ЕАЭС",
        isPersonalized: true,
      },
      {
        service: "Соответствие ГОСТ и ТУ",
        details: "Производство по действующим ГОСТ и собственным техническим условиям с протоколами испытаний",
        isPersonalized: true,
      },
    ],
  },
  {
    id: "service-support",
    title: "Сервис и поддержка партнёров",
    color: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200",
    icon: <GraduationCap className="h-6 w-6" />,
    services: [
      {
        service: "Бесплатные образцы продукции",
        details: "Предоставление образцов ассортимента для дегустации и оценки качества перед заказом",
      },
      {
        service: "Персональный менеджер",
        details: "Закреплённый менеджер сопровождает партнёра по заявкам, документам и поставкам",
      },
    ],
  },
  {
    id: "production-capacity",
    title: "Производственные мощности",
    color: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200",
    icon: <Building2 className="h-6 w-6" />,
    services: [
      {
        service: "Стабильные объёмы под крупные сети",
        details: "Производственные линии обеспечивают регулярные поставки без перебоев в высокий сезон",
        isPersonalized: true,
      },
      {
        service: "Резерв мощности под рост заказов",
        details: "Возможность масштабировать объём поставок под развитие сети партнёра",
        isPersonalized: true,
      },
    ],
  },
  {
    id: "new-products",
    title: "Разработка новых продуктов",
    color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    icon: <Brain className="h-6 w-6" />,
    services: [
      {
        service: "Разработка рецептур под запрос",
        details: "Технологи создают новые смеси и продукты под потребности и целевую аудиторию партнёра",
        isPersonalized: true,
      },
      {
        service: "Сезонные и тематические линейки",
        details: "Запуск ограниченных серий к сезону и праздникам для расширения полки и среднего чека",
        isPersonalized: true,
      },
    ],
  },
]

function ExecutiveSummaryCard() {
  const [isExpanded, setIsExpanded] = useState(true)

  return (
    <Card
      className="mb-8 sm:mb-12 cursor-pointer transition-all duration-200 hover:shadow-lg rounded-2xl border-2"
      id="executive-summary"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-2">
            <FileText className="h-5 w-5 text-primary flex-shrink-0" />
            <CardTitle className="text-xl sm:text-2xl">Резюме</CardTitle>
          </div>
          {isExpanded ? (
            <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
          ) : (
            <ChevronRight className="h-5 w-5 text-muted-foreground flex-shrink-0" />
          )}
        </div>
        <CardDescription className="text-base leading-relaxed">
          Почему «Барингс» — надёжный партнёр по поставкам свежемороженой продукции
        </CardDescription>
      </CardHeader>
      {isExpanded && (
        <CardContent className="space-y-8">
          <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
            <p className="text-base text-foreground leading-relaxed">
              «Барингс» — производитель свежемороженой продукции полного цикла: от заготовки сезонного сырья до
              шоковой заморозки, фасовки и доставки рефрижераторным транспортом. Мы предлагаем оптовым партнёрам
              стабильное качество, прозрачные условия и гибкую логистику. Это коммерческое предложение подготовлено,
              чтобы показать выгоду долгосрочного сотрудничества: расширение ассортимента вашей полки, надёжные
              объёмы поставок и контроль качества на каждом этапе.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h4 className="font-semibold text-foreground text-lg">Почему «Барингс»</h4>
              <ul className="space-y-4 text-base text-muted-foreground">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">
                    Собственное производство полного цикла: замороженные ягоды, овощи, овощные смеси, грибы,
                    зелень, полуфабрикаты и морепродукты под маркой «Барингс»
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">
                    Технология шоковой заморозки (IQF) при -35 °C сохраняет вкус, цвет, форму и витамины продукта
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">
                    Непрерывный холодовой цикл и доставка рефрижераторами с поддержанием -18 °C на всём маршруте
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">
                    Система ХАССП, декларации соответствия ТР ТС ЕАЭС, производство по ГОСТ и ТУ с протоколами испытаний
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">
                    Гибкая фасовка — от розничной упаковки до весовой для HoReCa, а также производство под Private Label
                  </span>
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="font-semibold text-foreground text-lg">Что мы предлагаем партнёру</h4>
              <ul className="space-y-4 text-base text-muted-foreground">
                <li className="flex items-start space-x-3">
                  <TrendingUp className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">
                    Прозрачные оптовые цены в рублях с прогрессивными скидками за объём и возможностью фиксации
                    цены на сезон по контракту
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <TrendingUp className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">
                    Стабильные регулярные поставки без перебоев даже в высокий сезон за счёт резерва
                    производственных мощностей
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <TrendingUp className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">
                    Бесплатные образцы ассортимента для дегустации и оценки качества перед заключением договора
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <TrendingUp className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">
                    Персональный менеджер, сопровождающий партнёра по заявкам, документам, графику отгрузок и
                    решению любых вопросов
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <TrendingUp className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">
                    Разработка новых рецептур и сезонных линеек под потребности вашей сети для расширения полки
                    и роста среднего чека
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  )
}

function ServiceCategoryCard({ category }: { category: ServiceCategory }) {
  const [isExpanded, setIsExpanded] = useState(false)

  const personalizedCount = category.services.filter((s) => s.isPersonalized).length

  return (
    <Card
      className="cursor-pointer transition-all duration-200 hover:shadow-lg rounded-2xl border-2"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">{category.icon}</div>
            <CardTitle className="text-xl leading-tight text-balance">{category.title}</CardTitle>
          </div>
          <div className="flex items-center space-x-2">
            {personalizedCount > 0 && (
              <Badge className="bg-primary text-primary-foreground text-xs font-semibold flex-shrink-0">
                {personalizedCount} для вас
              </Badge>
            )}
            <Badge className={`${category.color} text-xs font-semibold flex-shrink-0`}>
              {category.services.length} позиций
            </Badge>
            {isExpanded ? (
              <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
            ) : (
              <ChevronRight className="h-5 w-5 text-muted-foreground flex-shrink-0" />
            )}
          </div>
        </div>
      </CardHeader>
      {isExpanded && (
        <CardContent className="pt-0">
          <div className="space-y-4">
            {category.services.map((service, index) => (
              <div
                key={index}
                className={`border-l-4 pl-4 py-2 ${
                  service.isPersonalized
                    ? "border-primary bg-primary/5"
                    : "border-primary/30"
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <h5 className="font-semibold text-foreground text-base mb-1 flex-1">{service.service}</h5>
                  {service.isPersonalized && (
                    <Badge className="bg-primary text-primary-foreground text-xs font-semibold flex-shrink-0">
                      Для вас
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.details}</p>
              </div>
            ))}
          </div>
        </CardContent>
      )}
    </Card>
  )
}

export default function ClientProposal() {
  return (
    <div className="min-h-screen bg-background">
      <TableOfContents />

      {/* Professional Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-3">
              <img
                src="/images/design-mode/FgXdJj9lQfuwdL2tT3uNYMFNviU.png"
                alt="Логотип Барингс"
                className="h-10 w-10 rounded-lg flex-shrink-0 object-cover"
              />
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-foreground leading-tight">
                  Барингс
                </h1>
                <p className="text-xs sm:text-sm text-muted-foreground">Свежесть в каждой упаковке. Качество заморозки. Надёжные поставки.</p>
              </div>
            </div>
            <div className="text-left sm:text-right space-y-1 w-full sm:w-auto">
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 flex-shrink-0" aria-label="Адрес" />
                <span>г. Краснодар, ул. Уральская, 95</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-muted-foreground">
                <Phone className="h-4 w-4 flex-shrink-0" aria-label="Телефон" />
                <span>+7 (861) 200-45-67</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-muted-foreground">
                <Mail className="h-4 w-4 flex-shrink-0" aria-label="Email" />
                <span>info@barings.ru</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-4xl mt-20">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <Badge variant="secondary" className="mb-4">
            Коммерческое предложение
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance leading-tight">
            Подготовлено для генерального директора
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 text-pretty max-w-2xl mx-auto leading-relaxed">
            Свежемороженая продукция «Барингс» для вашей сети: широкий ассортимент, шоковая заморозка,
            стабильные объёмы и выгодные условия оптовых поставок
          </p>
          <div className="flex items-center justify-center space-x-4 sm:space-x-8 text-xs sm:text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>Дата: 25 июня 2026</span>
            </div>
          </div>
        </div>

        {/* Meet Our Team */}
        <Card className="mb-8 sm:mb-12" id="team">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-xl sm:text-2xl">
              <Users className="h-5 w-5 text-primary" />
              <span>Команда «Барингс»</span>
            </CardTitle>
            <CardDescription className="text-base leading-relaxed">
              Специалисты, которые обеспечат качество продукции и надёжность поставок для вашего бизнеса
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center space-y-2">
                <h4 className="font-semibold text-foreground text-base">Андрей Соколов</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Генеральный директор</p>
              </div>
              <div className="text-center space-y-2">
                <h4 className="font-semibold text-foreground text-base">Елена Воронцова</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Главный технолог производства</p>
              </div>
              <div className="text-center space-y-2">
                <h4 className="font-semibold text-foreground text-base">Дмитрий Лебедев</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Менеджер по качеству</p>
              </div>
              <div className="text-center space-y-2">
                <h4 className="font-semibold text-foreground text-base">Ольга Никитина</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Руководитель отдела продаж</p>
              </div>
              <div className="text-center space-y-2">
                <h4 className="font-semibold text-foreground text-base">Сергей Морозов</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Руководитель логистики</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Executive Summary */}
        <ExecutiveSummaryCard />

        {/* Service Model Selection */}
        <Card className="mb-8 sm:mb-12" id="service-options">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl">Выберите формат сотрудничества</CardTitle>
            <CardDescription className="text-base leading-relaxed">
              Три модели поставок, разработанные под разные потребности и масштабы вашего бизнеса
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Card 1: Asset Management Only */}
              <div className="border rounded-lg p-6 space-y-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground text-lg">Разовая закупка</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Пробная или единичная поставка для оценки качества продукции «Барингс»
                  </p>
                </div>
                <div className="space-y-4">
                  <div>
                    <h5 className="text-sm font-semibold text-foreground mb-3">Для кого подходит</h5>
                    <ul className="text-sm text-muted-foreground space-y-2 leading-relaxed">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        Хотите протестировать продукцию перед контрактом
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        Небольшие магазины и точки общепита
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        Сезонные и разовые потребности в объёме
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-foreground mb-3">Что вы получите</h5>
                    <ul className="text-sm text-muted-foreground space-y-2 leading-relaxed">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        Поставка от минимального заказа (1 паллета)
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        Полный пакет сопроводительных документов
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        Доставка рефрижератором или самовывоз
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        Стандартный прайс-лист «Барингс»
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-foreground mb-3">Не включено</h5>
                    <ul className="text-sm text-muted-foreground space-y-2 leading-relaxed">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">x</span>Скидки за объём и фиксация цены
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card 2: Comprehensive Wealth Management - Recommended */}
              <div className="border-2 border-primary rounded-lg p-6 space-y-6 relative">
                <Badge className="absolute -top-3 left-4 bg-primary text-primary-foreground font-semibold">
                  РЕКОМЕНДУЕМ
                </Badge>
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground text-lg">Регулярные поставки по контракту</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Долгосрочное партнёрство с гарантированными объёмами и лучшими условиями
                  </p>
                </div>
                <div className="space-y-4">
                  <div>
                    <h5 className="text-sm font-semibold text-foreground mb-3">Для кого подходит</h5>
                    <ul className="text-sm text-muted-foreground space-y-2 leading-relaxed">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        Розничные сети и оптовые базы
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        Сети ресторанов, столовых и пищевые производства
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        Партнёры, ценящие стабильность и цену
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-foreground mb-3">Что вы получите</h5>
                    <ul className="text-sm text-muted-foreground space-y-2 leading-relaxed">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        Регулярные отгрузки по согласованному графику
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        Прогрессивные скидки за объём и отсрочка платежа
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        Фиксация цены на сезон по договору
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        Резерв продукции на складе под ваши объёмы
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        Персональный менеджер и приоритетная отгрузка
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        Доставка рефрижераторами по всему региону
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card 3: Project-Based Planning */}
              <div className="border rounded-lg p-6 space-y-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground text-lg">Эксклюзивное партнёрство (Private Label)</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">Продукция под вашей торговой маркой</p>
                </div>
                <div className="space-y-4">
                  <div>
                    <h5 className="text-sm font-semibold text-foreground mb-3">Для кого подходит</h5>
                    <ul className="text-sm text-muted-foreground space-y-2 leading-relaxed">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        Сети, развивающие собственную торговую марку
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        Дистрибьюторы с собственным брендом
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-foreground mb-3">Что вы получите</h5>
                    <ul className="text-sm text-muted-foreground space-y-2 leading-relaxed">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        Производство под вашим брендом и дизайном
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        Разработка рецептур под вашу аудиторию
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        Эксклюзивные позиции и условия в регионе
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        Выделенные производственные мощности
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-foreground mb-3">Примеры</h5>
                    <ul className="text-base text-muted-foreground space-y-3 leading-relaxed">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                        <span className="break-words">Линейка ягод под маркой сети</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                        <span className="break-words">Фирменные овощные смеси и гарниры</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                        <span className="break-words">Полуфабрикаты под собственным брендом</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                        <span className="break-words">Сезонные и праздничные серии</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Recommendations */}
        <div className="mb-8 sm:mb-12" id="recommendations">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 leading-tight">
            Продукция и услуги «Барингс»
          </h2>
          <p className="text-base text-muted-foreground mb-8 leading-relaxed">
            Полный цикл от заготовки сырья до доставки на ваш склад. Ниже представлены ключевые категории продукции
            и услуг «Барингс». Нажмите на любую категорию, чтобы увидеть конкретные позиции.
          </p>

          <div className="space-y-6">
            {financialPlanningServices.map((category) => (
              <ServiceCategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>

        {/* Fee Structure */}
        <Card className="mb-8 sm:mb-12" id="fees">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl">Цены и условия поставок</CardTitle>
            <CardDescription className="text-base leading-relaxed">
              Прозрачное ценообразование в рублях с прогрессивными скидками за объём заказа
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
              <div className="space-y-6">
                <h4 className="font-semibold text-foreground text-lg">Скидки за объём</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                    <span className="text-sm font-medium">От 1 до 5 тонн в месяц</span>
                    <span className="text-sm font-semibold">базовый прайс</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                    <span className="text-sm font-medium">От 5 до 20 тонн в месяц</span>
                    <span className="text-sm font-semibold">скидка 7%</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                    <span className="text-sm font-medium">Свыше 20 тонн в месяц</span>
                    <span className="text-sm font-semibold">скидка до 15%</span>
                  </div>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">Минимальный заказ:</span> 1 паллета (около 600 кг)
                    с доставкой по региону
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                    <span className="font-semibold text-foreground">Отсрочка платежа:</span> до 21 дня для постоянных
                    партнёров по договору
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <h4 className="font-semibold text-foreground text-lg">Условия доставки и оплаты</h4>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Доставка осуществляется рефрижераторным транспортом с поддержанием -18 °C на всём маршруте.
                  По региону доставка бесплатна при заказе от 1 паллеты, межрегиональная — по согласованию.
                  Оплата по счёту: предоплата для первого заказа, далее возможна отсрочка платежа по договору.
                  Цены могут быть зафиксированы на сезон при заключении контракта.
                </p>
                <a
                  href="mailto:info@barings.ru"
                  className="inline-flex items-center justify-center w-full min-h-[48px] text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2 transition-colors"
                >
                  Запросить полный прайс-лист
                </a>
              </div>
            </div>

            <div className="border-t pt-8">
              <h4 className="font-semibold text-foreground text-lg mb-6">Ориентировочные оптовые цены</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                  <span className="text-sm font-medium">Замороженные ягоды (ассорти)</span>
                  <span className="text-sm font-semibold">от 280 ₽/кг</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                  <span className="text-sm font-medium">Замороженные овощи и смеси</span>
                  <span className="text-sm font-semibold">от 110 ₽/кг</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                  <span className="text-sm font-medium">Замороженные грибы</span>
                  <span className="text-sm font-semibold">от 190 ₽/кг</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-muted rounded-lg border-2 border-dashed border-primary/30">
                  <span className="text-sm font-medium">Морепродукты (обсуждается)</span>
                  <span className="text-sm font-semibold">от 450 ₽/кг</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-primary/10 rounded-lg border-2 border-primary/40 mt-4">
                  <span className="text-base font-semibold text-foreground">Средний чек поставки (1 паллета)</span>
                  <span className="text-base font-bold text-foreground">от 120 000 ₽</span>
                </div>
                <p className="text-xs text-muted-foreground italic mt-4 leading-relaxed">
                  Примечание: цены ориентировочные и зависят от объёма, ассортимента, вида фасовки и сезона.
                  Точные цены и индивидуальные условия фиксируются в спецификации к договору.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Onboarding Process */}
        <Card className="mb-8 sm:mb-12" id="onboarding">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl">Как начать поставки</CardTitle>
            <CardDescription className="text-base leading-relaxed">
              Простой и понятный процесс — от первой заявки до регулярных поставок продукции «Барингс».
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-10">
              {/* Phase 1 */}
              <div className="relative">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 border-2 border-primary flex items-center justify-center">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-3">
                      <Badge className="bg-primary text-primary-foreground font-semibold">Этап 1</Badge>
                      <h4 className="font-semibold text-foreground text-lg">Заявка и подбор ассортимента</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Вы оставляете заявку, мы уточняем потребности, объёмы и формат фасовки и подбираем
                      ассортимент продукции под ваш бизнес.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <span className="font-medium">Ольга Никитина</span>
                      </div>
                      <span>-</span>
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <span className="font-medium">отдел продаж</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Уточнение объёмов и ассортимента</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Подготовка коммерческого предложения</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Connector line */}
                <div className="hidden md:block absolute left-8 top-20 w-0.5 h-12 bg-gradient-to-b from-primary/40 to-transparent"></div>
              </div>

              {/* Phase 2 */}
              <div className="relative">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 border-2 border-primary flex items-center justify-center">
                      <BarChart3 className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-3">
                      <Badge className="bg-primary text-primary-foreground font-semibold">Этап 2</Badge>
                      <h4 className="font-semibold text-foreground text-lg">Образцы и дегустация</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Мы бесплатно предоставляем образцы выбранного ассортимента, чтобы вы оценили качество,
                      вкус и внешний вид продукции «Барингс» перед заключением договора.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <span className="font-medium">Елена Воронцова</span>
                      </div>
                      <span className="text-xs">Главный технолог</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Передача образцов продукции</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Предоставление сертификатов и деклараций</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Согласование объёмов и фасовки</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Connector line */}
                <div className="hidden md:block absolute left-8 top-20 w-0.5 h-12 bg-gradient-to-b from-primary/40 to-transparent"></div>
              </div>

              {/* Phase 3 */}
              <div className="relative">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 border-2 border-primary flex items-center justify-center">
                      <Receipt className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-3">
                      <Badge className="bg-primary text-primary-foreground font-semibold">Этап 3</Badge>
                      <h4 className="font-semibold text-foreground text-lg">Договор и условия поставок</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Мы заключаем договор поставки, фиксируем цены, объёмы, график отгрузок и условия оплаты
                      в спецификации — всё прозрачно и зафиксировано документально.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <span className="font-medium">Дмитрий Лебедев</span>
                      </div>
                      <span className="text-xs">Менеджер по качеству</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Заключение договора поставки</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Фиксация цен и графика отгрузок</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Connector line */}
                <div className="hidden md:block absolute left-8 top-20 w-0.5 h-12 bg-gradient-to-b from-primary/40 to-transparent"></div>
              </div>

              {/* Phase 4 */}
              <div className="relative">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 border-2 border-primary flex items-center justify-center">
                      <Compass className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-3">
                      <Badge className="bg-primary text-primary-foreground font-semibold">Этап 4</Badge>
                      <h4 className="font-semibold text-foreground text-lg">Первая поставка и сопровождение</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Мы отгружаем первую партию рефрижератором с соблюдением холодового цикла и закрепляем за вами
                      персонального менеджера для дальнейших регулярных поставок.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <span className="font-medium">Сергей Морозов — логистика</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Отгрузка первой партии рефрижератором</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Закрепление персонального менеджера</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Callout Box */}
              <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background border-2 border-primary/20 rounded-2xl p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground text-lg">Что вы получите в итоге</h4>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Налаженный канал поставок качественной свежемороженой продукции, стабильные объёмы, выгодные
                      цены и персонального менеджера — никаких перебоев, только надёжное партнёрство.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card className="mb-8 sm:mb-12" id="next-steps">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl">Следующие шаги</CardTitle>
            <CardDescription className="text-base leading-relaxed">
              Готовы начать сотрудничество с «Барингс»? Вот как мы двигаемся дальше.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h4 className="font-semibold text-foreground text-lg">Ближайшие действия</h4>
                <ol className="space-y-4 text-base text-muted-foreground">
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center mt-0.5 font-semibold">
                      1
                    </span>
                    <span className="leading-relaxed">
                      Изучите предложение и обсудите ассортимент и объёмы с Ольгой Никитиной
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center mt-0.5 font-semibold">
                      2
                    </span>
                    <span className="leading-relaxed">Запросите бесплатные образцы продукции для дегустации</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center mt-0.5 font-semibold">
                      3
                    </span>
                    <span className="leading-relaxed">
                      Согласуйте условия и заключите договор поставки для первой отгрузки
                    </span>
                  </li>
                </ol>
              </div>
              <div className="space-y-6">
                <h4 className="font-semibold text-foreground text-lg">Важные детали</h4>
                <div className="space-y-4 text-base text-muted-foreground">
                  <div className="flex items-start space-x-3">
                    <DollarSign className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div className="leading-relaxed">
                      <span className="font-semibold text-foreground">Оплата:</span> По счёту с предоплатой для
                      первого заказа, далее возможна отсрочка платежа по договору
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FileText className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div className="leading-relaxed">
                      <span className="font-semibold text-foreground">Договор:</span> Договор поставки со
                      спецификацией по ценам, объёмам и графику отгрузок
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div className="leading-relaxed">
                      <span className="font-semibold text-foreground">Сроки:</span> От заявки до первой поставки
                      обычно проходит 1-2 недели
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t pt-8">
              <div className="text-center space-y-3">
                <p className="text-base text-muted-foreground leading-relaxed">
                  Это коммерческое предложение действительно 30 дней. Цены и условия могут быть уточнены
                  в зависимости от объёма, ассортимента и сезона.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Подготовлено командой «Барингс» - info@barings.ru - +7 (861) 200-45-67
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Additional Resources */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl">Дополнительные возможности</CardTitle>
            <CardDescription className="text-base leading-relaxed">
              Сервисы и преимущества, которые «Барингс» предлагает партнёрам
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1: Catalog */}
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-lg">Каталог продукции</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Полный каталог свежемороженой продукции «Барингс» с фотографиями, фасовками, сроками годности
                    и актуальным прайс-листом для оптовых партнёров
                  </p>
                </CardContent>
              </Card>

              {/* Card 2: Marketing Support */}
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-lg">Маркетинговая поддержка</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Для партнёров доступны маркетинговые инструменты для роста продаж на полке:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>- POS-материалы для торговых точек</li>
                    <li>- Промоакции и совместные дегустации</li>
                    <li>- Контент и фото для интернет-магазина</li>
                    <li>- Брендирование под СТМ (Private Label)</li>
                    <li>- Рецептуры и идеи блюд для покупателей</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Card 3: Communications */}
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-lg">Информирование партнёров</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    Будьте в курсе новинок ассортимента, сезонных предложений и изменений в прайсе.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Рассылка для оптовых клиентов:{" "}
                    <span className="font-mono text-xs break-all">partner@barings.ru</span>
                  </p>
                </CardContent>
              </Card>

              {/* Card 4: Quality & Certificates */}
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-lg">Качество и документы</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    «Барингс» — производитель свежемороженой продукции полного цикла. Производство работает по
                    принципам ХАССП, продукция соответствует ГОСТ, ТУ и техническим регламентам ЕАЭС.
                  </p>
                  <a
                    href="mailto:partner@barings.ru"
                    className="text-sm text-primary hover:text-primary/80 underline leading-relaxed break-words"
                  >
                    Запросить сертификаты и декларации
                  </a>
                </CardContent>
              </Card>

              {/* Card 5: Questions */}
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-lg">Вопросы?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Мы готовы ответить на любые вопросы и подобрать ассортимент и условия, которые идеально подойдут
                    вашему бизнесу.
                  </p>
                  <a
                    href="mailto:partner@barings.ru"
                    className="inline-flex items-center justify-center w-full min-h-[40px] text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2 transition-colors"
                  >
                    Напишите нам
                  </a>
                </CardContent>
              </Card>

              {/* Card 6: Samples */}
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-lg">Образцы продукции</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Закажите бесплатные образцы ассортимента «Барингс», чтобы оценить качество, вкус и внешний вид
                    продукции перед началом поставок.
                  </p>
                  <a
                    href="mailto:partner@barings.ru"
                    className="inline-flex items-center justify-center w-full min-h-[40px] text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2 transition-colors"
                  >
                    Запросить образцы
                  </a>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}