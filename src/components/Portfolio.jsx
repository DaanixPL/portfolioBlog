import { useState } from 'react'
import PortfolioCard from './PortfolioCard'

const portfolioItems = [
  {
    id: 1,
    title: 'Ile kosztuje strona internetowa w 2026 roku? Aktualne ceny i czynniki wpływające na koszt',
    tag: 'Strona',
    excerpt:
      'Strona internetowa jest obecnie podstawowym narzędziem obecności firmy w internecie. Umożliwia prezentację oferty, budowanie wiarygodności oraz pozyskiwanie klientów.',
    content: [
      'Strona internetowa jest obecnie podstawowym narzędziem obecności firmy w internecie. Umożliwia prezentację oferty, budowanie wiarygodności oraz pozyskiwanie klientów.\nKoszt wykonania strony internetowej w 2026 roku może się znacząco różnić w zależności od zakresu projektu, technologii oraz dodatkowych funkcji. Poniżej przedstawiono aktualne widełki cenowe oraz czynniki wpływające na koszt realizacji.',
      '**Ile kosztuje strona internetowa?**\nCena strony internetowej zależy od jej rodzaju oraz stopnia zaawansowania.\n* Strona portfolio: 1000–3000 zł\n* Strona firmowa: 3000–7000 zł\n* Rozbudowana strona z dodatkowymi funkcjami: 7000–15000 zł i więcej\nW przypadku sklepów internetowych lub systemów indywidualnych koszt może być wyższy.',
      '**Od czego zależy koszt strony internetowej?**\nNa cenę strony internetowej wpływa kilka kluczowych czynników:\n1. **Zakres projektu**: Im większa liczba podstron i funkcjonalności, tym wyższy koszt realizacji.\n2. **Projekt graficzny**: Strony oparte na gotowych szablonach są tańsze niż projekty tworzone indywidualnie.\n3. **Funkcjonalności**: Dodatkowe elementy, takie jak formularze kontaktowe, system rezerwacji, integracje czy sklep internetowy, zwiększają koszt projektu.\n4. **Optymalizacja SEO**: Strony przygotowane pod SEO są lepiej widoczne w wynikach wyszukiwania Google.',
      '**Dlaczego warto posiadać stronę internetową?**\nPosiadanie strony internetowej pozwala firmie zwiększyć widoczność w wyszukiwarce Google, budować wiarygodność w oczach klientów, pozyskiwać zapytania ofertowe oraz prezentować ofertę w uporządkowany sposób. W wielu branżach strona internetowa stanowi podstawowe źródło pozyskiwania klientów.',
      '**Podsumowanie**\nKoszt strony internetowej w 2026 roku zależy od jej rodzaju, funkcjonalności oraz poziomu zaawansowania. Proste strony można wykonać już od około 1000 zł, natomiast bardziej rozbudowane projekty mogą kosztować kilkanaście tysięcy złotych. Wybór odpowiedniego rozwiązania powinien być dopasowany do potrzeb oraz celów biznesowych firmy.'
    ],
  },
  {
    id: 2,
    title: 'Jak zwiększyć sprzedaż w sklepie internetowym? 5 sprawdzonych metod',
    tag: 'E-commerce',
    excerpt:
      'Sprzedaż w sklepie internetowym zależy od wielu czynników, nie tylko od ruchu na stronie czy działań reklamowych. Poznaj sprawdzone metody na zwiększenie sprzedaży.',
    content: [
      'Sprzedaż w sklepie internetowym zależy od wielu czynników, nie tylko od ruchu na stronie czy działań reklamowych. W praktyce często problemem jest brak odpowiedniej optymalizacji sklepu oraz niedostosowanie treści do potrzeb klientów.\nPoniżej przedstawiono 5 sprawdzonych metod, które mogą realnie zwiększyć sprzedaż w sklepie internetowym.',
      '1. **Optymalizacja opisów produktów**\nOpisy produktów mają bezpośredni wpływ na decyzje zakupowe klientów. Powinny one zawierać nie tylko cechy produktu, ale również jego korzyści oraz zastosowanie.\nDobry opis produktu powinien:\n* odpowiadać na pytania klientów\n* zawierać słowa kluczowe SEO\n* podkreślać korzyści użytkowe',
      '2. **SEO w sklepie internetowym**\nWidoczność w wyszukiwarce Google ma kluczowe znaczenie dla sprzedaży. Sklep internetowy powinien być zoptymalizowany pod kątem SEO zarówno na poziomie produktów, jak i kategorii.\nWażne elementy SEO to: optymalizacja tytułów, opisy kategorii, struktura nagłówków, linkowanie wewnętrzne oraz blog firmowy.',
      '3. **Jakość zdjęć produktowych**\nZdjęcia produktów mają duży wpływ na współczynnik konwersji. Klienci nie mogą fizycznie zobaczyć produktu, dlatego jakość zdjęć wpływa na poziom zaufania. Dobre zdjęcia powinny pokazywać produkt z różnych perspektyw i być wysokiej jakości.',
      '4. **Uproszczony proces zakupowy**\nZbyt skomplikowany proces zakupu często prowadzi do porzucenia koszyka. Im mniej kroków wymaganych do finalizacji zamówienia, tym większa szansa na sprzedaż. Warto zwrócić uwagę na liczbę kroków w koszyku oraz dostępne metody płatności.',
      '5. **Blog firmowy i treści edukacyjne**\nBlog firmowy pozwala przyciągać klientów na wcześniejszym etapie procesu zakupowego. Użytkownicy często szukają informacji (poradników, porównań) przed podjęciem decyzji zakupowej.',
      '**Podsumowanie**\nZwiększenie sprzedaży wymaga połączenia optymalizacji treści, SEO, jakości prezentacji produktów oraz uproszczenia procesu zakupowego. Każdy z tych elementów wpływa na finalną konwersję.'
    ],
  },
  {
    id: 3,
    title: 'Dlaczego Twoja strona nie pojawia się w Google? Najczęstsze błędy SEO',
    tag: 'SEO',
    excerpt:
      'Brak widoczności strony internetowej w Google jest jednym z najczęstszych problemów firm. Poznaj błędy, które wpływają na niską pozycję w wyszukiwarce.',
    content: [
      'Brak widoczności strony internetowej w Google jest jednym z najczęstszych problemów firm. Nawet dobrze zaprojektowana strona nie będzie generować ruchu, jeśli nie została odpowiednio zoptymalizowana pod SEO.\nPoniżej przedstawiono najczęstsze błędy, które wpływają na niską widoczność strony w wyszukiwarce.',
      '1. **Brak optymalizacji pod słowa kluczowe**: Podstawą SEO jest odpowiednie dopasowanie treści do zapytań użytkowników.\n2. **Brak treści blogowych**: Strony bez bloga mają ograniczone możliwości zdobywania ruchu organicznego.\n3. **Nieprawidłowa struktura nagłówków**: Brak logicznego podziału (H1, H2, H3) utrudnia Google zrozumienie zawartości strony.\n4. **Brak linkowania wewnętrznego**: Pomaga w indeksacji strony oraz zwiększa czas spędzony przez użytkownika na stronie.\n5. **Brak regularnej aktualizacji treści**: Strony nieaktualizowane często tracą pozycje w wynikach wyszukiwania.',
      '**Jak poprawić widoczność strony?**\nAby zwiększyć widoczność w Google, należy wdrożyć strategię SEO, regularnie publikować treści blogowe, optymalizować istniejące podstrony oraz stosować linkowanie wewnętrzne.',
      '**Podsumowanie**\nWidoczność strony w Google zależy od wielu czynników, jednak najczęściej problem wynika z braku SEO oraz niedostatecznej ilości wartościowych treści. Odpowiednia optymalizacja pozwala znacząco zwiększyć ruch organiczny.'
    ],
  },
  {
    id: 4,
    title: 'Jak napisać skuteczny opis usługi, który przyciąga klientów?',
    tag: 'Copywriting',
    excerpt:
      'Opis usługi na stronie internetowej ma bezpośredni wpływ na to, czy klient zdecyduje się na kontakt. Dowiedz się, jak tworzyć teksty, które sprzedają.',
    content: [
      'Opis usługi na stronie internetowej ma bezpośredni wpływ na to, czy klient zdecyduje się na kontakt. Zbyt ogólny lub niejasny tekst często powoduje utratę potencjalnych klientów.\nPoniżej przedstawiono zasady tworzenia skutecznych opisów usług, które zwiększają konwersję.',
      '1. **Jasne określenie usługi**: Klient powinien od razu wiedzieć, co oferuje firma, dla kogo jest usługa i jaki problem rozwiązuje.\n2. **Skupienie na korzyściach**: Klienci nie kupują usługi, tylko efekt. Zamiast opisywać co robisz, opisz co klient zyskuje.\n3. **Prosty i czytelny język**: Opis powinien być zrozumiały dla każdego użytkownika. Zbyt techniczne sformułowania mogą zniechęcać.',
      '4. **Odpowiedzi na pytania klientów**: Dobry opis usługi powinien zawierać informacje o kosztach, czasie realizacji oraz o tym, jak wygląda proces współpracy.\n5. **Wezwanie do działania**: Każdy opis usługi powinien kończyć się jasnym komunikatem zachęcającym do kontaktu (CTA).',
      '**Podsumowanie**\nSkuteczny opis usługi to taki, który jasno przedstawia ofertę, podkreśla korzyści i prowadzi klienta do kontaktu. Dobrze napisany tekst może znacząco zwiększyć liczbę zapytań.'
    ],
  },
  {
    id: 5,
    title: 'Dlaczego Twoja strona nie sprzedaje? Najczęstsze błędy, które tracą klientów',
    tag: 'Konwersja',
    excerpt:
      'Wiele firm posiada profesjonalnie wyglądającą stronę, która nie generuje zapytań. Poznaj najczęstsze błędy, które powodują utratę klientów.',
    content: [
      'Wiele firm posiada stronę internetową, która wygląda profesjonalnie, ale nie generuje zapytań ani sprzedaży. W praktyce problem rzadko leży w samym ruchu, a znacznie częściej w tym, co dzieje się po wejściu użytkownika na witrynę.',
      '1. **Brak jasnej informacji o działalności**: Użytkownik musi w ciągu kilku sekund zrozumieć korzyści, ofertę i jej adresata.\n2. **Zbyt ogólny przekaz**: Hasła typu „najwyższa jakość” nie wyjaśniają, dlaczego warto skorzystać z usług.\n3. **Brak widocznego wezwania do działania**: Brak przycisków „Skontaktuj się” czy „Poproś o wycenę” obniża konwersję.',
      '4. **Niedopasowanie treści do klienta**: Treść powinna opisywać problemy klienta i pokazywać rozwiązania, a nie tylko chwalić firmę.\n5. **Brak zaufania na stronie**: Brak opinii, realizacji czy danych kontaktowych zniechęca do podjęcia decyzji.\n6. **Zbyt skomplikowana ścieżka kontaktu**: Im więcej kroków do kontaktu, tym większa szansa na rezygnację klienta.',
      '**Podsumowanie**\nBrak sprzedaży najczęściej wynika z błędów w strukturze i treści witryny. Kluczowe są: jasny przekaz, dopasowanie do klienta, widoczne CTA oraz budowanie zaufania. Dobrze zoptymalizowana strona zwiększa liczbę zapytań bez zwiększania budżetu na reklamę.'
    ],
  },
];

function Portfolio() {
  const [expandedId, setExpandedId] = useState(null)

  return (
    <section id="portfolio" className="scroll-mt-24 border-b border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-gold">
          Realizacje
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
          Portfolio
        </h2>
        <p className="mt-4 max-w-2xl text-slate-600">
          Poniżej pokazuję przykładowe realizacje w formie roboczej. Kliknij kartę,
          a rozwinę pełny fragment tekstu.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <PortfolioCard
              key={item.id}
              item={item}
              isExpanded={expandedId === item.id}
              onToggle={() =>
                setExpandedId((currentId) =>
                  currentId === item.id ? null : item.id,
                )
              }
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
