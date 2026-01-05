import React, { useState } from 'react';

const masterData = {
  title: "Digital Technologies per l'Agri-Food",
  subtitle: "AI, Data Science e Innovazione Digitale per la Filiera Agroalimentare",
  totalCFU: 60,
  duration: "12 mesi",
  level: "Master Universitario I Livello",

  modules: [
    // FONDAMENTI
    {
      id: 1,
      name: "L'AgriFood Digitale",
      fullName: "L'AgriFood Digitale: Contesto, Sfide e Opportunità",
      cfu: 4,
      category: "foundation",
      color: "#00695C",
      icon: "📋",
      description: "Il modulo fornisce una visione d'insieme del settore agroalimentare nell'era della trasformazione digitale. Partendo dalle sfide concrete che agricoltori, trasformatori e distributori affrontano quotidianamente - dal cambiamento climatico alla carenza di manodopera, dalla pressione sui margini alle crescenti richieste di tracciabilità - si esplora come la digitalizzazione possa rappresentare una risposta efficace. Attraverso l'analisi di casi reali italiani e internazionali, gli studenti comprendono dove e come le tecnologie digitali generano valore, imparando a costruire business case solidi per progetti di innovazione.",
      objectives: [
        "Analizzare criticamente le sfide del settore agroalimentare e identificare opportunità di innovazione digitale",
        "Interpretare il quadro normativo e di policy europeo e nazionale sulla digitalizzazione agricola",
        "Mappare l'ecosistema AgriTech identificando attori chiave, trend e dinamiche di mercato",
        "Valutare casi d'uso reali estraendo lesson learned e fattori critici di successo",
        "Costruire un business case preliminare per un progetto di innovazione digitale"
      ],
      topics: [
        "Sfide dell'AgriFood: clima, risorse, margini, tracciabilità, ricambio generazionale",
        "Policy e incentivi: PAC 2023-27, Farm to Fork, PNRR, Agricoltura 4.0",
        "Mercato AgriTech: dimensioni, segmenti, trend globali e italiani, Industry 5.0",
        "Ecosistema e attori: startup, corporate, ricerca, policy maker, associazioni",
        "Digitalizzazione e SDG: impatto ambientale e sociale delle tecnologie",
        "Use case produzioni vegetali: vigneto digitale, cerealicoltura di precisione, ortofrutta",
        "Use case produzioni animali: stalla connessa, filiera latte, allevamento estensivo",
        "Use case supply chain: tracciabilità blockchain, logistica predittiva, vertical farm, carbon farming",
        "Business case: calcolo ROI, quick wins, errori comuni, fattori di successo"
      ]
    },
    {
      id: 2,
      name: "Tecnologie Abilitanti",
      fullName: "Tecnologie Abilitanti: Panoramica e Criteri di Scelta",
      cfu: 4,
      category: "foundation",
      color: "#00897B",
      icon: "⚡",
      description: "Il modulo offre una panoramica completa delle tecnologie che stanno trasformando il settore agroalimentare, con un approccio pensato per manager e professionisti del settore, non per sviluppatori. Per ogni tecnologia si segue un percorso logico: dal trend di mercato al problema concreto che risolve, dal funzionamento concettuale ai criteri per valutarla e sceglierla. L'obiettivo non è formare esperti tecnici, ma professionisti capaci di dialogare con fornitori, valutare proposte tecnologiche e prendere decisioni informate sugli investimenti in innovazione.",
      objectives: [
        "Comprendere il funzionamento concettuale delle principali tecnologie digitali per l'AgriFood",
        "Identificare per ogni tecnologia i problemi che risolve e i contesti applicativi appropriati",
        "Valutare la maturità tecnologica (TRL) e i limiti delle diverse soluzioni",
        "Applicare criteri sistematici per la selezione di tecnologie e fornitori",
        "Riconoscere red flags e hype tecnologico distinguendolo da opportunità reali"
      ],
      topics: [
        "Data & AI: ML, deep learning, computer vision, NLP/LLM, AI generativa - cosa fanno e quando servono",
        "IoT e connettività: sensori, architetture edge/cloud, reti LPWAN, NB-IoT, 5G, satellite",
        "Blockchain e DLT: pubblico vs privato, smart contract, oracoli, quando serve davvero",
        "Geomatica e remote sensing: satelliti, droni, GIS, GNSS - risoluzioni e costi",
        "Robotica e automazione: navigazione autonoma, percezione, ISOBUS, stato dell'arte",
        "AR/VR e Digital Twin: realtà aumentata, simulazione, gemelli digitali di filiera",
        "Piattaforme e interoperabilità: FMIS, standard aperti, API, data spaces europei",
        "Framework di valutazione: TRL, TCO, vendor selection, due diligence, red flags"
      ]
    },
    // APPLICATIVI
    {
      id: 3,
      name: "Precision Agriculture & Geomatica",
      fullName: "Precision Agriculture & Geomatica Applicata",
      cfu: 6,
      category: "applied",
      color: "#EF6C00",
      icon: "🛰️",
      description: "Il modulo trasforma le conoscenze teoriche sulla geomatica in competenze operative. Gli studenti imparano a gestire l'intero ciclo dell'agricoltura di precisione: dall'acquisizione di dati satellitari e da drone, alla loro elaborazione in ambiente GIS, fino alla creazione di mappe di prescrizione per applicazioni a rateo variabile. Il percorso è fortemente pratico, con esercitazioni su dati reali e utilizzo di software professionali. Al termine, i partecipanti sono in grado di progettare e supervisionare implementazioni di precision farming in azienda.",
      objectives: [
        "Acquisire e processare immagini satellitari e da drone per il monitoraggio colturale",
        "Elaborare indici vegetativi e interpretarli in chiave agronomica",
        "Utilizzare software GIS per analisi spaziale e creazione di mappe tematiche",
        "Progettare mappe di prescrizione per applicazioni a rateo variabile",
        "Configurare e valutare sistemi di guida automatica GNSS"
      ],
      topics: [
        "Ciclo della precision agriculture: mappatura, analisi, prescrizione, applicazione, verifica",
        "Telerilevamento operativo: Sentinel-2, Planet, accesso dati, frequenze e risoluzioni",
        "Indici vegetativi: NDVI, NDWI, NDRE, SAVI - calcolo e interpretazione agronomica",
        "Droni agricoli: tipologie, payload, normativa ENAC/EASA, pianificazione missioni",
        "GIS applicato: QGIS, analisi spaziale, overlay, esportazione per macchinari",
        "Mappe di prescrizione: zonazione, VRA per semina, concimazione, trattamenti",
        "Guida automatica: GNSS, correzioni RTK/NTRIP, livelli di precisione",
        "DSS agronomici: modelli previsionali, piattaforme (xarvio, Agricolus), interpretazione output"
      ]
    },
    {
      id: 4,
      name: "Smart Farming & Agricoltura Connessa",
      fullName: "Smart Farming & Agricoltura Connessa",
      cfu: 6,
      category: "applied",
      color: "#F57C00",
      icon: "📡",
      description: "Il modulo affronta la progettazione e implementazione di sistemi IoT per il monitoraggio e l'automazione in agricoltura. Dalla scelta dei sensori alla configurazione delle reti di comunicazione, dalla creazione di dashboard alla programmazione di logiche di controllo automatico, gli studenti acquisiscono competenze pratiche per realizzare soluzioni di smart farming. Particolare attenzione è dedicata alle specificità del contesto agricolo: alimentazione energetica in campo, connettività in aree rurali, robustezza e manutenzione dei sistemi.",
      objectives: [
        "Progettare architetture IoT adeguate al contesto agricolo e zootecnico",
        "Selezionare e installare sensori per diverse applicazioni (campo, serra, stalla)",
        "Configurare reti di comunicazione per aree rurali con connettività limitata",
        "Realizzare dashboard di monitoraggio e sistemi di alerting",
        "Implementare logiche di automazione per irrigazione, clima e alimentazione"
      ],
      topics: [
        "Progettazione reti IoT: requisiti, architettura, posizionamento, alimentazione",
        "Sensoristica campo: sensori suolo, meteo, pianta, trappole smart - installazione e manutenzione",
        "Sensoristica stalla: collari, boli, pedometri, sensori ambiente, mungitura robotizzata",
        "Connettività rurale: LoRaWAN, NB-IoT, satellite, WiFi agricolo, troubleshooting",
        "Piattaforme IoT: ThingsBoard, soluzioni commerciali, creazione dashboard, alert",
        "Automazione: attuatori, elettrovalvole, logiche di controllo, irrigazione automatica",
        "Serre intelligenti: controllo clima, fertirrigazione, LED, integrazione sensori-attuatori",
        "Vertical farming: sistemi idroponici, controllo ambiente, economics"
      ]
    },
    {
      id: 5,
      name: "Tracciabilità & Supply Chain 4.0",
      fullName: "Tracciabilità Digitale & Supply Chain 4.0",
      cfu: 6,
      category: "applied",
      color: "#FF8F00",
      icon: "🔗",
      description: "Il modulo forma professionisti capaci di progettare e implementare sistemi di tracciabilità digitale per le filiere agroalimentari. Si parte dai fondamenti normativi e dalle tecnologie di identificazione (QR, RFID, NFC), per arrivare all'implementazione di soluzioni blockchain e alla gestione digitale della supply chain. Gli studenti imparano a valutare quando la blockchain è realmente necessaria e quando soluzioni più semplici sono preferibili, evitando l'hype tecnologico per concentrarsi sul valore reale per il business.",
      objectives: [
        "Progettare sistemi di tracciabilità conformi ai requisiti normativi europei",
        "Selezionare le tecnologie di identificazione appropriate per ogni contesto",
        "Valutare l'opportunità di adottare soluzioni blockchain vs alternative tradizionali",
        "Implementare progetti di supply chain visibility e logistics optimization",
        "Preparare l'azienda al Digital Product Passport europeo"
      ],
      topics: [
        "Fondamenti: tracciabilità vs rintracciabilità, Reg. 178/2002, gestione lotti, richiami",
        "Tecnologie identificazione: barcode, QR code, RFID, NFC, tag IoT per cold chain",
        "Progetti blockchain: decision tree, piattaforme, architettura, integrazione, costi reali",
        "Smart contract: pagamenti automatici, certificazioni, oracoli, limiti applicativi",
        "Supply chain visibility: track & trace, predictive logistics, riduzione sprechi",
        "Digital Product Passport: regolamento EU, requisiti, implementazione",
        "Certificazioni data-driven: DOP/IGP digitali, biologico, GlobalGAP, audit automatizzati"
      ]
    },
    {
      id: 6,
      name: "Sostenibilità & Climate-Smart Agriculture",
      fullName: "Sostenibilità Digitale & Climate-Smart Agriculture",
      cfu: 6,
      category: "applied",
      color: "#43A047",
      icon: "🌱",
      description: "Il modulo esplora come le tecnologie digitali possano supportare la transizione verso un'agricoltura più sostenibile e resiliente ai cambiamenti climatici. Dall'ottimizzazione delle risorse (acqua, nutrienti, energia) alla misurazione e certificazione dell'impronta carbonica, gli studenti acquisiscono competenze per implementare pratiche di climate-smart agriculture supportate dal digitale. Particolare attenzione è dedicata al carbon farming come opportunità di business e ai nuovi obblighi di reporting ESG.",
      objectives: [
        "Implementare sistemi digitali per l'ottimizzazione delle risorse idriche ed energetiche",
        "Calcolare e monitorare il carbon footprint aziendale con strumenti digitali",
        "Progettare piani di carbon farming e accedere ai mercati dei crediti carbonio",
        "Predisporre reporting ESG conforme ai nuovi obblighi normativi",
        "Valutare e comunicare l'impatto ambientale delle pratiche agricole"
      ],
      topics: [
        "Agricoltura e clima: impatti, adattamento, mitigazione, target EU",
        "Ottimizzazione risorse: DSS per irrigazione e concimazione, riduzione input chimici",
        "Irrigazione di precisione: sensori, modelli ET, telegestione, piattaforme",
        "Carbon footprint: scope 1-2-3, strumenti di calcolo (Cool Farm Tool), LCA semplificato",
        "Carbon farming: pratiche di sequestro, MRV digitale, piattaforme, mercati crediti",
        "Reporting ESG: CSRD, tassonomia EU, raccolta dati automatizzata, comunicazione",
        "Biodiversità: monitoraggio tech, servizi ecosistemici, nuove opportunità di reddito"
      ]
    },
    // BUSINESS & GOVERNANCE
    {
      id: 7,
      name: "Business Model & Imprenditorialità",
      fullName: "Business Model & Imprenditorialità AgriTech",
      cfu: 4,
      category: "business",
      color: "#6A1B9A",
      icon: "📈",
      description: "Il modulo sviluppa competenze manageriali e imprenditoriali specifiche per l'innovazione digitale nel settore agroalimentare. Gli studenti imparano ad analizzare il mercato AgriTech, valutare modelli di business emergenti, costruire business case per investimenti tecnologici e gestire il processo di cambiamento organizzativo. Il percorso include anche elementi di proprietà intellettuale e accesso ai finanziamenti, competenze essenziali sia per chi opera in aziende consolidate sia per chi intende avviare iniziative imprenditoriali.",
      objectives: [
        "Analizzare il mercato AgriTech identificando opportunità e trend",
        "Valutare e progettare modelli di business per soluzioni digitali agricole",
        "Costruire business case e calcolare ROI per investimenti in innovazione",
        "Gestire processi di selezione fornitori e negoziazione contratti tecnologici",
        "Pianificare strategie di change management per l'adozione di nuove tecnologie"
      ],
      topics: [
        "Mercato AgriTech: dimensioni, segmenti, player, catena del valore, trend",
        "Business model: SaaS, Hardware+Software, FaaS, marketplace, data monetization",
        "Valutazione investimenti: business case, ROI, payback, TCO, rischio tecnologico",
        "Funding: bandi PNRR/PSR/Horizon, credito imposta 4.0, venture capital, pitch",
        "Proprietà intellettuale: brevetti, protezione algoritmi, marchi, licensing",
        "Procurement: vendor selection, RFP/RFI, negoziazione, SLA, exit strategy",
        "Change management: barriere all'innovazione, formazione, quick wins, KPI adoption"
      ]
    },
    {
      id: 8,
      name: "Data Governance, Etica & Cybersecurity",
      fullName: "Data Governance, Etica e Cybersecurity",
      cfu: 4,
      category: "business",
      color: "#7B1FA2",
      icon: "🔐",
      description: "Il modulo affronta gli aspetti critici di governance, sicurezza e responsabilità legati alla digitalizzazione agricola. In un settore dove i dati aziendali diventano sempre più strategici, comprendere chi possiede i dati, come proteggerli e quali sono le implicazioni etiche dell'AI è fondamentale. Gli studenti acquisiscono consapevolezza sui rischi cyber specifici del settore, sugli obblighi normativi (GDPR, AI Act) e sull'importanza degli standard aperti per evitare dipendenze da singoli fornitori.",
      objectives: [
        "Definire policy di data governance e gestire contratti di data sharing",
        "Implementare pratiche di protezione dati conformi al GDPR",
        "Identificare e mitigare i rischi di cybersecurity specifici del settore agricolo",
        "Valutare le implicazioni etiche dell'AI e garantire trasparenza algoritmica",
        "Selezionare soluzioni tecnologiche che rispettino standard aperti e interoperabilità"
      ],
      topics: [
        "Data governance: ownership dati agricoli, contratti, data portability, data cooperative",
        "Privacy e GDPR: dati personali in agricoltura, consenso, data protection by design",
        "Cybersecurity: rischi IoT, OT/IT convergence, ransomware, best practice, disaster recovery",
        "Etica AI: bias algoritmici, trasparenza, explainability, impatto sociale, AI Act",
        "Standard aperti: ISOBUS, ADAPT, AgGateway, Gaia-X, evitare vendor lock-in",
        "Responsabilità: liability DSS e robot, assicurazioni, contratti, limiti"
      ]
    },
    // VERTICALI A SCELTA
    {
      id: 9,
      name: "Viticoltura ed Enologia Digitale",
      fullName: "Viticoltura ed Enologia Digitale",
      cfu: 4,
      category: "vertical",
      color: "#C62828",
      icon: "🍇",
      description: "Il modulo approfondisce l'applicazione delle tecnologie digitali alla filiera vitivinicola, dalla gestione del vigneto alla cantina. La viticoltura rappresenta un settore di eccellenza per l'agricoltura di precisione, dove la variabilità intra-parcellare e l'importanza della qualità giustificano investimenti tecnologici significativi. Gli studenti esplorano soluzioni specifiche per il monitoraggio fitosanitario, la gestione dello stress idrico, la tracciabilità uva-vino e la vinificazione 4.0, attraverso casi studio delle principali cantine italiane innovative.",
      objectives: [
        "Progettare sistemi di monitoraggio specifici per il vigneto",
        "Implementare DSS per la difesa fitosanitaria della vite",
        "Gestire la tracciabilità dalla vigna alla bottiglia con tecnologie blockchain",
        "Valutare soluzioni di automazione per la vinificazione"
      ],
      topics: [
        "Specificità vigneto: variabilità intra-parcellare, annata, terroir digitale",
        "Monitoraggio: sensori pianta (dendrometri, sap flow), meteo, trappole smart",
        "Telerilevamento: mappe vigore, stress idrico, zonazione vendemmia",
        "DSS fitosanitari: modelli peronospora, oidio, tignole",
        "Precision spraying: dose variabile, spot application",
        "Tracciabilità vino: blockchain DOC/DOCG, storytelling digitale",
        "Cantina 4.0: sensori fermentazione, controllo temperatura, qualità real-time"
      ]
    },
    {
      id: 10,
      name: "Zootecnia di Precisione",
      fullName: "Zootecnia di Precisione",
      cfu: 4,
      category: "vertical",
      color: "#D32F2F",
      icon: "🐄",
      description: "Il modulo esplora le tecnologie digitali per la gestione di precisione degli allevamenti. Il Precision Livestock Farming permette il monitoraggio individuale degli animali, la rilevazione precoce di problemi sanitari e l'ottimizzazione dell'alimentazione. Gli studenti apprendono come sensori, AI e automazione possano migliorare benessere animale, efficienza produttiva e sostenibilità degli allevamenti, con focus su bovini da latte e da carne, suini e avicoli.",
      objectives: [
        "Progettare sistemi di monitoraggio individuale per diverse specie",
        "Interpretare dati comportamentali e fisiologici per il rilevamento precoce di patologie",
        "Implementare soluzioni di alimentazione di precisione",
        "Valutare e monitorare indicatori digitali di benessere animale"
      ],
      topics: [
        "Precision Livestock Farming: principi, tecnologie, ROI",
        "Monitoraggio individuale: collari, boli ruminali, tag auricolari, pedometri",
        "AI per allevamento: rilevamento calori, parti, malattie, comportamenti anomali",
        "Benessere animale: indicatori digitali, scoring automatico, compliance normativa",
        "Mungitura robotizzata: sistemi, analisi latte real-time, gestione dati",
        "Alimentazione precisione: dosatori automatici, diete individuali, efficienza alimentare",
        "Tracciabilità: identificazione elettronica, filiera carne e latte"
      ]
    },
    {
      id: 11,
      name: "Vertical Farming & CEA",
      fullName: "Vertical Farming & Controlled Environment Agriculture",
      cfu: 4,
      category: "vertical",
      color: "#E53935",
      icon: "🏭",
      description: "Il modulo approfondisce le tecnologie per la coltivazione in ambiente controllato, dalle serre high-tech alle vertical farm. Questi sistemi rappresentano la frontiera dell'agricoltura digitale, dove ogni parametro ambientale è monitorato e ottimizzato. Gli studenti analizzano tecnologie, economics e sostenibilità di questi modelli produttivi, comprendendo quando e dove hanno senso economico e quali sono le sfide ancora aperte.",
      objectives: [
        "Valutare la fattibilità economica di progetti di vertical farming",
        "Progettare sistemi di controllo ambientale integrati",
        "Ottimizzare ricette di luce e nutrizione per diverse colture",
        "Analizzare la sostenibilità comparata rispetto alla produzione in campo"
      ],
      topics: [
        "Modelli produttivi: serre high-tech, plant factory, container farm, vertical farm",
        "Controllo ambiente: HVAC, gestione CO2, umidità, temperature",
        "Illuminazione: tecnologie LED, spettri, fotoperiodo, ricette luminose",
        "Sistemi colturali: idroponica, aeroponica, acquaponica",
        "Automazione: semina, trapianto, raccolta robotizzata, logistica interna",
        "Sensori e AI: ottimizzazione crescita, predictive maintenance",
        "Economics: costi energia, colture adatte, break-even, business model"
      ]
    },
    {
      id: 12,
      name: "Olivicoltura e Filiere Olio",
      fullName: "Olivicoltura e Filiere Olio",
      cfu: 4,
      category: "vertical",
      color: "#F44336",
      icon: "🫒",
      description: "Il modulo si concentra sulla digitalizzazione della filiera olivicola-olearia, settore strategico per l'Italia. Dalla gestione dell'oliveto con tecniche di precision farming, al monitoraggio della mosca olearia, fino alla tracciabilità dell'olio EVO, gli studenti acquisiscono competenze specifiche per modernizzare questa filiera tradizionale. Il frantoio 4.0, con sensori di processo e controllo qualità real-time, rappresenta l'evoluzione verso produzioni premium certificate e tracciabili.",
      objectives: [
        "Implementare sistemi di monitoraggio e DSS specifici per l'oliveto",
        "Progettare piani di difesa integrata dalla mosca olearia con supporto digitale",
        "Digitalizzare le operazioni di frantoio con sensori e controllo qualità",
        "Certificare e tracciare l'olio EVO con tecnologie blockchain"
      ],
      topics: [
        "Specificità oliveto: gestione chioma, irrigazione deficit, qualità vs quantità",
        "Telerilevamento: mappatura oliveti, vigore, stato idrico",
        "Difesa mosca olearia: trappole smart, modelli previsionali, soglie intervento",
        "Irrigazione: deficit idrico controllato, sensori, DSS specifici",
        "Raccolta: meccanizzazione, tracciamento lotti, tempistiche ottimali",
        "Frantoio 4.0: sensori gramolatura e estrazione, parametri qualità real-time",
        "Blockchain olio: tracciabilità EVO, DOP, anticontraffazione, storytelling"
      ]
    },
    {
      id: 13,
      name: "Ortofrutta e Fresh Logistics",
      fullName: "Ortofrutta e Fresh Logistics",
      cfu: 4,
      category: "vertical",
      color: "#FF5722",
      icon: "🥬",
      description: "Il modulo affronta le sfide specifiche della filiera ortofrutticola, caratterizzata da elevata deperibilità, variabilità qualitativa e complessità logistica. Le tecnologie digitali giocano un ruolo cruciale nella riduzione degli sprechi, nel mantenimento della qualità e nell'ottimizzazione della cold chain. Gli studenti apprendono come sensoristica, AI e piattaforme digitali possano trasformare la gestione del fresco, dalla raccolta allo scaffale.",
      objectives: [
        "Progettare sistemi di monitoraggio qualità pre e post-raccolta",
        "Implementare soluzioni di cold chain management con IoT",
        "Utilizzare modelli predittivi per shelf-life e gestione scorte",
        "Ridurre gli sprechi attraverso logistica predittiva e dynamic pricing"
      ],
      topics: [
        "Specificità ortofrutta: deperibilità, variabilità, stagionalità, requisiti GDO",
        "Sensoristica campo: monitoraggio maturazione, stress, previsione raccolta",
        "Post-raccolta: sorting ottico, grading automatico, sensori qualità non distruttivi",
        "Cold chain: monitoraggio temperatura IoT, data logger, alert real-time",
        "Shelf-life prediction: modelli AI, fattori influenti, gestione dinamica",
        "Logistica predittiva: previsione domanda, ottimizzazione trasporti, food waste reduction",
        "Packaging smart: indicatori TTI, active packaging, comunicazione consumatore"
      ]
    },
    {
      id: 14,
      name: "Cerealicoltura e Grandi Colture",
      fullName: "Cerealicoltura e Grandi Colture",
      cfu: 4,
      category: "vertical",
      color: "#FF7043",
      icon: "🌾",
      description: "Il modulo approfondisce l'agricoltura di precisione applicata alle colture estensive, dove le economie di scala rendono particolarmente interessante l'adozione tecnologica. Dalla creazione e interpretazione delle mappe di resa, all'applicazione variabile di sementi e fertilizzanti, fino al precision spraying, gli studenti acquisiscono competenze per ottimizzare la gestione di cereali e altre grandi colture. Il focus è sull'integrazione di dati multi-fonte per decisioni agronomiche data-driven.",
      objectives: [
        "Elaborare e interpretare mappe di resa per la gestione zonale",
        "Progettare piani di concimazione e semina a rateo variabile",
        "Implementare strategie di precision spraying e spot application",
        "Integrare dati multi-fonte per decisioni agronomiche ottimizzate"
      ],
      topics: [
        "Precision farming estensivo: economie di scala, break-even tecnologico",
        "Mappe di resa: generazione, elaborazione, interpretazione agronomica",
        "VRA semina: mappe prescrizione, densità variabile, population management",
        "VRA concimazione: bilancio azotato, sensori on-the-go, mappe satellitari",
        "Monitoraggio fitosanitario: malattie fungine, modelli previsionali",
        "Precision spraying: spot application erbicidi, see & spray, risparmio input",
        "Qualità raccolta: sensori NIR, proteine, umidità, micotossine",
        "Tracciabilità granella: lotti, filiera mangimistica, certificazioni"
      ]
    },
    {
      id: 15,
      name: "Carbon Farming & Crediti Carbonio",
      fullName: "Carbon Farming & Crediti Carbonio",
      cfu: 4,
      category: "vertical",
      color: "#FF8A65",
      icon: "🌍",
      description: "Il modulo approfondisce il carbon farming come opportunità di business per le aziende agricole. Oltre alla funzione produttiva, l'agricoltura può generare reddito attraverso il sequestro di carbonio e la vendita di crediti certificati. Gli studenti imparano a valutare il potenziale di sequestro, implementare pratiche appropriate, utilizzare piattaforme di certificazione e accedere ai mercati volontari e compliance. Attenzione particolare è dedicata a distinguere opportunità reali da rischi di greenwashing.",
      objectives: [
        "Valutare il potenziale di sequestro carbonio di un'azienda agricola",
        "Selezionare pratiche di carbon farming appropriate al contesto",
        "Navigare i mercati dei crediti carbonio (compliance e volontario)",
        "Implementare sistemi MRV digitali per la certificazione"
      ],
      topics: [
        "Mercati carbonio: compliance (EU ETS) vs volontario, prezzi, trend",
        "Standard certificazione: Verra, Gold Standard, ISO 14064, requisiti",
        "Pratiche sequestro: cover crops, agroforestry, biochar, no-till, pascoli",
        "Quantificazione: modelli di stima, soil organic carbon, misurazioni",
        "MRV digitale: Monitoring, Reporting, Verification con tech",
        "Piattaforme: Agreena, Indigo, South Pole, confronto offerte",
        "Business model: revenue per ettaro, contratti, tempistiche, rischi",
        "Greenwashing: criticità, credibilità, addizionalità, permanenza"
      ]
    },
    {
      id: 16,
      name: "AgriTech Startup & Venture Building",
      fullName: "AgriTech Startup & Venture Building",
      cfu: 4,
      category: "vertical",
      color: "#FFAB91",
      icon: "🚀",
      description: "Il modulo è dedicato a chi intende avviare un'iniziativa imprenditoriale nel settore AgriTech o lavora a stretto contatto con l'ecosistema startup. Dall'ideazione alla validazione, dalla prototipazione al pitch, gli studenti percorrono le fasi iniziali del venture building con metodologie lean. Il modulo include mappatura dell'ecosistema italiano ed europeo, accesso a incubatori e acceleratori, strategie di funding e preparazione al dialogo con investitori.",
      objectives: [
        "Validare un'idea di business AgriTech con metodologie lean",
        "Sviluppare MVP e prototipi per testare il mercato",
        "Preparare pitch efficaci per investitori e programmi di accelerazione",
        "Navigare l'ecosistema di supporto all'imprenditorialità AgriTech"
      ],
      topics: [
        "Ecosistema startup: mappa AgriTech Italia ed Europa, trend, exit",
        "Validazione: customer discovery, problem-solution fit, interviste",
        "MVP: minimum viable product, prototipazione rapida, test di mercato",
        "Business model: canvas, unit economics, scalabilità",
        "Pitch: storytelling, deck efficace, Q&A con investitori",
        "Funding journey: pre-seed, seed, series A, valuation",
        "Acceleratori: programmi AgriTech, application, cosa offrono",
        "Workshop: sviluppo progetto imprenditoriale e pitch finale"
      ]
    },
    // ESPERIENZA PRATICA
    {
      id: 17,
      name: "Hackathon",
      fullName: "Hackathon AgriFood Innovation",
      cfu: 2,
      category: "practice",
      color: "#1565C0",
      icon: "💡",
      description: "L'hackathon è un'esperienza intensiva di innovazione collaborativa dove team multidisciplinari affrontano sfide reali proposte da aziende partner. In 48-72 ore, gli studenti applicano le competenze acquisite per sviluppare soluzioni innovative, passando dall'analisi del problema al concept, dal prototipo al pitch. L'esperienza simula le dinamiche di innovazione aziendale e startup, sviluppando capacità di lavoro in team sotto pressione e di comunicazione efficace.",
      objectives: [
        "Applicare metodologie di design thinking a problemi reali del settore",
        "Lavorare efficacemente in team multidisciplinari sotto pressione temporale",
        "Sviluppare rapidamente concept e prototipi di soluzioni innovative",
        "Presentare idee in modo convincente a una giuria di esperti"
      ],
      topics: [
        "Brief aziendale: sfida reale proposta da aziende partner del Master",
        "Team formation: gruppi multidisciplinari di 4-5 persone",
        "Metodologia: design thinking, ideazione rapida, prototipazione",
        "Mentorship: supporto da docenti e professionisti durante l'evento",
        "Deliverable: concept/prototipo + pitch finale (5 minuti)",
        "Valutazione: giuria mista (accademia + aziende), criteri innovazione-fattibilità-impatto",
        "Follow-up: possibilità sviluppo idee migliori con aziende sponsor"
      ]
    },
    {
      id: 18,
      name: "Project Work",
      fullName: "Project Work Applicativo",
      cfu: 4,
      category: "practice",
      color: "#1976D2",
      icon: "📊",
      description: "Il Project Work è un progetto applicativo su un caso reale, svolto individualmente o in piccolo gruppo, con la supervisione di un tutor accademico e un referente aziendale. Gli studenti affrontano un problema concreto di innovazione digitale in un'azienda del settore, applicando metodologie e strumenti appresi durante il Master. Il progetto sviluppa competenze di analisi, progettazione e comunicazione professionale, producendo deliverable utilizzabili dall'azienda committente.",
      objectives: [
        "Gestire un progetto di innovazione digitale dalla definizione all'implementazione",
        "Applicare metodologie e strumenti del Master a un caso reale",
        "Produrre documentazione tecnica professionale",
        "Comunicare risultati a stakeholder tecnici e manageriali"
      ],
      topics: [
        "Tipologie: implementazione IoT, progetto precision ag, piano tracciabilità, carbon assessment, business plan, analisi dati",
        "Committenti: aziende agricole, cooperative, startup AgriTech, enti ricerca, consorzi",
        "Modalità: individuale o gruppo (2-3 persone), durata 2-3 mesi",
        "Tutoring: tutor accademico + referente aziendale",
        "Deliverable: report tecnico (30-50 pagine) + presentazione + demo/prototipo",
        "Milestone: kick-off, review intermedia, presentazione finale",
        "Valutazione: commissione con tutor accademico e aziendale"
      ]
    },
    {
      id: 19,
      name: "Tirocinio",
      fullName: "Tirocinio Curriculare",
      cfu: 6,
      category: "practice",
      color: "#1E88E5",
      icon: "🏢",
      description: "Il tirocinio offre un'esperienza lavorativa immersiva in un contesto reale di innovazione AgriFood. Gli studenti sono inseriti operativamente in aziende, startup, centri di ricerca o enti del settore, partecipando a progetti concreti e non limitandosi all'osservazione. L'esperienza permette di consolidare competenze, costruire network professionale e spesso rappresenta un canale privilegiato per l'inserimento lavorativo post-Master.",
      objectives: [
        "Applicare competenze del Master in un contesto lavorativo reale",
        "Sviluppare soft skill professionali e capacità di integrazione in team",
        "Costruire network nel settore AgriTech e innovazione agroalimentare",
        "Esplorare possibili sbocchi professionali e settori di specializzazione"
      ],
      topics: [
        "Durata: 300-350 ore (2-3 mesi full-time o 4-5 part-time)",
        "Sedi: startup AgriTech, cooperative innovative, centri ricerca (CREA, CNR), acceleratori, aziende agricole tech-advanced, consulenza AgriFood",
        "Attività: partecipazione operativa a progetti, non solo osservazione",
        "Supervisione: tutor aziendale + tutor accademico",
        "Matching: supporto del Master per abbinamento studente-azienda",
        "Network: convenzioni con aziende partner, database opportunità",
        "Deliverable: relazione finale + valutazione tutor aziendale"
      ]
    }
  ],

  benchmarkMasters: [
    { id: 1, name: "AGRITECH EU", institution: "Università di Pisa", country: "Italia", flag: "🇮🇹", cfu: 60, language: "EN", focus: "Tecnologie digitali, IoT, AI, Blockchain, Etica" },
    { id: 2, name: "Agricultural Engineering MSc", institution: "Politecnico di Milano", country: "Italia", flag: "🇮🇹", cfu: 120, language: "EN", focus: "Data Analysis, Control Systems, Supply Chain" },
    { id: 3, name: "Food Engineering MSc", institution: "Politecnico di Milano", country: "Italia", flag: "🇮🇹", cfu: 120, language: "EN", focus: "Food Industry Lab, Trends, Innovation" },
    { id: 4, name: "AI & Data Analysis Agroalimentare", institution: "Talent Garden", country: "Italia", flag: "🇮🇹", cfu: null, language: "IT", focus: "Data Landscape, Smart Capture, Hackathon" },
    { id: 5, name: "AgriFood Sustainability & Technology", institution: "NUI Galway", country: "Irlanda", flag: "🇮🇪", cfu: 90, language: "EN", focus: "AgriBusiness, IP, Entrepreneurship, Data Analysis" },
    { id: 6, name: "Smart Agriculture MSc", institution: "Nottingham Trent University", country: "UK", flag: "🇬🇧", cfu: 180, language: "EN", focus: "Smart Farming, Vertical Farming, Sustainability" },
    { id: 7, name: "Agricultural Technology MSc", institution: "Royal Agricultural Univ.", country: "UK", flag: "🇬🇧", cfu: 180, language: "EN", focus: "Computing, Precision Ag, Entrepreneurship" },
    { id: 8, name: "Data Science for Agri-Food", institution: "Harper Adams University", country: "UK", flag: "🇬🇧", cfu: 180, language: "EN", focus: "ML/AI, GIS, Data Visualization" },
    { id: 9, name: "Data Science Food & Health", institution: "Wageningen University", country: "Olanda", flag: "🇳🇱", cfu: 120, language: "EN", focus: "Data Science Ethics, Statistics, Integration" },
    { id: 10, name: "Agricultura Digital", institution: "Universidad de Sevilla", country: "Spagna", flag: "🇪🇸", cfu: 60, language: "ES", focus: "Geomatica, Droni, Robotica, DSS, Innovación" }
  ]
};

