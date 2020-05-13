Ahojte,
tu su tie TCs a strategia.Dufam,ze som na nic nezabudol.


Navrh testovania:po unit testoch od programatorov a deployi tejto komponenty by som najprv spravil sanity test manualne podla dizajnu/specifikacie,ci nie je preklep v texte napr,ci splna requirements.
Dalej by som spravil integracne testy,kde by som skumal,ci nie je chyba medzi touto komponentou a inymi,s ktorymi 'interaguje',tj napr,ci sa spravne dotahuju udaje z inych komponent do tejto novej komponenty.Sice chyby,ktore sa najdu v integracnych testoch by sa spravidla nasli aj v e2e testoch,ale vo vseobecnosti plati,ze cim skor sa chyba objavi,tym je to menej nakladne.Nakoniec by som zakomponoval do e2e(to uz by som zautomatizoval)testov a vzdy pred releasom v ramci regresnych testov(automatizovane)-ked sa doplni nejaka nova funkcionalita,aby sa verifikovalo,ci sa nieco nepokazilo deploynutim novej funkcionality na inom mieste appky.dalsie veci k tomu su uz out of scope tohoto zadania:)tolko cca k yivotu tejto featury

#1:
medzi invetors a investors group(ostatne moduly si uz dobre nepamatam,ako su poprepajane):
prihlas sa s validnymi udajmi
V menu vyber modul kpi configuration
pridaj(vypln) kpi
skontroluj,ci idu pridavat,ci sa spravne sejvuje,ci ide vymazat korektne(toto nebudeme robit-to nie je nas focus v tomto pripade:))
uloz kpi a preklikni sa do investors grouppozri,ci sa spravne dotahuju udaje(btw v tom okne add investor groups je button 'add' v disable mode,pokial tam nie su kpi,tj neviem pridat novu grupu,ale ked kliknem enter,tak to pusti a ide to.to by asi nemalo)
pridaj novu investor group-pozri,ci sa spravne dotahuju udaje z kpi configuration,ci checkboxy su klikatelne
skontroluj,ci sa nazov dotiahol do tabulky a ci sedia visible kpis(pridaj,odober)
skontroluj,ci ide spravne vymazat udaj

#2(req1,req2..):
Test case(integracny) medzi kpi komponentou a investor groups:
prihlas sa s validnymi udajmi(login page-ten je mimo rozsahu,co sa bude testovat,tj nebudeme skusat negativne scenare typu out of boundary a podobne)
Klikni v menu na modul Investors
Zobrazia sa dva taby
z predchadzajuceho tc mame vyplnenych niekolko investor groups,takze netreba vytvarat nove
preklikneme sa na investors
klik na assign to group-dostaneme sa na okno,kde sa da vybrat investor groups,kpis
check,KPI visibility settings ci sa sprravne dotahuju
pridel ku grupe a preklikni sa na investor groups a pozri,ci sa naparoval investor spravne
potom ho remove from group mozeme a tiez verifikovat,ci v i.groups,ci je aj odtial prec
dalej skus pridat /odobrat co-admin prava-kontroluj,ci sa spravne dotahuju

Tie tc vyssie nie su zrovna pisane najformalnejsie,ale musim uz odovzdat,tak som zvolil takyto 'slangovejsi' zargon nateraz,aby som stihol do 9tej.
snazil som sa co najviac pokryt do jedneho tc




Zvykne sa este robit tzv RTM matica na to,aby sa skontrolovalo,ci su vsetky requirementy pokryte test case-ami

k tomu automatizovanmeu testu:na spravne spustenie treba dat do command line : npm install
(to stiahne dependencie,ktore treba na spustenie)
Je tam aj mala ochutnavka- taka mimo zadania narychlo spravena v cucumber,len tak pre zaujimavost,ze ako to cca vyzera tym stylom

ten cucumber project sa da spustit tak,ze v cypress.json nahradim:"testFiles": "**/*.js", za :

 "ignoreTestFiles" : ["*.js", "*.md"],
"testFiles": "**/*.{feature,features}",
este jedna drobnost: v tom test case:VBTest.js ma byt v describe nie: 'fero',ale 'Investor groups feature' a v 'it' bloku namiesto 'jozo' ma byt 'should add new investor group'
z neajkeho dovodu mi to nejde commitnut,tak to davam sem.
Keby nieco nebolo jasne,tak ma kludne kontaktujte
Dakujem a Pekny den



Filip