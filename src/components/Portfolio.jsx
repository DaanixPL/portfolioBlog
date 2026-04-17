import { useState } from 'react'
import PortfolioCard from './PortfolioCard'

const portfolioItems = [
  {
    id: 1,
    title: 'Ile kosztuje strona internetowa w 2026 roku? Aktualne ceny i czynniki wpływające na koszty',
    tag: 'Strona',
    excerpt:
      'Strona internetowa jest obecnie podstawowym narzędziem obecności firmy w internecie. Umożliwia prezentację oferty, budowanie wiarygodności oraz pozyskiwanie klientów.',
    content: [
      'Koszt wykonania strony internetowej w 2026 roku może się znacząco różnić w zależności od zakresu projektu, technologii oraz dodatkowych funkcji. Cena zależy głównie od jej rodzaju: strony portfolio kosztują zazwyczaj od 1000 do 3000 zł, strony firmowe od 3000 do 7000 zł, a bardziej rozbudowane serwisy to wydatek rzędu 7000–15000 zł i więcej.',
      'Główne czynniki wpływające na ostateczną wycenę to zakres projektu (liczba podstron), stopień skomplikowania projektu graficznego (szablon vs indywidualny design) oraz dodatkowe funkcjonalności, takie jak systemy rezerwacji czy integracje zewnętrzne. Nie bez znaczenia pozostaje również optymalizacja SEO, która wpływa na późniejszą widoczność strony w Google.',
      'Warto traktować własną witrynę jako inwestycję, a nie koszt. Dobrze zaprojektowana strona buduje wiarygodność, pozwala prezentować ofertę w uporządkowany sposób i stanowi podstawowe źródło pozyskiwania zapytań ofertowych w niemal każdej branży. Wybór odpowiedniego rozwiązania powinien być zawsze dopasowany do celów biznesowych firmy.',
    ],
  },
  {
    id: 2,
    title: 'Jak zwiększyć sprzedaż w sklepie internetowym? 5 sprawdzonych metod',
    tag: 'E-commerce',
    excerpt:
      'Sprzedaż w sklepie internetowym zależy od wielu czynników, nie tylko od ruchu na stronie czy działań reklamowych. Poznaj metody na realne zwiększenie konwersji.',
    content: [
      'Kluczem do sukcesu w e-commerce jest optymalizacja opisów produktów oraz wysoka jakość zdjęć. Opisy powinny podkreślać korzyści i odpowiadać na pytania klientów, natomiast profesjonalne fotografie budują niezbędne zaufanie. Równie istotna jest widoczność w Google – dbanie o SEO na poziomie kategorii i produktów to fundament stałego dopływu klientów.',
      'Kolejnym aspektem jest maksymalne uproszczenie procesu zakupowego. Zbyt wiele kroków w koszyku to najczęstsza przyczyna porzuceń zamówień. Warto oferować popularne metody płatności i zadbać o przejrzystość formularzy. Dodatkowo, prowadzenie bloga firmowego z treściami edukacyjnymi pozwala przyciągnąć klienta na wczesnym etapie ścieżki zakupowej.',
      'Podsumowując, zwiększenie sprzedaży to proces wielotorowy. Połączenie wartościowej treści, optymalizacji technicznej SEO oraz sprawnego UX (User Experience) w procesie zakupowym pozwala na osiągnięcie najlepszych wyników i stały wzrost przychodów sklepu.',
    ],
  },
  {
    id: 3,
    title: 'Dlaczego Twoja strona nie pojawia się w Google? Najczęstsze błędy SEO',
    tag: 'SEO',
    excerpt:
      'Brak widoczności strony w Google to częsty problem firm. Nawet ładna strona nie zarobi, jeśli nie została zoptymalizowana pod kątem wyszukiwarek.',
    content: [
      'Najczęstszym błędem jest brak dopasowania treści do słów kluczowych oraz nieprawidłowa struktura nagłówków. Google musi rozumieć, o czym jest Twoja strona, dlatego logiczny podział na H1, H2 i H3 oraz regularne publikowanie treści na blogu są niezbędne do budowania pozycji w rankingu.',
      'Inne zaniedbania to brak linkowania wewnętrznego, które pomaga robotom indeksować stronę, oraz rzadkie aktualizacje. Strony, które "stoją w miejscu", z czasem tracą zaufanie algorytmów. Regularne odświeżanie treści i dbanie o techniczną stronę SEO to jedyny sposób na utrzymanie stabilnego ruchu organicznego.',
      'Aby poprawić sytuację, należy wdrożyć spójną strategię SEO: zoptymalizować istniejące podstrony, zacząć regularnie publikować wartościowe poradniki i zadbać o powiązania między artykułami. Pamiętaj, że widoczność w Google to proces, który wymaga cierpliwości i systematyczności.',
    ],
  },
  {
    id: 4,
    title: 'Jak napisać skuteczny opis usługi, który przyciąga klientów?',
    tag: 'Copywriting',
    excerpt:
      'Opis usługi ma bezpośredni wpływ na to, czy klient wyśle zapytanie. Dowiedz się, jak pisać teksty, które realnie sprzedają i budują zaufanie.',
    content: [
      'Skuteczny opis usługi musi jasno określać, co oferujesz i jaki problem klienta rozwiązujesz. Unikanie ogólników na rzecz konkretów pozwala użytkownikowi szybko ocenić, czy trafił w odpowiednie miejsce. Kluczowe jest skupienie się na korzyściach – klient nie kupuje Twoich działań, ale efekt, który dzięki nim osiągnie.',
      'Tekst powinien być napisany prostym, zrozumiałym językiem, unikając nadmiaru technicznego żargonu. Warto też zawczasu odpowiedzieć na najczęstsze pytania: o cenę, czas realizacji oraz model współpracy. Przejrzystość w tych kwestiach buduje profesjonalny wizerunek i skraca drogę do finalizacji transakcji.',
      'Każdy opis musi kończyć się wyraźnym wezwaniem do działania (Call to Action). Zaproszenie do kontaktu, wypełnienia formularza czy bezpłatnej konsultacji to niezbędny element, który przekuwa czytelnika w potencjalnego leada. Dobrze skonstruowana oferta to Twoja najlepsza karta przetargowa.',
    ],
  },
  {
    id: 5,
    title: 'Dlaczego Twoja strona nie sprzedaje? Najczęstsze błędy, które tracą klientów',
    tag: 'Konwersja',
    excerpt:
      'Wiele firm posiada profesjonalnie wyglądającą stronę, która nie generuje zapytań. Dowiedz się, jakie błędy w strukturze i treści sprawiają, że tracisz potencjalnych klientów.',
    content: [
      'Głównym powodem braku sprzedaży często nie jest mały ruch, ale brak jasnego przekazu na stronie. Użytkownik w kilka sekund musi zrozumieć, co oferujesz i jaką korzyść odniesie. Strony przeładowane ogólnymi hasłami typu „najwyższa jakość” bez konkretnych odpowiedzi na potrzeby klienta sprawiają, że odwiedzający szybko rezygnują z dalszego przeglądania.',
      'Kluczowymi elementami, które budują sprzedaż, są widoczne wezwania do działania (CTA) oraz elementy budujące zaufanie, takie jak opinie klientów czy konkretne realizacje. Jeśli ścieżka kontaktu jest zbyt skomplikowana lub treść skupia się wyłącznie na firmie zamiast na problemach klienta, współczynnik konwersji drastycznie spada.',
      'Podsumowując, skuteczna strona musi prowadzić użytkownika za rękę – od jasnej informacji o usłudze, przez przedstawienie korzyści i dowodów słuszności, aż po prosty formularz kontaktu. Optymalizacja tych elementów pozwala znacząco zwiększyć liczbę zapytań ofertowych bez konieczności zwiększania wydatków na reklamę.',
    ],
  },
]

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