// Configurazione categorie
const categories = [
  {
    id: "foundation",
    label: "Fondamenti",
    color: "#00695C",
    bg: "#E0F2F1",
    icon: "🎯",
    description: "Contesto, sfide, policy e panoramica delle tecnologie digitali",
    totalCFU: 8
  },
  {
    id: "applied",
    label: "Moduli Applicativi",
    color: "#EF6C00",
    bg: "#FFF3E0",
    icon: "🌍",
    description: "Precision Ag, Smart Farming, Tracciabilità, Sostenibilità",
    totalCFU: 24
  },
  {
    id: "business",
    label: "Business & Governance",
    color: "#6A1B9A",
    bg: "#F3E5F5",
    icon: "💼",
    description: "Modelli di business, imprenditorialità, data governance, etica",
    totalCFU: 8
  },
  {
    id: "vertical",
    label: "Verticali a Scelta",
    color: "#C62828",
    bg: "#FFEBEE",
    icon: "🎛️",
    description: "Specializzazioni su filiere specifiche (2 moduli a scelta su 8)",
    totalCFU: 8
  },
  {
    id: "practice",
    label: "Esperienza Pratica",
    color: "#1565C0",
    bg: "#E3F2FD",
    icon: "🚀",
    description: "Hackathon, Project Work e Tirocinio",
    totalCFU: 12
  }
];

