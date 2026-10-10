# KN Psychoterapii — SWPS Wrocław

Strona gotowa do umieszczenia w nowym repozytorium GitHub i wdrożenia na Vercel. Zawiera wizję koła, miesięczny kalendarz z Google, regulamin, formularz zapisów z QR, Instagram, Facebook i kontakt.

## Publikacja — krok po kroku

1. Rozpakuj paczkę. Folder projektu zawiera `package.json`, `app/`, `public/`, `vercel.json` i tę instrukcję.
2. Na GitHub utwórz nowe repozytorium, np. `kn-psychoterapii-swps`. Wgraj **zawartość folderu projektu**, tak aby `package.json` znajdował się bezpośrednio w głównym katalogu repozytorium. Zapisz pliki przez **Commit changes**. Możesz też otworzyć folder w VS Code i opublikować repozytorium przez Source Control.
3. Na Vercel wybierz **Add New → Project**, połącz GitHub i zaimportuj to repozytorium. Jeśli Vercel nie widzi repozytorium, zezwól integracji na dostęp do tego konkretnego repozytorium.
4. Sprawdź ustawienia: **Framework Preset: Next.js**, **Root Directory: .**, **Install Command: npm ci**, **Build Command: npm run build**, **Output Directory: domyślne**. Node.js: 22.x lub nowszy obsługiwany przez Vercel. Nie dodawaj własnego katalogu `dist` ani `out`.
5. Kliknij **Deploy**. Po zakończeniu Vercel poda adres strony. Możesz potem dodać własną domenę w ustawieniach projektu.

Nie potrzeba kluczy API, tokenów Sites ani zmiennych środowiskowych. Kalendarz Google jest publiczny i pobierany przez funkcję `/api/calendar`. Po podłączeniu GitHuba kolejne aktualizacje repozytorium mogą być automatycznie wdrażane przez Vercel.

Pełna dokumentacja: https://vercel.com/docs/git/vercel-for-github

## Praca z GitHub Copilot

Otwórz folder projektu w VS Code z GitHub Copilot i użyj tekstu z `PROMPT-DLA-COPILOTA.md`. Projekt jest już przygotowany; Copilot może pomóc w publikacji repozytorium, uruchomieniu strony i późniejszych zmianach. Logowanie do GitHuba i Vercel wykonaj na swoim koncie.

## Uruchomienie lokalne

Wymagany Node.js 22.13 lub nowszy:

```sh
npm ci
npm run dev
```

Otwórz adres podany w terminalu. Weryfikacja wersji produkcyjnej:

```sh
npm run build
npm run start
```

## Edycja

- `app/page.tsx`: tekst, układ i linki trzech zakładek.
- `app/globals.css`: wygląd i dostosowanie do telefonu.
- `app/layout.tsx`: opis strony i lokalnie dołączona czcionka Nunito.
- `app/fonts/`: font Nunito i jego licencja SIL Open Font License.
- `public/assets/logo.png`: logo dostarczone przez koło.
- `public/assets/zapisy-qr.png`: nowy, niekadrowany QR; równą różową ramkę dodaje CSS.
- `public/config.js`: kontakt i identyfikator kalendarza Google.
- `public/app.js`: zakładki, przełączanie miesięcy i pokazywanie wydarzeń.
- `app/api/calendar/route.ts`: pobieranie publicznego kalendarza ICS, obsługa cyklicznych spotkań i godzin Europe/Warsaw.

Przy zmianie kalendarza zaktualizuj adres ICS w `app/api/calendar/route.ts` i identyfikator kalendarza w `public/config.js`. Odświeżenie następuje po otwarciu strony lub przełączeniu miesiąca; pamięć podręczna odpowiedzi trwa do 120 sekund.

Zapisy: https://forms.gle/S7cx1x6idhCC33ZB8
Kontakt: kn.psychoterapii.swps@gmail.com
Instagram: https://www.instagram.com/kolo_naukowe_psychoterapii/
Facebook: https://www.facebook.com/410657765472409
Regulamin źródłowy: https://www.instagram.com/p/DR1yTjSjBH4/

## Status

To paczka dla GitHub + Vercel. Nie jest jeszcze opublikowana na koncie Vercel. Wcześniejszy błąd Sites dotyczył odmowy uprawnień podczas przekazywania projektu do tej usługi, bez szczegółowego uzasadnienia. Projekt Vercel nie korzysta z Sites.
