// Define the graph as an adjacency matrix
  function dijkstra( start, end) {

    // const graph ={
    //   Reception: { Parking_Lot_1: 0.06688139614511153, Gate5: 0.09608374531999625 },
    //   Parking_Lot_1: {
    //     Reception: 0.06688139614511153,
    //     Guru_Paduka_Vanam: 0.01888938830928675
    //   },
    //   Guru_Paduka_Vanam: {
    //     Parking_Lot_1: 0.01888938830928675,
    //     T_point: 0.19738856034012192,
    //     T_point48: 0.13392149112167928
    //   },
    //   T_point: {
    //     Guru_Paduka_Vanam: 0.19738856034012192,
    //     Divine_Services: 0.029428286704118678,
    //     Vishala_Cafe: 0.05984240191039364
    //   },
    //   Divine_Services: { T_point: 0.029428286704118678, Madhurya: 0.028676508849682827 },
    //   Madhurya: {
    //     Divine_Services: 0.028676508849682827,
    //     T_point47: 0.024408013736858632
    //   },
    //   Vishala_Cafe: { T_point: 0.05984240191039364, SBI_V: 0.0029603966948303657 },
    //   T_point47: {
    //     Madhurya: 0.024408013736858632,
    //     Nadi_Pariksha_Center: 0.05340993262262558,
    //     T_point2: 0.027108780540572842
    //   },
    //   Nadi_Pariksha_Center: {
    //     T_point47: 0.05340993262262558,
    //     Sumeru_Travels: 0.07249330966138175
    //   },
    //   Sumeru_Travels: { Nadi_Pariksha_Center: 0.07249330966138175 },
    //   T_point2: {
    //     T_point47: 0.027108780540572842,
    //     T_point24: 0.05281366773473582,
    //     Meditation_Hall: 0.01752615665340416,
    //     Vishalakshi_Mantap_back_side: 0.08126401426703553
    //   },
    //   T_point24: {
    //     T_point2: 0.05281366773473582,
    //     Vishalakshi_Mantap_front_side: 0.010595148069011961,
    //     Gauri_Hall: 0.038297919138243354,
    //     Information_Center: 0.014858433201571467
    //   },
    //   Meditation_Hall: { T_point2: 0.01752615665340416, Juice_Center: 0.005412646995430272 },
    //   Juice_Center: { Meditation_Hall: 0.005412646995430272 },
    //   Vishalakshi_Mantap_front_side: {
    //     T_point24: 0.010595148069011961,
    //     Vishalakshi_Mantap_GF: 0.03554404761950243,
    //     Amphitheatre: 0.004752802272029777,
    //     T_point36: 0.029663024945436427
    //   },
    //   Gauri_Hall: {
    //     T_point24: 0.038297919138243354,
    //     Shankra_Hall: 0.03915543937186585
    //   },
    //   Shankra_Hall: {
    //     Gauri_Hall: 0.03915543937186585,
    //     Ganesha_Hall: 0.02596348465167393
    //   },
    //   Vishalakshi_Mantap_GF: {
    //     Vishalakshi_Mantap_front_side: 0.03554404761950243,
    //     Mahavir_Hall: 0.08247626707887859
    //   },
    //   Mahavir_Hall: {
    //     Vishalakshi_Mantap_GF: 0.08247626707887859,
    //     Buddha_Hall: 0.010690369622736699
    //   },
    //   Buddha_Hall: { Mahavir_Hall: 0.010690369622736699 },
    //   Amphitheatre: { Vishalakshi_Mantap_front_side: 0.004752802272029777 },
    //   Vishalakshi_Mantap_back_side: {
    //     T_point2: 0.08126401426703553,
    //     Laundary: 0.20815395856765823,
    //     T_point5: 0.02376002962782705
    //   },
    //   Laundary: {
    //     Vishalakshi_Mantap_back_side: 0.20815395856765823,
    //     T_point8: 0.049067398566341514
    //   },
    //   T_point8: {
    //     Laundary: 0.049067398566341514,
    //     Gate3: 0.009129706469401668,
    //     T_point4: 0.10415050524608639,
    //     T_point16: 0.03404401120217734
    //   },
    //   Gate3: {
    //     T_point8: 0.009129706469401668,
    //     Annapoorna: 0.007985320418537879,
    //     Aparna_Gate: 0.024716701518559453,
    //     T_point9: 0.10729878011408982
    //   },
    //   Annapoorna: {
    //     Gate3: 0.007985320418537879,
    //     T_point9: 0.08986982574179804,
    //     Annapoorna_Hall: 0.012188352883448978,
    //     Swadishthan: 0.023332800441639774
    //   },
    //   Aparna_Gate: {
    //     Gate3: 0.024716701518559453,
    //     Padmini_Gate: 0.15682913504785656,
    //     T_point15: 0.09330525651147974
    //   },
    //   T_point36: {
    //     Vishalakshi_Mantap_front_side: 0.029663024945436427,
    //     T_point4: 0.023367152519453975,
    //     Secretariat: 0.008240758136142482
    //   },
    //   T_point4: {
    //     T_point36: 0.023367152519453975,
    //     T_point8: 0.10415050524608639,
    //     T_point35: 0.007572792341833549,
    //     T_point34: 0.02086085780941998,
    //     Annapoorna_FirstFloor: 0.14083270678442739
    //   },
    //   Secretariat: { T_point36: 0.008240758136142482 },
    //   T_point5: {
    //     Vishalakshi_Mantap_back_side: 0.02376002962782705,
    //     Gate4: 0.028067288721693392,
    //     Yagnashala_Accomodation: 0.07291934419572176
    //   },
    //   Gate4: {
    //     T_point5: 0.028067288721693392,
    //     T_point7: 0.10626921567021187,
    //     T_point15: 0.09935650523348338
    //   },
    //   T_point7: {
    //     Gate4: 0.10626921567021187,
    //     Maitreyi_Hall: 0.007340950623662456,
    //     Baswa_Bunglow_5: 0.13639242852496525,
    //     T_point46: 0.1071130118608085
    //   },
    //   Maitreyi_Hall: { T_point7: 0.007340950623662456 },
    //   T_point9: {
    //     Gate3: 0.10729878011408982,
    //     Annapoorna: 0.08986982574179804,
    //     Padmini_Gate: 0.10758516875438452,
    //     T_point18: 0.13458468176415844
    //   },
    //   Padmini_Gate: {
    //     T_point9: 0.10758516875438452,
    //     Aparna_Gate: 0.15682913504785656,
    //     Swadishthan: 0.11569996961601889
    //   },
    //   T_point10: {
    //     Jamini_Hall: 0.0051448495243208185,
    //     Tripura_Hall: 0.029406382820192326,
    //     T_point11: 0.034202808516029096,
    //     T_point46: 0.006709517504515269
    //   },
    //   Jamini_Hall: { T_point10: 0.0051448495243208185 },
    //   Tripura_Hall: {
    //     T_point10: 0.029406382820192326,
    //     Baswa_Accomodation: 0.09375403656231604
    //   },
    //   Baswa_Accomodation: {
    //     Tripura_Hall: 0.09375403656231604,
    //     Baswa_Accomodation_C: 0.10000277556525103
    //   },
    //   T_point11: {
    //     T_point10: 0.034202808516029096,
    //     T_point12: 0.03880897002724771,
    //     Anugraha_Mantap: 0.04192947739173982
    //   },
    //   T_point12: {
    //     T_point11: 0.03880897002724771,
    //     Shat_Kriya_Hall: 0.03092754186324135,
    //     Vivasvan_Yogshala: 0.013485854424865516
    //   },
    //   Shat_Kriya_Hall: { T_point12: 0.03092754186324135 },
    //   Vivasvan_Yogshala: {
    //     T_point12: 0.013485854424865516,
    //     Kapila_Hall: 0.026902277776222693
    //   },
    //   Kapila_Hall: { Vivasvan_Yogshala: 0.026902277776222693 },
    //   Anugraha_Mantap: { T_point11: 0.04192947739173982, Shiva_Temple: 0.04433107402674364 },
    //   Shiva_Temple: { Anugraha_Mantap: 0.04433107402674364 },
    //   SBI_V: {
    //     Vishala_Cafe: 0.0029603966948303657,
    //     T_point13: 0.02455220494928629
    //   },
    //   T_point13: {
    //     SBI_V: 0.02455220494928629,
    //     Vishala_Men_Dormitory: 0.024526593737659773,
    //     Female_Dormitory_Yogini: 0.09873298463302542
    //   },
    //   Vishala_Men_Dormitory: {
    //     T_point13: 0.024526593737659773,
    //     Saraswati_Hall_C: 0.06710500208509736
    //   },
    //   Female_Dormitory_Yogini: { T_point13: 0.09873298463302542 },
    //   Saraswati_Hall_C: {
    //     Vishala_Men_Dormitory: 0.06710500208509736,
    //     T_point14: 0.08648278694774965
    //   },
    //   T_point14: {
    //     Saraswati_Hall_C: 0.08648278694774965,
    //     Saraswati_Hall_A: 0.01491421949415876,
    //     T_point35: 0.06267828950470225,
    //     T_point33: 0.024895836551893213
    //   },
    //   Saraswati_Hall_A: { T_point14: 0.01491421949415876 },
    //   T_point35: {
    //     T_point14: 0.06267828950470225,
    //     Vaibhavi: 0.006505394435873755,
    //     T_point4: 0.007572792341833549
    //   },
    //   Vaibhavi: { T_point35: 0.006505394435873755 },
    //   T_point33: {
    //     T_point14: 0.024895836551893213,
    //     Shuka_Hall: 0.0035432825144588696,
    //     Badri_Vishala: 0.020696718371787156
    //   },
    //   Shuka_Hall: { T_point33: 0.0035432825144588696 },
    //   Badri_Vishala: { T_point33: 0.020696718371787156, T_point34: 0.02246702584730841 },
    //   T_point34: {
    //     Badri_Vishala: 0.02246702584730841,
    //     T_point4: 0.02086085780941998,
    //     Ganga_Kutir: 0.0572821752069632
    //   },
    //   T_point15: {
    //     Gate4: 0.09935650523348338,
    //     Aparna_Gate: 0.09330525651147974,
    //     Panchkarma_Gate: 0.015985424767168934,
    //     T_point27: 0.08360146550275059
    //   },
    //   Panchkarma_Gate: { T_point15: 0.015985424767168934, T_point25: 0.08914394545662468 },
    //   T_point25: {
    //     Panchkarma_Gate: 0.08914394545662468,
    //     Meera_Vanam: 0.11965699635481646,
    //     Gopi: 0.3979213154108802
    //   },
    //   Meera_Vanam: { T_point25: 0.11965699635481646 },
    //   Gopi: { T_point25: 0.3979213154108802, T_point26: 0.11868343951060259 },
    //   T_point26: {
    //     Gopi: 0.11868343951060259,
    //     Gokul: 0.018059828625911743,
    //     Gurukul: 0.5546588312579156
    //   },
    //   Gokul: { T_point26: 0.018059828625911743 },
    //   Gurukul: {
    //     T_point26: 0.5546588312579156,
    //     T_point40: 0.015400576645593016,
    //     Gurukul_Cottages: 0.08519629187068486
    //   },
    //   T_point40: {
    //     Gurukul: 0.015400576645593016,
    //     Ganpati_Temple: 0.01664022209015441,
    //     Veda_Bhavanam: 0.044358396951976686,
    //     T_point43: 0.029031732602704884
    //   },
    //   Ganpati_Temple: { T_point40: 0.01664022209015441 },
    //   Veda_Bhavanam: { T_point40: 0.044358396951976686, T_point41: 0.021122767167498745 },
    //   T_point41: {
    //     Veda_Bhavanam: 0.021122767167498745,
    //     Vaidic_Bhavanam: 0.017645132593689487,
    //     Archana: 0.028672888577339736
    //   },
    //   Vaidic_Bhavanam: { T_point41: 0.017645132593689487 },
    //   Archana: { T_point41: 0.028672888577339736, Devi_Hall: 0.026589636967904208 },
    //   Devi_Hall: { Archana: 0.026589636967904208, T_point42: 0.039968277903575045 },
    //   T_point42: {
    //     Devi_Hall: 0.039968277903575045,
    //     Gurukul_Yagnashala: 0.04817821288606407,
    //     Markandeya: 0.014781775856960874,
    //     T_point45: 0.5028863517743843
    //   },
    //   T_point43: {
    //     T_point40: 0.029031732602704884,
    //     T_point44: 0.014338003761624555,
    //     Nakshatra_Vanam: 0.049968575176899135
    //   },
    //   T_point44: {
    //     T_point43: 0.014338003761624555,
    //     Gurukul_Yagnashala: 0.010655265372974836,
    //     Gurukul_Prayogshala: 0.049324895842770534
    //   },
    //   Nakshatra_Vanam: { T_point43: 0.049968575176899135 },
    //   Gurukul_Yagnashala: { T_point44: 0.010655265372974836, T_point42: 0.04817821288606407 },
    //   Gurukul_Prayogshala: { T_point44: 0.049324895842770534 },
    //   Markandeya: { T_point42: 0.014781775856960874 },
    //   T_point45: {
    //     T_point42: 0.5028863517743843,
    //     Gaushala: 0.011589385780458789,
    //     A2_Milk_Cafe: 0.009618470405952397
    //   },
    //   Gaushala: { T_point45: 0.011589385780458789 },
    //   A2_Milk_Cafe: { T_point45: 0.009618470405952397 },
    //   Gurukul_Cottages: {
    //     Gurukul: 0.08519629187068486,
    //     Radha_Kunj_Gate2: 0.04177631612301152
    //   },
    //   Radha_Kunj_Gate2: {
    //     Gurukul_Cottages: 0.04177631612301152,
    //     T_point39: 0.004062844927893518
    //   },
    //   T_point39: {
    //     Hathishala: 0.006776359786453067,
    //     Radha_Kunj_Gate2: 0.004062844927893518,
    //     T_point38: 0.03593052858661679
    //   },
    //   Hathishala: { T_point39: 0.006776359786453067 },
    //   T_point38: {
    //     T_point39: 0.03593052858661679,
    //     Mantap_Radha_Kunj: 0.01914692824473519,
    //     Radha_Kunj_ConferenceHall: 0.009136435721508053,
    //     Krishna_Hall: 0.11521949251950216
    //   },
    //   Mantap_Radha_Kunj: { T_point38: 0.01914692824473519 },
    //   Radha_Kunj_ConferenceHall: { T_point38: 0.009136435721508053 },
    //   Krishna_Hall: {
    //     T_point38: 0.11521949251950216,
    //     Radha_Kunj_Gate1: 0.06189356132897417
    //   },
    //   Radha_Kunj_Gate1: { Krishna_Hall: 0.06189356132897417, T_point27: 0.15073533098081043 },
    //   T_point27: {
    //     Radha_Kunj_Gate1: 0.15073533098081043,
    //     T_point15: 0.08360146550275059,
    //     T_point37: 0.015217981376564348
    //   },
    //   T_point16: {
    //     T_point8: 0.03404401120217734,
    //     Vasuki: 0.0011359554697620866,
    //     Setu: 0.002887986014096386,
    //     Nandi: 0.04041381609749412
    //   },
    //   Vasuki: { T_point16: 0.0011359554697620866 },
    //   Setu: { T_point16: 0.002887986014096386 },
    //   Nandi: { T_point16: 0.04041381609749412, Siddhi: 0.03976768219579521 },
    //   Siddhi: { Nandi: 0.03976768219579521, T_point17: 0.010452044666360032 },
    //   T_point17: {
    //     Siddhi: 0.010452044666360032,
    //     Riddhi: 0.0017734002804218997,
    //     T_point23: 0.12231288142390462
    //   },
    //   Riddhi: { T_point17: 0.0017734002804218997, Karthik: 0.012406764590107339 },
    //   Karthik: { Riddhi: 0.012406764590107339, Ganesh: 0.03653068642191196 },
    //   Ganesh: {
    //     Karthik: 0.03653068642191196,
    //     Parvati: 0.007273924079735203,
    //     Raddha: 0.009845345649613861
    //   },
    //   Parvati: { Ganesh: 0.007273924079735203 },
    //   Raddha: { Ganesh: 0.009845345649613861, Meera: 0.009192820994584567 },
    //   Meera: { Raddha: 0.009192820994584567, Shiva: 0.016152958538798372 },
    //   Shiva: { Meera: 0.016152958538798372, Buddha: 0.013278461120948626 },
    //   Buddha: { Shiva: 0.013278461120948626, Mahavir: 0.008147705187354703 },
    //   Mahavir: { Buddha: 0.008147705187354703 },
    //   T_point18: {
    //     T_point9: 0.13458468176415844,
    //     T_point19: 0.06186224336582958,
    //     Gate2: 0.04477255122124638
    //   },
    //   T_point19: {
    //     T_point18: 0.06186224336582958,
    //     Tulsi_Dormitory: 0.009182431707566016,
    //     T_point20: 0.09282891357981943
    //   },
    //   Tulsi_Dormitory: { T_point19: 0.009182431707566016 },
    //   T_point20: {
    //     T_point19: 0.09282891357981943,
    //     Trotakacharya_Kutir: 0.08487986000761386,
    //     Trotakacharya_Dormitory: 0.10303759175643436
    //   },
    //   Trotakacharya_Kutir: { T_point20: 0.08487986000761386 },
    //   Trotakacharya_Dormitory: { T_point20: 0.10303759175643436 },
    //   Baswa_Accomodation_C: {
    //     Baswa_Accomodation: 0.10000277556525103,
    //     Baswa_Accomodation_B: 0.10476187787287139
    //   },
    //   Baswa_Accomodation_B: {
    //     Baswa_Accomodation_C: 0.10476187787287139,
    //     Baswa_Accomodation_A: 0.055348187539340815
    //   },
    //   Baswa_Accomodation_A: {
    //     Baswa_Accomodation_B: 0.055348187539340815,
    //     Baswa_Hall: 0.08444694436893871
    //   },
    //   Baswa_Hall: {
    //     Baswa_Accomodation_A: 0.08444694436893871,
    //     Baswa_Bunglow_1: 0.040280359697184825
    //   },
    //   Baswa_Bunglow_1: {
    //     Baswa_Hall: 0.040280359697184825,
    //     Baswa_Bunglow_2: 0.019685490910797843
    //   },
    //   Baswa_Bunglow_2: {
    //     Baswa_Bunglow_1: 0.019685490910797843,
    //     Baswa_Bunglow_3: 0.031903273993693734
    //   },
    //   Baswa_Bunglow_3: {
    //     Baswa_Bunglow_2: 0.031903273993693734,
    //     Baswa_Bunglow_4: 0.03127216606141903
    //   },
    //   Baswa_Bunglow_4: {
    //     Baswa_Bunglow_3: 0.03127216606141903,
    //     Baswa_Bunglow_5: 0.018970422011451823
    //   },
    //   Baswa_Bunglow_5: {
    //     Baswa_Bunglow_4: 0.018970422011451823,
    //     T_point7: 0.13639242852496525
    //   },
    //   Yagnashala_Accomodation: {
    //     T_point5: 0.07291934419572176,
    //     Yagnashala_Accomodation_A: 0.031319324341615155
    //   },
    //   Yagnashala_Accomodation_A: {
    //     Yagnashala_Accomodation: 0.031319324341615155,
    //     Yagnashala_Accomodation_B: 0.08920648640149849
    //   },
    //   Yagnashala_Accomodation_B: {
    //     Yagnashala_Accomodation_A: 0.08920648640149849,
    //     Yagnashala_Accomodation_C: 0.08098472748016257
    //   },
    //   Yagnashala_Accomodation_C: {
    //     Yagnashala_Accomodation_B: 0.08098472748016257,
    //     T_point49: 0.01821876064814046
    //   },
    //   T_point49: {
    //     Yagnashala_Accomodation_C: 0.01821876064814046,
    //     Gate6: 0.04084997927864341,
    //     Yagnashala_Accomodation_D: 0.06410701030836291
    //   },
    //   Gate6: { T_point49: 0.04084997927864341 },
    //   Yagnashala_Accomodation_D: { T_point49: 0.06410701030836291, Vrinda_Van: 0.04311201092779968 },
    //   Vrinda_Van: {
    //     Yagnashala_Accomodation_D: 0.04311201092779968,
    //     T_point48: 0.00823025510757294
    //   },
    //   T_point48: {
    //     Vrinda_Van: 0.00823025510757294,
    //     Sri_Sri_Publications: 0.10617679585284111,
    //     Guru_Paduka_Vanam: 0.13392149112167928
    //   },
    //   Sri_Sri_Publications: { T_point48: 0.10617679585284111, Gate7: 0.008351432808880382 },
    //   Gate7: { Sri_Sri_Publications: 0.008351432808880382 },
    //   Gate2: {
    //     T_point18: 0.04477255122124638,
    //     Soudamini: 0.08126210776816978,
    //     T_point22: 0.013231799655851278
    //   },
    //   Soudamini: { Gate2: 0.08126210776816978 },
    //   T_point22: {
    //     Gate2: 0.013231799655851278,
    //     Vasuki_2: 0.005233260862277253,
    //     Adishesha: 0.0031725264981737064,
    //     T_point23: 0.00784956281924688
    //   },
    //   Vasuki_2: { T_point22: 0.005233260862277253 },
    //   Adishesha: { T_point22: 0.0031725264981737064 },
    //   T_point23: {
    //     T_point22: 0.00784956281924688,
    //     T_point17: 0.12231288142390462,
    //     T_point29: 0.13500359432770676
    //   },
    //   Gate5: {
    //     Reception: 0.09608374531999625,
    //     Cafe_Vishala_Bistro: 0.038440002220560425
    //   },
    //   Cafe_Vishala_Bistro: { Gate5: 0.038440002220560425, Sarda_Vihar: 0.9788973747543044 },
    //   Sarda_Vihar: { Cafe_Vishala_Bistro: 0.9788973747543044 },
    //   T_point37: {
    //     T_point27: 0.015217981376564348,
    //     Panchamrut: 0.03337031898370859,
    //     Krishna_Kutir: 0.05231451679166771
    //   },
    //   Panchamrut: { T_point37: 0.03337031898370859 },
    //   Krishna_Kutir: { T_point37: 0.05231451679166771 },
    //   T_point29: {
    //     T_point23: 0.13500359432770676,
    //     TTP_YLTP_Office: 0.11727281020736421,
    //     T_point30: 0.045714866464382345
    //   },
    //   TTP_YLTP_Office: { T_point29: 0.11727281020736421, Narayan: 0.25716797748009834 },
    //   Narayan: {
    //     TTP_YLTP_Office: 0.25716797748009834,
    //     Devi_Place: 0.02596192924791561
    //   },
    //   Devi_Place: { Narayan: 0.02596192924791561, SSRDP: 0.00988392703939946 },
    //   SSRDP: { Devi_Place: 0.00988392703939946, Shanmukha: 0.023648578084469827 },
    //   Shanmukha: { SSRDP: 0.023648578084469827, Rishimukh: 0.012513566821791538 },
    //   Rishimukh: { Shanmukha: 0.012513566821791538, VVKI: 0.037032291459591 },
    //   VVKI: { Rishimukh: 0.037032291459591, T_point28: 0.06979251380315368 },
    //   T_point28: {
    //     VVKI: 0.06979251380315368,
    //     SBI: 0.0049289021234955885,
    //     Gate1: 0.022028936765759097,
    //     IAHV: 0.011323680102084814
    //   },
    //   SBI: {
    //     T_point28: 0.0049289021234955885,
    //     Post_Office: 0.013206861674139442
    //   },
    //   Post_Office: { SBI: 0.013206861674139442 },
    //   Gate1: { T_point28: 0.022028936765759097 },
    //   T_point30: {
    //     T_point29: 0.045714866464382345,
    //     Vasishta: 0.026027866528570576,
    //     T_point31: 0.055752881449797134
    //   },
    //   Vasishta: {
    //     T_point30: 0.026027866528570576,
    //     Vishwamitra: 0.014686922786494524
    //   },
    //   Vishwamitra: { Vasishta: 0.014686922786494524 },
    //   T_point31: {
    //     T_point30: 0.055752881449797134,
    //     T_point32: 0.02400497642992372,
    //     Old_Amphitheater: 0.01646452358615202
    //   },
    //   T_point32: {
    //     T_point31: 0.02400497642992372,
    //     Gargi_Dinning_Hall: 0.010602647665023317,
    //     Mahalakshmi_Mantap: 0.028270493458570058
    //   },
    //   Gargi_Dinning_Hall: { T_point32: 0.010602647665023317 },
    //   Mahalakshmi_Mantap: {
    //     T_point32: 0.028270493458570058,
    //     Sumeru_Mantap: 0.0655084383293151
    //   },
    //   Sumeru_Mantap: { Mahalakshmi_Mantap: 0.0655084383293151 },
    //   Old_Amphitheater: { T_point31: 0.01646452358615202, Arundhati: 0.015156658770954302 },
    //   Arundhati: {
    //     Old_Amphitheater: 0.015156658770954302,
    //     SSIAS: 0.02392511083968442
    //   },
    //   SSIAS: { Arundhati: 0.02392511083968442, IAHV: 0.020637101520066068 },
    //   IAHV: { SSIAS: 0.020637101520066068, T_point28: 0.011323680102084814 },
    //   T_point46: {
    //     T_point7: 0.1071130118608085,
    //     T_point10: 0.006709517504515269,
    //     Patanjali_Mantap: 0.0073345178695029736
    //   },
    //   Patanjali_Mantap: { T_point46: 0.0073345178695029736 },
    //   Ganesha_Hall: { Shankra_Hall: 0.02596348465167393 },
    //   Ganga_Kutir: { T_point34: 0.0572821752069632 },
    //   Annapoorna_Hall: { Annapoorna: 0.012188352883448978 },
    //   Information_Center: { T_point24: 0.014858433201571467 },
    //   Swadishthan: {
    //     Annapoorna: 0.023332800441639774,
    //     Padmini_Gate: 0.11569996961601889
    //   },
    //   Annapoorna_FirstFloor: { T_point4: 0.14083270678442739 }
    // }

     const graph ={
      Parking_Lot_1: {
        Guru_Paduka_Vanam: 0.01888938830928675,
        Reception: 0.06688139614511153
      },
      Guru_Paduka_Vanam: {
        Parking_Lot_1: 0.01888938830928675,
        T_point50: 0.09010941603277167,
        T_point48: 0.13392149112167928
      },
      Reception: { Parking_Lot_1: 0.06688139614511153, Gate5: 0.09608374531999625 },
      T_point50: {
        Guru_Paduka_Vanam: 0.09010941603277167,
        T_point: 0.08539101193181559
      },
      T_point: {
        T_point50: 0.08539101193181559,
        Divine_Services: 0.029457330772418,
        Vishala_Cafe: 0.04223959894026087
      },
      Divine_Services: { T_point: 0.029457330772418, Madhurya: 0.028676508849682827 },
      Madhurya: {
        Divine_Services: 0.028676508849682827,
        T_point47: 0.024408013736858632
      },
      Vishala_Cafe: { T_point: 0.04223959894026087, SBI_V: 0.0029603966948303657 },
      T_point47: {
        Madhurya: 0.024408013736858632,
        Nadi_Pariksha_Center: 0.05217187372544091,
        T_point2: 0.027108780540572842
      },
      Nadi_Pariksha_Center: { T_point47: 0.05217187372544091, T_point51: 0.03947835643400606 },
      T_point51: {
        Nadi_Pariksha_Center: 0.03947835643400606,
        Sumeru_Travels: 0.027625736478028042
      },
      Sumeru_Travels: { T_point51: 0.027625736478028042 },
      T_point2: {
        T_point47: 0.027108780540572842,
        T_point52: 0.03287418029603567,
        Meditation_Hall: 0.01752615665340416,
        T_point53: 0.03740538135833985
      },
      T_point52: { T_point2: 0.03287418029603567, T_point24: 0.017216701909303207 },
      T_point24: {
        T_point52: 0.017216701909303207,
        Vishalakshi_Mantap_front_side: 0.010595148069011961,
        Gauri_Hall: 0.038297919138243354,
        Information_Center: 0.014858433201571467
      },
      Meditation_Hall: { T_point2: 0.01752615665340416, Juice_Center: 0.005412646995430272 },
      Juice_Center: { Meditation_Hall: 0.005412646995430272 },
      Vishalakshi_Mantap_front_side: {
        T_point24: 0.010595148069011961,
        Vishalakshi_Mantap_GF: 0.03554404761950243,
        Amphitheatre: 0.004752802272029777,
        T_point36: 0.029663024945436427
      },
      Gauri_Hall: {
        T_point24: 0.038297919138243354,
        Shankra_Hall: 0.03915543937186585
      },
      Shankra_Hall: {
        Gauri_Hall: 0.03915543937186585,
        Ganesha_Hall: 0.02596348465167393
      },
      Ganesha_Hall: { Shankra_Hall: 0.02596348465167393 },
      Vishalakshi_Mantap_GF: {
        Vishalakshi_Mantap_front_side: 0.03554404761950243,
        Mahavir_Hall: 0.08247626707887859
      },
      Mahavir_Hall: {
        Vishalakshi_Mantap_GF: 0.08247626707887859,
        Buddha_Hall: 0.010690369622736699
      },
      Buddha_Hall: { Mahavir_Hall: 0.010690369622736699 },
      Amphitheatre: { Vishalakshi_Mantap_front_side: 0.004752802272029777 },
      Information_Center: { T_point24: 0.014858433201571467 },
      T_point53: {
        T_point2: 0.03740538135833985,
        Vishalakshi_Mantap_back_side: 0.030270869843818604
      },
      Vishalakshi_Mantap_back_side: {
        T_point53: 0.030270869843818604,
        T_point55: 0.03375522871391813,
        T_point5: 0.02376002962782705
      },
      T_point55: {
        Vishalakshi_Mantap_back_side: 0.03375522871391813,
        T_point54: 0.01054024591739895
      },
      T_point54: { T_point55: 0.01054024591739895, T_point56: 0.048846975755327496 },
      T_point56: { T_point54: 0.048846975755327496, T_point57: 0.00902590702329551 },
      T_point57: { T_point56: 0.00902590702329551, Laundary: 0.04284344737868741 },
      Laundary: { T_point57: 0.04284344737868741, T_point8: 0.049067398566341514 },
      T_point8: {
        Laundary: 0.049067398566341514,
        Gate3: 0.009129706469401668,
        T_point59: 0.0657285006655503,
        T_point16: 0.03404401120217734
      },
      Gate3: {
        T_point8: 0.009129706469401668,
        Annapoorna: 0.007985320418537879,
        Aparna_Gate: 0.024716701518559453,
        T_point63: 0.005278316270105913
      },
      Annapoorna: {
        Gate3: 0.007985320418537879,
        T_point62: 0.05262027821827962,
        Annapoorna_Hall: 0.012188352883448978,
        Swadishthan: 0.023332800441639774
      },
      Aparna_Gate: {
        Gate3: 0.024716701518559453,
        T_point67: 0.044863506893712345,
        T_point73: 0.041696604663566096
      },
      T_point36: {
        Vishalakshi_Mantap_front_side: 0.029663024945436427,
        T_point58: 0.01531229205632255,
        Secretariat: 0.008240758136142482
      },
      T_point58: { T_point36: 0.01531229205632255, T_point4: 0.006343334012222094 },
      T_point4: {
        T_point58: 0.006343334012222094,
        T_point59: 0.029258963550609363,
        T_point65: 0.06754664618884959,
        T_point35: 0.007572792341833549,
        T_point34: 0.02086085780941998
      },
      Secretariat: { T_point36: 0.008240758136142482 },
      T_point59: { T_point4: 0.029258963550609363, T_point8: 0.0657285006655503 },
      T_point5: {
        Vishalakshi_Mantap_back_side: 0.02376002962782705,
        Gate4: 0.028067288721693392,
        Yagnashala_Accomodation: 0.07291934419572176
      },
      Gate4: {
        T_point5: 0.028067288721693392,
        T_point60: 0.037516202568948415,
        T_point15: 0.09935650523348338
      },
      T_point60: { Gate4: 0.037516202568948415, T_point7: 0.035813592396290214 },
      T_point7: {
        T_point60: 0.035813592396290214,
        Maitreyi_Hall: 0.007340950623662456,
        T_point46: 0.1071130118608085,
        Baswa_Bunglow_5: 0.13639242852496525
      },
      Maitreyi_Hall: { T_point7: 0.007340950623662456 },
      T_point63: { Gate3: 0.005278316270105913, T_point61: 0.04845609508707333 },
      T_point61: { T_point63: 0.04845609508707333, T_point9: 0.03719788392114676 },
      T_point9: {
        T_point61: 0.03719788392114676,
        T_point62: 0.022003686726175687,
        T_point66: 0.05143843160669913,
        T_point18: 0.13458468176415844
      },
      T_point62: { Annapoorna: 0.05262027821827962, T_point9: 0.022003686726175687 },
      Annapoorna_Hall: { Annapoorna: 0.012188352883448978 },
      Swadishthan: { Annapoorna: 0.023332800441639774, T_point64: 0.060096187642753277 },
      T_point64: {
        Swadishthan: 0.060096187642753277,
        Padmini_Gate: 0.03955781846022427
      },
      Padmini_Gate: {
        T_point64: 0.03955781846022427,
        T_point66: 0.045661465078894056,
        T_point71: 0.015802005323421874
      },
      T_point65: {
        T_point4: 0.06754664618884959,
        Annapoorna_FirstFloor: 0.06853049547973501
      },
      Annapoorna_FirstFloor: { T_point65: 0.06853049547973501 },
      T_point66: { T_point9: 0.05143843160669913, Padmini_Gate: 0.045661465078894056 },
      T_point67: {
        Aparna_Gate: 0.044863506893712345,
        T_point68: 0.026909492369921427
      },
      T_point68: { T_point67: 0.026909492369921427, T_point69: 0.02559407465258358 },
      T_point69: { T_point68: 0.02559407465258358, T_point70: 0.018495926946661648 },
      T_point70: { T_point69: 0.018495926946661648, T_point71: 0.021354028864197943 },
      T_point71: {
        T_point70: 0.021354028864197943,
        Padmini_Gate: 0.015802005323421874
      },
      T_point46: {
        T_point7: 0.1071130118608085,
        T_point10: 0.006709517504515269,
        Patanjali_Mantap: 0.0073345178695029736
      },
      T_point10: {
        T_point46: 0.006709517504515269,
        Jamini_Hall: 0.0051448495243208185,
        Tripura_Hall: 0.029406382820192326,
        T_point11: 0.034202808516029096
      },
      Patanjali_Mantap: { T_point46: 0.0073345178695029736 },
      Jamini_Hall: { T_point10: 0.0051448495243208185 },
      Tripura_Hall: {
        T_point10: 0.029406382820192326,
        Baswa_Accomodation: 0.09375403656231604
      },
      Baswa_Accomodation: {
        Tripura_Hall: 0.09375403656231604,
        Baswa_Accomodation_C: 0.10000277556525103
      },
      T_point11: {
        T_point10: 0.034202808516029096,
        T_point12: 0.03880897002724771,
        Anugraha_Mantap: 0.04192947739173982
      },
      T_point12: {
        T_point11: 0.03880897002724771,
        Shat_Kriya_Hall: 0.03092754186324135,
        Vivasvan_Yogshala: 0.013485854424865516
      },
      Shat_Kriya_Hall: { T_point12: 0.03092754186324135 },
      Vivasvan_Yogshala: {
        T_point12: 0.013485854424865516,
        Kapila_Hall: 0.026902277776222693
      },
      Kapila_Hall: { Vivasvan_Yogshala: 0.026902277776222693 },
      Anugraha_Mantap: { T_point11: 0.04192947739173982, Shiva_Temple: 0.04433107402674364 },
      Shiva_Temple: { Anugraha_Mantap: 0.04433107402674364 },
      SBI_V: {
        Vishala_Cafe: 0.0029603966948303657,
        T_point13: 0.02455220494928629
      },
      T_point13: {
        SBI_V: 0.02455220494928629,
        Vishala_Men_Dormitory: 0.024526593737659773,
        Female_Dormitory_Yogini: 0.09873298463302542
      },
      Vishala_Men_Dormitory: {
        T_point13: 0.024526593737659773,
        Saraswati_Hall_C: 0.06710500208509736
      },
      Female_Dormitory_Yogini: { T_point13: 0.09873298463302542 },
      Saraswati_Hall_C: {
        Vishala_Men_Dormitory: 0.06710500208509736,
        T_point14: 0.08648278694774965
      },
      T_point14: {
        Saraswati_Hall_C: 0.08648278694774965,
        Saraswati_Hall_A: 0.01491421949415876,
        T_point72: 0.031166676742514256,
        T_point33: 0.024895836551893213
      },
      Saraswati_Hall_A: { T_point14: 0.01491421949415876 },
      T_point72: { T_point14: 0.031166676742514256, T_point35: 0.02130064087133552 },
      T_point35: {
        T_point72: 0.02130064087133552,
        Vaibhavi: 0.006505394435873755,
        T_point4: 0.007572792341833549
      },
      Vaibhavi: { T_point35: 0.006505394435873755 },
      T_point33: {
        T_point14: 0.024895836551893213,
        Shuka_Hall: 0.0035432825144588696,
        Badri_Vishala: 0.020696718371787156
      },
      Shuka_Hall: { T_point33: 0.0035432825144588696 },
      Badri_Vishala: { T_point33: 0.020696718371787156, T_point34: 0.02246702584730841 },
      T_point34: {
        Badri_Vishala: 0.02246702584730841,
        T_point4: 0.02086085780941998,
        Ganga_Kutir: 0.0572821752069632
      },
      Ganga_Kutir: { T_point34: 0.0572821752069632 },
      T_point15: {
        Gate4: 0.09935650523348338,
        T_point73: 0.0255506107496364,
        Panchkarma_Gate: 0.015985424767168934,
        T_point27: 0.08360146550275059
      },
      T_point73: { Aparna_Gate: 0.041696604663566096, T_point15: 0.0255506107496364 },
      Panchkarma_Gate: { T_point15: 0.015985424767168934, T_point25: 0.08914394545662468 },
      T_point25: {
        Panchkarma_Gate: 0.08914394545662468,
        Meera_Vanam: 0.11965699635481646,
        T_point74: 0.34554883843953765
      },
      Meera_Vanam: { T_point25: 0.11965699635481646 },
      T_point74: { T_point25: 0.34554883843953765, Gopi: 0.03111829338054843 },
      Gopi: { T_point74: 0.03111829338054843, T_point26: 0.11868343951060259 },
      T_point26: {
        Gopi: 0.11868343951060259,
        Gokul: 0.018059828625911743,
        T_point75: 0.26682050820303
      },
      Gokul: { T_point26: 0.018059828625911743 },
      T_point75: { T_point26: 0.26682050820303, Gurukul: 0.24141274058060752 },
      Gurukul: {
        T_point75: 0.24141274058060752,
        T_point40: 0.015400576645593016,
        Gurukul_Cottages: 0.13442295504719626
      },
      T_point40: {
        Gurukul: 0.015400576645593016,
        Ganpati_Temple: 0.01664022209015441,
        Veda_Bhavanam: 0.044358396951976686,
        T_point43: 0.029031732602704884
      },
      Ganpati_Temple: { T_point40: 0.01664022209015441 },
      Veda_Bhavanam: { T_point40: 0.044358396951976686, T_point41: 0.021122767167498745 },
      T_point41: {
        Veda_Bhavanam: 0.021122767167498745,
        Vaidic_Bhavanam: 0.017645132593689487,
        Archana: 0.028672888577339736
      },
      Vaidic_Bhavanam: { T_point41: 0.017645132593689487 },
      Archana: { T_point41: 0.028672888577339736, Devi_Hall: 0.026589636967904208 },
      Devi_Hall: { Archana: 0.026589636967904208, T_point42: 0.039968277903575045 },
      T_point42: {
        Devi_Hall: 0.039968277903575045,
        Gurukul_Yagnashala: 0.04817821288606407,
        Markandeya: 0.014781775856960874,
        T_point45: 0.5028863517743843
      },
      T_point43: {
        T_point40: 0.029031732602704884,
        T_point44: 0.014338003761624555,
        Nakshatra_Vanam: 0.049968575176899135
      },
      T_point44: {
        T_point43: 0.014338003761624555,
        Gurukul_Yagnashala: 0.010655265372974836,
        Gurukul_Prayogshala: 0.049324895842770534
      },
      Nakshatra_Vanam: { T_point43: 0.049968575176899135 },
      Gurukul_Yagnashala: { T_point44: 0.010655265372974836, T_point42: 0.04817821288606407 },
      Gurukul_Prayogshala: { T_point44: 0.049324895842770534 },
      Markandeya: { T_point42: 0.014781775856960874 },
      T_point45: {
        T_point42: 0.5028863517743843,
        Gaushala: 0.011589385780458789,
        A2_Milk_Cafe: 0.009618470405952397
      },
      Gaushala: { T_point45: 0.011589385780458789 },
      A2_Milk_Cafe: { T_point45: 0.009618470405952397 },
      Gurukul_Cottages: {
        Gurukul: 0.13442295504719626,
        Radha_Kunj_Gate2: 0.04177631612301152
      },
      Radha_Kunj_Gate2: {
        Gurukul_Cottages: 0.04177631612301152,
        T_point39: 0.004062844927893518
      },
      T_point39: {
        Hathishala: 0.006776359786453067,
        Radha_Kunj_Gate2: 0.004062844927893518,
        T_point38: 0.03593052858661679
      },
      Hathishala: { T_point39: 0.006776359786453067 },
      T_point38: {
        T_point39: 0.03593052858661679,
        Mantap_Radha_Kunj: 0.01914692824473519,
        Radha_Kunj_ConferenceHall: 0.009136435721508053,
        Krishna_Hall: 0.11521949251950216
      },
      Mantap_Radha_Kunj: { T_point38: 0.01914692824473519 },
      Radha_Kunj_ConferenceHall: { T_point38: 0.009136435721508053 },
      Krishna_Hall: {
        T_point38: 0.11521949251950216,
        Radha_Kunj_Gate1: 0.06189356132897417
      },
      Radha_Kunj_Gate1: { Krishna_Hall: 0.06189356132897417, T_point27: 0.15073533098081043 },
      T_point27: {
        Radha_Kunj_Gate1: 0.15073533098081043,
        T_point15: 0.08360146550275059,
        T_point37: 0.015217981376564348
      },
      T_point16: {
        T_point8: 0.03404401120217734,
        Vasuki: 0.0011359554697620866,
        Setu: 0.002887986014096386,
        Nandi: 0.04041381609749412
      },
      Vasuki: { T_point16: 0.0011359554697620866 },
      Setu: { T_point16: 0.002887986014096386 },
      Nandi: { T_point16: 0.04041381609749412, Siddhi: 0.03976768219579521 },
      Siddhi: { Nandi: 0.03976768219579521, T_point17: 0.010452044666360032 },
      T_point17: {
        Siddhi: 0.010452044666360032,
        Riddhi: 0.0017734002804218997,
        T_point23: 0.12231288142390462
      },
      Riddhi: { T_point17: 0.0017734002804218997, Karthik: 0.012406764590107339 },
      Karthik: { Riddhi: 0.012406764590107339, Ganesh: 0.03653068642191196 },
      Ganesh: {
        Karthik: 0.03653068642191196,
        Parvati: 0.007273924079735203,
        Raddha: 0.009845345649613861
      },
      Parvati: { Ganesh: 0.007273924079735203 },
      Raddha: { Ganesh: 0.009845345649613861, Meera: 0.009192820994584567 },
      Meera: { Raddha: 0.009192820994584567, Shiva: 0.016152958538798372 },
      Shiva: { Meera: 0.016152958538798372, Buddha: 0.013278461120948626 },
      Buddha: { Shiva: 0.013278461120948626, Mahavir: 0.008147705187354703 },
      Mahavir: { Buddha: 0.008147705187354703 },
      T_point18: {
        T_point9: 0.13458468176415844,
        T_point19: 0.06186224336582958,
        Gate2: 0.04477255122124638
      },
      T_point19: {
        T_point18: 0.06186224336582958,
        Tulsi_Dormitory: 0.009182431707566016,
        T_point20: 0.09282891357981943
      },
      Tulsi_Dormitory: { T_point19: 0.009182431707566016 },
      T_point20: {
        T_point19: 0.09282891357981943,
        Trotakacharya_Kutir: 0.08487986000761386,
        Trotakacharya_Dormitory: 0.10303759175643436
      },
      Trotakacharya_Kutir: { T_point20: 0.08487986000761386 },
      Trotakacharya_Dormitory: { T_point20: 0.10303759175643436 },
      Baswa_Accomodation_C: {
        Baswa_Accomodation: 0.10000277556525103,
        Baswa_Accomodation_B: 0.10476187787287139
      },
      Baswa_Accomodation_B: {
        Baswa_Accomodation_C: 0.10476187787287139,
        Baswa_Accomodation_A: 0.055348187539340815
      },
      Baswa_Accomodation_A: {
        Baswa_Accomodation_B: 0.055348187539340815,
        Baswa_Hall: 0.08444694436893871
      },
      Baswa_Hall: {
        Baswa_Accomodation_A: 0.08444694436893871,
        Baswa_Bunglow_1: 0.040280359697184825
      },
      Baswa_Bunglow_1: {
        Baswa_Hall: 0.040280359697184825,
        Baswa_Bunglow_2: 0.019685490910797843
      },
      Baswa_Bunglow_2: {
        Baswa_Bunglow_1: 0.019685490910797843,
        Baswa_Bunglow_3: 0.031903273993693734
      },
      Baswa_Bunglow_3: {
        Baswa_Bunglow_2: 0.031903273993693734,
        Baswa_Bunglow_4: 0.03127216606141903
      },
      Baswa_Bunglow_4: {
        Baswa_Bunglow_3: 0.03127216606141903,
        Baswa_Bunglow_5: 0.018970422011451823
      },
      Baswa_Bunglow_5: {
        Baswa_Bunglow_4: 0.018970422011451823,
        T_point7: 0.13639242852496525
      },
      Yagnashala_Accomodation: {
        T_point5: 0.07291934419572176,
        Yagnashala_Accomodation_A: 0.031319324341615155
      },
      Yagnashala_Accomodation_A: {
        Yagnashala_Accomodation: 0.031319324341615155,
        Yagnashala_Accomodation_B: 0.08920648640149849
      },
      Yagnashala_Accomodation_B: {
        Yagnashala_Accomodation_A: 0.08920648640149849,
        Yagnashala_Accomodation_C: 0.08098472748016257
      },
      Yagnashala_Accomodation_C: {
        Yagnashala_Accomodation_B: 0.08098472748016257,
        T_point49: 0.01821876064814046
      },
      T_point49: {
        Yagnashala_Accomodation_C: 0.01821876064814046,
        Gate6: 0.04084997927864341,
        Yagnashala_Accomodation_D: 0.06410701030836291
      },
      Gate6: { T_point49: 0.04084997927864341 },
      Yagnashala_Accomodation_D: { T_point49: 0.06410701030836291, Vrinda_Van: 0.04311201092779968 },
      Vrinda_Van: {
        Yagnashala_Accomodation_D: 0.04311201092779968,
        T_point48: 0.00823025510757294
      },
      T_point48: {
        Vrinda_Van: 0.00823025510757294,
        Sri_Sri_Publications: 0.10617679585284111,
        Guru_Paduka_Vanam: 0.13392149112167928
      },
      Sri_Sri_Publications: { T_point48: 0.10617679585284111, Gate7: 0.008351432808880382 },
      Gate7: { Sri_Sri_Publications: 0.008351432808880382 },
      Gate2: {
        T_point18: 0.04477255122124638,
        Soudamini: 0.08126210776816978,
        T_point22: 0.013231799655851278
      },
      Soudamini: { Gate2: 0.08126210776816978 },
      T_point22: {
        Gate2: 0.013231799655851278,
        Vasuki_2: 0.005233260862277253,
        Adishesha: 0.0031725264981737064,
        T_point23: 0.00784956281924688
      },
      Vasuki_2: { T_point22: 0.005233260862277253 },
      Adishesha: { T_point22: 0.0031725264981737064 },
      T_point23: {
        T_point22: 0.00784956281924688,
        T_point17: 0.12231288142390462,
        T_point29: 0.13500359432770676
      },
      Gate5: {
        Reception: 0.09608374531999625,
        Cafe_Vishala_Bistro: 0.038440002220560425
      },
      Cafe_Vishala_Bistro: { Gate5: 0.038440002220560425, Sarda_Vihar: 0.9788973747543044 },
      Sarda_Vihar: { Cafe_Vishala_Bistro: 0.9788973747543044 },
      T_point37: {
        T_point27: 0.015217981376564348,
        Panchamrut: 0.03337031898370859,
        Krishna_Kutir: 0.05231451679166771
      },
      Panchamrut: { T_point37: 0.03337031898370859 },
      Krishna_Kutir: { T_point37: 0.05231451679166771 },
      T_point29: {
        T_point23: 0.13500359432770676,
        TTP_YLTP_Office: 0.11727281020736421,
        T_point30: 0.045714866464382345
      },
      TTP_YLTP_Office: { T_point29: 0.11727281020736421, Narayan: 0.25716797748009834 },
      Narayan: {
        TTP_YLTP_Office: 0.25716797748009834,
        Devi_Place: 0.02596192924791561
      },
      Devi_Place: { Narayan: 0.02596192924791561, SSRDP: 0.00988392703939946 },
      SSRDP: { Devi_Place: 0.00988392703939946, Shanmukha: 0.023648578084469827 },
      Shanmukha: { SSRDP: 0.023648578084469827, Rishimukh: 0.012513566821791538 },
      Rishimukh: { Shanmukha: 0.012513566821791538, VVKI: 0.037032291459591 },
      VVKI: { Rishimukh: 0.037032291459591, T_point28: 0.06979251380315368 },
      T_point28: {
        VVKI: 0.06979251380315368,
        SBI: 0.0049289021234955885,
        Gate1: 0.022028936765759097,
        IAHV: 0.011323680102084814
      },
      SBI: {
        T_point28: 0.0049289021234955885,
        Post_Office: 0.013206861674139442
      },
      Post_Office: { SBI: 0.013206861674139442 },
      Gate1: { T_point28: 0.022028936765759097 },
      T_point30: {
        T_point29: 0.045714866464382345,
        Vasishta: 0.026027866528570576,
        T_point31: 0.055752881449797134
      },
      Vasishta: {
        T_point30: 0.026027866528570576,
        Vishwamitra: 0.014686922786494524
      },
      Vishwamitra: { Vasishta: 0.014686922786494524 },
      T_point31: {
        T_point30: 0.055752881449797134,
        T_point32: 0.02400497642992372,
        Old_Amphitheater: 0.01646452358615202
      },
      T_point32: {
        T_point31: 0.02400497642992372,
        Gargi_Dinning_Hall: 0.010602647665023317,
        Mahalakshmi_Mantap: 0.028270493458570058
      },
      Gargi_Dinning_Hall: { T_point32: 0.010602647665023317 },
      Mahalakshmi_Mantap: {
        T_point32: 0.028270493458570058,
        Sumeru_Mantap: 0.0655084383293151
      },
      Sumeru_Mantap: { Mahalakshmi_Mantap: 0.0655084383293151 },
      Old_Amphitheater: { T_point31: 0.01646452358615202, Arundhati: 0.015156658770954302 },
      Arundhati: {
        Old_Amphitheater: 0.015156658770954302,
        SSIAS: 0.02392511083968442
      },
      SSIAS: { Arundhati: 0.02392511083968442, IAHV: 0.020637101520066068 },
      IAHV: { SSIAS: 0.020637101520066068, T_point28: 0.011323680102084814 }
    }
    const distances = {};
    const previous = {};
    const queue = new PriorityQueue();
  
    // Initialize distances and previous
    for (const vertex in graph) {
      distances[vertex] = Infinity;
      previous[vertex] = null;
    }
    distances[start] = 0;
  
    // Enqueue the start vertex with distance 0
    queue.enqueue(start, 0);
  
    while (!queue.isEmpty()) {
      const { element: currentVertex, priority: currentDistance } = queue.dequeue();
  
      if (currentVertex === end) {
        // Found the shortest path to the destination
        return buildPath(previous, end);
      }
  
      if (currentDistance > distances[currentVertex]) {
        continue;
      }
  
      for (const neighbor in graph[currentVertex]) {
        const weight = graph[currentVertex][neighbor];
        const distance = currentDistance + weight;
  
        if (distance < distances[neighbor]) {
          distances[neighbor] = distance;
          previous[neighbor] = currentVertex;
          queue.enqueue(neighbor, distance);
        }
      }
    }
  
    // No path found from start to end
    return null;
  }
  
  function buildPath(previous, end) {
    const path = [end];
    let currentVertex = end;
  
    while (previous[currentVertex] !== null) {
      currentVertex = previous[currentVertex];
      path.unshift(currentVertex);
    }
  
    return path;
  }
  
  // Priority queue implementation
  class PriorityQueue {
    constructor() {
      this.queue = [];
    }
  
    enqueue(element, priority) {
      this.queue.push({ element, priority });
      this.sort();
    }
  
    dequeue() {
      return this.queue.shift();
    }
  
    sort() {
      this.queue.sort((a, b) => a.priority - b.priority);
    }
  
    isEmpty() {
      return this.queue.length === 0;
    }
  }
  
  // Example usage
  

  
  module.exports = dijkstra;