// Helper per raggruppare moduli per categoria
const getModulesByCategory = () => {
  return categories.map(cat => ({
    ...cat,
    modules: masterData.modules.filter(m => m.category === cat.id)
  }));
};

export default function MasterDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedModule, setSelectedModule] = useState(null);

  const modulesByCategory = getModulesByCategory();

  return (
    <div className="min-h-screen bg-slate-50">

      {/* HEADER */}
      <header className="bg-gradient-to-br from-teal-800 via-teal-700 to-teal-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
            <span className="bg-orange-500 text-white text-xs font-bold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full uppercase tracking-wide">
              {masterData.level}
            </span>
            <span className="bg-white/20 text-white/90 text-xs px-2 sm:px-3 py-1 rounded-full">
              Proposta Partnership 2026
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold mb-2">{masterData.title}</h1>
          <p className="text-teal-100 text-base sm:text-lg max-w-2xl">{masterData.subtitle}</p>

          {/* KPI Header */}
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 sm:gap-10 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/20">
            <div>
              <div className="text-2xl sm:text-4xl font-bold">{masterData.totalCFU}</div>
              <div className="text-teal-200 text-xs sm:text-sm">CFU Totali</div>
            </div>
            <div>
              <div className="text-2xl sm:text-4xl font-bold">{masterData.modules.length}</div>
              <div className="text-teal-200 text-xs sm:text-sm">Moduli</div>
            </div>
            <div>
              <div className="text-2xl sm:text-4xl font-bold">{categories.length}</div>
              <div className="text-teal-200 text-xs sm:text-sm">Categorie</div>
            </div>
            <div>
              <div className="text-2xl sm:text-4xl font-bold">12</div>
              <div className="text-teal-200 text-xs sm:text-sm">Mesi</div>
            </div>
            <div>
              <div className="text-2xl sm:text-4xl font-bold text-orange-400">100%</div>
              <div className="text-teal-200 text-xs sm:text-sm">Focus Digitale</div>
            </div>
          </div>
        </div>
      </header>

      {/* NAVIGATION */}
      <nav className="bg-white border-b shadow-sm sticky top-0 z-20 overflow-x-auto">
        <div className="max-w-6xl mx-auto px-2 sm:px-6">
          <div className="flex">
            {[
              { id: 'overview', label: 'Overview', icon: '📌', desc: 'Vista alto livello' },
              { id: 'modules', label: 'Moduli', icon: '📚', desc: 'Per categoria' },
              { id: 'detail', label: 'Dettaglio', icon: '🔍', desc: 'Singolo modulo' },
              { id: 'benchmark', label: 'Benchmark', icon: '🎓', desc: 'Master di riferimento' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => { setActiveTab(tab.id); if(tab.id !== 'detail') setSelectedModule(null); }}
                className={`px-2 sm:px-5 py-2 sm:py-4 text-xs sm:text-sm font-medium border-b-2 transition-all flex-1 sm:flex-none ${
                  activeTab === tab.id
                    ? 'border-teal-600 text-teal-700 bg-teal-50'
                    : 'border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50'
                }`}
              >
                <div className="flex flex-col sm:flex-row items-center sm:gap-1">
                  <span className="text-base sm:text-sm">{tab.icon}</span>
                  <span>{tab.label}</span>
                </div>
                <div className="text-xs font-normal text-slate-400 hidden sm:block">{tab.desc}</div>
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">

        {/* ==================== TAB: OVERVIEW ==================== */}
        {activeTab === 'overview' && (
          <div className="space-y-6 sm:space-y-8">

            {/* Value Proposition */}
            <section className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl p-5 sm:p-8 text-white">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">🎯 Perché questo Master?</h2>
              <p className="text-base sm:text-lg text-teal-50 leading-relaxed mb-4 sm:mb-6">
                Un percorso formativo <strong>100% focalizzato sulle tecnologie digitali</strong> per l'agroalimentare.
                Progettato per professionisti del settore agricolo e alimentare che vogliono guidare la trasformazione digitale,
                non per diventare sviluppatori ma per <strong>comprendere, valutare e implementare</strong> soluzioni innovative.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="text-2xl sm:text-3xl mb-2">🎓</div>
                  <div className="font-semibold text-sm sm:text-base">Benchmark Internazionale</div>
                  <div className="text-teal-200 text-xs sm:text-sm">10 Master EU analizzati</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="text-2xl sm:text-3xl mb-2">💻</div>
                  <div className="font-semibold text-sm sm:text-base">Application-First</div>
                  <div className="text-teal-200 text-xs sm:text-sm">Tecnologie nel contesto d'uso</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="text-2xl sm:text-3xl mb-2">🚀</div>
                  <div className="font-semibold text-sm sm:text-base">Learning by Doing</div>
                  <div className="text-teal-200 text-xs sm:text-sm">Hackathon, Project Work, Tirocinio</div>
                </div>
              </div>
            </section>

            {/* Distribuzione CFU per Categoria */}
            <section className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm">
              <h2 className="text-lg sm:text-xl font-bold text-slate-800 mb-4 sm:mb-6">📊 Distribuzione CFU per Categoria</h2>
              <div className="grid grid-cols-5 gap-2 sm:gap-6 px-0 sm:px-4" style={{ minHeight: '200px' }}>
                {categories.map(cat => (
                  <div key={cat.id} className="flex flex-col items-center justify-end h-full">
                    <div className="text-sm sm:text-xl font-bold text-slate-700 mb-1 sm:mb-2">{cat.totalCFU}</div>
                    <div
                      className="w-full rounded-t-lg sm:rounded-t-xl transition-all hover:opacity-80 cursor-pointer"
                      style={{
                        height: `${(cat.totalCFU / 24) * 80}px`,
                        backgroundColor: cat.color,
                        minHeight: '20px'
                      }}
                      onClick={() => setActiveTab('modules')}
                    />
                    <div className="mt-2 sm:mt-3 text-center">
                      <div className="text-base sm:text-lg">{cat.icon}</div>
                      <div className="text-[10px] sm:text-xs font-semibold mt-1 leading-tight" style={{ color: cat.color }}>{cat.label}</div>
                      <div className="text-[10px] sm:text-xs text-slate-400 hidden sm:block">
                        {cat.id === 'vertical' ? '2 su 8' : `${modulesByCategory.find(c => c.id === cat.id)?.modules.length} moduli`}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Struttura del Percorso */}
            <section>
              <h2 className="text-lg sm:text-xl font-bold text-slate-800 mb-4">📚 Struttura del Percorso</h2>
              <div className="space-y-4">
                {modulesByCategory.map(cat => (
                  <div
                    key={cat.id}
                    className="bg-white rounded-xl p-4 sm:p-5 shadow-sm border-l-4"
                    style={{ borderLeftColor: cat.color }}
                  >
                    <div className="flex items-center gap-3 sm:gap-4 mb-4">
                      <div
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-xl sm:text-2xl flex-shrink-0"
                        style={{ backgroundColor: cat.bg }}
                      >
                        {cat.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-slate-800 text-base sm:text-lg">{cat.label}</h3>
                        <p className="text-xs sm:text-sm text-slate-500 hidden sm:block">{cat.description}</p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <span className="text-xl sm:text-2xl font-bold" style={{ color: cat.color }}>{cat.totalCFU}</span>
                        <span className="text-xs sm:text-sm text-slate-400 ml-1">CFU</span>
                      </div>
                    </div>
                    <div className={`grid gap-2 grid-cols-1 ${cat.id === 'vertical' ? 'sm:grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-2'}`}>
                      {cat.modules.map(mod => (
                        <button
                          key={mod.id}
                          onClick={() => { setSelectedModule(mod); setActiveTab('detail'); }}
                          className="text-left flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg hover:bg-slate-50 transition-colors group border border-slate-100"
                        >
                          <span className="text-base sm:text-lg">{mod.icon}</span>
                          <span className="flex-1 text-xs sm:text-sm text-slate-700 group-hover:text-teal-700 font-medium truncate">{mod.name}</span>
                          <span className="text-xs font-semibold px-2 py-1 rounded" style={{ backgroundColor: cat.bg, color: cat.color }}>{mod.cfu}</span>
                        </button>
                      ))}
                    </div>
                    {cat.id === 'vertical' && (
                      <p className="text-xs text-slate-400 mt-3 italic">* Lo studente sceglie 2 moduli su 8 disponibili</p>
                    )}
                  </div>
                ))}
              </div>
            </section>

          </div>
        )}

        {/* ==================== TAB: MODULES ==================== */}
        {activeTab === 'modules' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
              <h2 className="text-lg sm:text-xl font-bold text-slate-800">📚 Moduli per Categoria</h2>
              <div className="text-xs sm:text-sm text-slate-500">
                Clicca su un modulo per vedere il dettaglio completo
              </div>
            </div>

            {modulesByCategory.map(cat => (
              <section key={cat.id} className="space-y-3">
                {/* Header Categoria */}
                <div
                  className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl"
                  style={{ backgroundColor: cat.bg }}
                >
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center text-2xl sm:text-3xl bg-white shadow-sm flex-shrink-0">
                    {cat.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-xl font-bold" style={{ color: cat.color }}>{cat.label}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 hidden sm:block">{cat.description}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-2xl sm:text-3xl font-bold" style={{ color: cat.color }}>{cat.totalCFU}</div>
                    <div className="text-xs text-slate-500">CFU</div>
                  </div>
                </div>

                {/* Moduli della categoria */}
                <div className="grid grid-cols-1 gap-3 pl-0 sm:pl-4">
                  {cat.modules.map(mod => (
                    <button
                      key={mod.id}
                      onClick={() => { setSelectedModule(mod); setActiveTab('detail'); }}
                      className="w-full text-left bg-white rounded-xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-all border-l-4 group"
                      style={{ borderLeftColor: mod.color }}
                    >
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-lg sm:text-xl flex-shrink-0"
                          style={{ backgroundColor: cat.bg }}
                        >
                          {mod.icon}
                        </div>

                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-slate-800 text-base sm:text-lg group-hover:text-teal-700 transition-colors">
                            {mod.name}
                          </h4>
                          <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 mt-1 hidden sm:block">{mod.description.substring(0, 150)}...</p>
                          <div className="flex items-center gap-3 sm:gap-4 mt-2 text-xs text-slate-400">
                            <span>🎯 {mod.objectives.length} obiettivi</span>
                            <span>📝 {mod.topics.length} argomenti</span>
                          </div>
                        </div>

                        <div className="text-right flex-shrink-0">
                          <div className="text-xl sm:text-2xl font-bold" style={{ color: mod.color }}>{mod.cfu}</div>
                          <div className="text-xs text-slate-400">CFU</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                {cat.id === 'vertical' && (
                  <p className="text-xs sm:text-sm text-slate-500 pl-0 sm:pl-4 italic">* Lo studente sceglie 2 moduli da 4 CFU su 8 disponibili per un totale di 8 CFU</p>
                )}
              </section>
            ))}
          </div>
        )}

        {/* ==================== TAB: DETAIL ==================== */}
        {activeTab === 'detail' && (
          <div className="flex flex-col lg:grid lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Sidebar lista - collapsible on mobile */}
            <div className={`space-y-3 lg:max-h-screen lg:overflow-y-auto lg:sticky lg:top-24 pr-0 lg:pr-2 ${selectedModule ? 'hidden lg:block' : 'block'}`}>
              <h3 className="font-semibold text-slate-600 text-sm px-2">Seleziona Modulo</h3>
              {modulesByCategory.map(cat => (
                <div key={cat.id}>
                  <div
                    className="flex items-center gap-2 text-xs font-bold px-2 py-1.5 rounded mb-1"
                    style={{ color: cat.color, backgroundColor: cat.bg }}
                  >
                    {cat.icon} {cat.label}
                  </div>
                  {cat.modules.map(mod => (
                    <button
                      key={mod.id}
                      onClick={() => setSelectedModule(mod)}
                      className={`w-full text-left p-2 rounded-lg transition-all flex items-center gap-2 text-sm mb-1 ${
                        selectedModule?.id === mod.id
                          ? 'bg-teal-50 ring-2 ring-teal-500'
                          : 'hover:bg-slate-50'
                      }`}
                    >
                      <span>{mod.icon}</span>
                      <span className="flex-1 truncate text-slate-700 text-xs">{mod.name}</span>
                      <span className="text-xs font-semibold" style={{ color: mod.color }}>{mod.cfu}</span>
                    </button>
                  ))}
                </div>
              ))}
            </div>

            {/* Dettaglio */}
            <div className="lg:col-span-3">
              {selectedModule ? (
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                  {/* Back button for mobile */}
                  <button
                    onClick={() => setSelectedModule(null)}
                    className="lg:hidden w-full p-3 bg-slate-100 text-slate-600 text-sm font-medium flex items-center gap-2"
                  >
                    ← Torna alla lista moduli
                  </button>
                  {/* Header */}
                  <div
                    className="p-4 sm:p-6 text-white"
                    style={{ background: `linear-gradient(135deg, ${selectedModule.color} 0%, ${selectedModule.color}cc 100%)` }}
                  >
                    <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-xl flex items-center justify-center text-2xl sm:text-3xl flex-shrink-0">
                        {selectedModule.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="bg-white/20 text-xs font-bold px-2 py-0.5 rounded uppercase">
                            {categories.find(c => c.id === selectedModule.category)?.label}
                          </span>
                        </div>
                        <h2 className="text-lg sm:text-2xl font-bold">{selectedModule.fullName}</h2>
                      </div>
                      <div className="text-left sm:text-right flex-shrink-0 flex sm:block items-center gap-2">
                        <div className="text-2xl sm:text-4xl font-bold">{selectedModule.cfu}</div>
                        <div className="text-white/70 text-sm">CFU</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 sm:p-6 space-y-5 sm:space-y-6">
                    {/* Descrizione */}
                    <div>
                      <h3 className="font-bold text-slate-800 mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base">
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: selectedModule.color }}></span>
                        Descrizione
                      </h3>
                      <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{selectedModule.description}</p>
                    </div>

                    {/* Obiettivi Formativi */}
                    <div>
                      <h3 className="font-bold text-slate-800 mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base">
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: selectedModule.color }}></span>
                        Obiettivi Formativi
                      </h3>
                      <div className="space-y-2">
                        {selectedModule.objectives.map((obj, i) => (
                          <div key={i} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-slate-600 bg-slate-50 rounded-lg p-2 sm:p-3">
                            <span
                              className="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                              style={{ backgroundColor: selectedModule.color }}
                            >
                              {i + 1}
                            </span>
                            {obj}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Argomenti Principali */}
                    <div>
                      <h3 className="font-bold text-slate-800 mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base">
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: selectedModule.color }}></span>
                        Argomenti Principali
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {selectedModule.topics.map((topic, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 bg-slate-50 rounded-lg p-2 sm:p-3">
                            <span style={{ color: selectedModule.color }}>•</span>
                            <span>{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-slate-100 rounded-2xl p-8 sm:p-12 text-center text-slate-400 min-h-64 sm:h-96 flex flex-col items-center justify-center">
                  <div className="text-4xl sm:text-6xl mb-4">👆</div>
                  <p className="text-base sm:text-lg">Seleziona un modulo dalla lista</p>
                  <p className="text-xs sm:text-sm">per visualizzare descrizione, obiettivi e argomenti</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ==================== TAB: BENCHMARK ==================== */}
        {activeTab === 'benchmark' && (
          <div className="space-y-6 sm:space-y-8">
            <section>
              <h2 className="text-lg sm:text-xl font-bold text-slate-800 mb-2">🎓 Master Internazionali di Riferimento</h2>
              <p className="text-slate-500 text-sm sm:text-base mb-4 sm:mb-6">
                La struttura del programma è stata definita analizzando questi {masterData.benchmarkMasters.length} Master europei
                nel settore AgriTech, Digital Agriculture e Data Science applicata.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {masterData.benchmarkMasters.map(master => (
                  <div key={master.id} className="bg-white rounded-xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <span className="text-2xl sm:text-3xl">{master.flag}</span>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-slate-800 text-sm sm:text-base">{master.name}</h3>
                        <p className="text-xs sm:text-sm text-slate-500">{master.institution}</p>
                        <p className="text-xs sm:text-sm text-teal-600 mt-2">{master.focus}</p>
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-2 sm:mt-3 text-xs text-slate-400">
                          {master.cfu && <span>{master.cfu} CFU/ECTS</span>}
                          <span className="bg-slate-100 px-2 py-0.5 rounded">{master.language}</span>
                          <span>{master.country}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Differenziazione */}
            <section className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl p-5 sm:p-8 text-white">
              <h3 className="text-lg sm:text-xl font-bold mb-4">🎯 Il Nostro Posizionamento</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <h4 className="font-semibold mb-2 text-sm sm:text-base">✅ Per chi è pensato</h4>
                  <ul className="space-y-1 text-teal-100 text-xs sm:text-sm">
                    <li>• Professionisti del settore agroalimentare</li>
                    <li>• Manager di cooperative e consorzi</li>
                    <li>• Consulenti e tecnici agricoli</li>
                    <li>• Imprenditori agricoli e startup founder</li>
                    <li>• Funzionari di enti e associazioni</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-sm sm:text-base">❌ Cosa NON è</h4>
                  <ul className="space-y-1 text-teal-100 text-xs sm:text-sm">
                    <li>• Un corso di programmazione o sviluppo software</li>
                    <li>• Un master in agronomia o zootecnia</li>
                    <li>• Un percorso di food engineering tradizionale</li>
                    <li>• Una formazione per data scientist puri</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        )}

      </main>

      {/* FOOTER */}
      <footer className="bg-slate-800 text-white py-4 sm:py-6 mt-8 sm:mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
          <div className="text-center sm:text-left">
            <div className="font-bold text-sm sm:text-base">Master Digital Technologies per l'Agri-Food</div>
            <div className="text-slate-400 text-xs sm:text-sm">Proposta di Partnership · 2026</div>
          </div>
          <div className="text-center sm:text-right text-xs sm:text-sm text-slate-400">
            <div>{masterData.totalCFU} CFU · {masterData.modules.length} Moduli · {masterData.duration}</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
