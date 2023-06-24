const graph = {};

function addEdge(source, target, weight) {
  if (!graph[source]) {
    graph[source] = {};
  }
  
  if (!graph[target]) {
    graph[target] = {};
  }

  graph[source][target] = weight;
  graph[target][source] = weight;
}
addEdge( 'Reception', 'Guru_Paduka_Vanam', 0.09256336640840945 );
addEdge( 'Guru_Paduka_Vanam', 'T_point', 0.19738856034012192                  );
addEdge( 'T_point', 'Divine_Services', 0.029428286704118678 );
addEdge( 'Divine_Services', 'Madhurya', 0.028676508849682827 );
addEdge( 'T_point', 'Vishala_Cafe', 0.05984240191039364 );
addEdge( 'Madhurya', 'T_point2', 0.07267505074966814 );
addEdge( 'T_point2', 'T_point24', 0.05281366773473582 );
addEdge( 'T_point24', 'Vishalakshi_Mantap_front_side', 0.010595148069011961 );
addEdge( 'T_point24', 'Gauri_Hall', 0.038297919138243354 );
addEdge( 'Gauri_Hall', 'Shankra_Hall', 0.03915543937186585 );
addEdge(
  'Vishalakshi_Mantap_front_side',
  'Vishalakshi_Mantap_GF',
  0.03554404761950243
  );
addEdge( 'Vishalakshi_Mantap_GF', 'Mahavir_Hall', 0.08247626707887859 );
addEdge( 'Mahavir_Hall', 'Buddha_Hall', 0.010690369622736699 );
addEdge(
  'Vishalakshi_Mantap_front_side',
  'Amphitheatre',
  0.004752802272029777
  );
addEdge( 'T_point2', 'Vishalakshi_Mantap_back_side', 0.08126401426703553                     );
addEdge( 'Vishalakshi_Mantap_back_side', 'T_point8', 0.2579614822222106   );
addEdge( 'T_point8', 'Gate3', 0.009129706469401668   );
addEdge( 'Gate3', 'Annapoorna', 0.007985320418537879   );
addEdge( 'Gate3', 'Aparna_Gate', 0.024716701518559453   );
addEdge( 'Vishalakshi_Mantap_front_side', 'T_point36', 0.029663024945436427   );
addEdge( 'T_point36', 'T_point4', 0.023367152519453975   );
addEdge( 'T_point36', 'Secretariat', 0.008240758136142482   );
addEdge( 'T_point4', 'T_point8', 0.10415050524608639   );
addEdge( 'Vishalakshi_Mantap_back_side', 'T_point5', 0.02376002962782705   );
addEdge( 'T_point5', 'Gate4', 0.028067288721693392   );
addEdge( 'Gate4', 'T_point7', 0.10626921567021187   );
addEdge( 'T_point7', 'Maitreyi_Hall', 0.007340950623662456   );
addEdge( 'Gate3', 'T_point9', 0.10729878011408982   );
addEdge( 'Annapoorna', 'T_point9', 0.08986982574179804   );
addEdge( 'T_point9', 'Padmini_Gate', 0.10758516875438452   );
addEdge( 'Aparna_Gate', 'Padmini_Gate', 0.15682913504785656   );
addEdge( 'T_point10', 'Jamini_Hall', 0.0051448495243208185   );
addEdge( 'T_point10', 'Tripura_Hall', 0.029406382820192326   );
addEdge( 'Tripura_Hall', 'Baswa_Accomodation', 0.09375403656231604   );
addEdge( 'T_point10', 'T_point11', 0.034202808516029096   );
addEdge( 'T_point11', 'T_point12', 0.03880897002724771   );
addEdge( 'T_point12', 'Shat_Kriya_Hall', 0.03092754186324135   );
addEdge( 'T_point12', 'Vivasvan_Yogshala', 0.013485854424865516   );
addEdge( 'Vivasvan_Yogshala', 'Kapila_Hall', 0.026902277776222693   );
addEdge( 'T_point11', 'Anugraha_Mantap', 0.04192947739173982   );
addEdge( 'Anugraha_Mantap', 'Shiva_Temple', 0.04433107402674364   );
addEdge( 'Vishala_Cafe', 'T_point13', 0.02209121438029142   );
addEdge( 'T_point13', 'Vishala_Men_Dormitory', 0.024526593737659773   );
addEdge( 'T_point13', 'Female_Dormitory_Yogini', 0.09873298463302542   );
addEdge( 'Vishala_Men_Dormitory', 'Saraswati_Hall_C', 0.06710500208509736   );
addEdge( 'Saraswati_Hall_C', 'T_point14', 0.08648278694774965   );
addEdge( 'T_point14', 'Saraswati_Hall_A', 0.01491421949415876   );
addEdge( 'T_point14', 'T_point35', 0.06267828950470225   );
addEdge( 'T_point35', 'Vaibhavi', 0.006505394435873755   );
addEdge( 'T_point35', 'T_point4', 0.007572792341833549   );
addEdge( 'T_point14', 'T_point33', 0.024895836551893213   );
addEdge( 'T_point33', 'Shuka_Hall', 0.0035432825144588696   );
addEdge( 'T_point33', 'Badri_Vishala', 0.020696718371787156   );
addEdge( 'Badri_Vishala', 'T_point34', 0.02246702584730841   );
addEdge( 'T_point34', 'T_point4', 0.02086085780941998   );
addEdge( 'Gate4', 'T_point15', 0.09935650523348338   );
addEdge( 'Aparna_Gate', 'T_point15', 0.09330525651147974   );
addEdge( 'T_point15', 'Panchkarma_Gate', 0.015985424767168934   );
addEdge( 'Panchkarma_Gate', 'T_point25', 0.08914394545662468   );
addEdge( 'T_point25', 'Meera_Vanam', 0.11965699635481646   );
addEdge( 'T_point25', 'Gopi', 0.3979213154108802   );
addEdge( 'Gopi', 'T_point26', 0.11868343951060259   );
addEdge( 'T_point26', 'Gokul', 0.018059828625911743   );
addEdge( 'T_point26', 'Gurukul', 0.5546588312579156   );
addEdge( 'Gurukul', 'T_point40', 0.015400576645593016   );
addEdge( 'T_point40', 'Ganpati_Temple', 0.01664022209015441   );
addEdge( 'T_point40', 'Veda_Bhavanam', 0.044358396951976686   );
addEdge( 'Veda_Bhavanam', 'T_point41', 0.021122767167498745   );
addEdge( 'T_point41', 'Vaidic_Bhavanam', 0.017645132593689487   );
addEdge( 'T_point41', 'Archana', 0.028672888577339736   );
addEdge( 'Archana', 'Devi_Hall', 0.026589636967904208   );
addEdge( 'Devi_Hall', 'T_point42', 0.039968277903575045   );
addEdge( 'T_point40', 'T_point43', 0.029031732602704884   );
addEdge( 'T_point43', 'T_point44', 0.014338003761624555   );
addEdge( 'T_point43', 'Nakshatra_Vanam', 0.049968575176899135   );
addEdge( 'T_point44', 'Gurukul_Yagnashala', 0.010655265372974836   );
addEdge( 'T_point44', 'Gurukul_Prayogshala', 0.049324895842770534   );
addEdge( 'Gurukul_Yagnashala', 'T_point42', 0.04817821288606407   );
addEdge( 'T_point42', 'Markandeya', 0.014781775856960874   );
addEdge( 'T_point42', 'T_point45', 0.5028863517743843   );
addEdge( 'T_point45', 'Gaushala', 0.011589385780458789   );
addEdge( 'T_point45', 'A2_Milk_Cafe', 0.009618470405952397   );
addEdge( 'Gurukul', 'Gurukul_Cottages', 0.08519629187068486   );
addEdge( 'Gurukul_Cottages', 'Radha_Kunj_Gate2', 0.04177631612301152   );
addEdge( 'T_point39', 'Hathishala', 0.006776359786453067   );
addEdge( 'T_point39', 'Radha_Kunj_Gate2', 0.004062844927893518   );
addEdge( 'T_point39', 'T_point38', 0.03593052858661679   );
addEdge( 'T_point38', 'Mantap_Radha_Kunj', 0.01914692824473519   );
addEdge( 'T_point38', 'Radha_Kunj_ConferenceHall', 0.009136435721508053   );
addEdge( 'T_point38', 'Krishna_Hall', 0.11521949251950216   );
addEdge( 'Krishna_Hall', 'Radha_Kunj_Gate1', 0.06189356132897417   );
addEdge( 'Radha_Kunj_Gate1', 'T_point27', 0.15073533098081043   );
addEdge( 'T_point27', 'T_point15', 0.08360146550275059   );
addEdge( 'T_point8', 'T_point16', 0.03404401120217734   );
addEdge( 'T_point16', 'Vasuki', 0.0011359554697620866   );
addEdge( 'T_point16', 'Setu', 0.002887986014096386   );
addEdge( 'T_point16', 'Nandi', 0.04041381609749412   );
addEdge( 'Nandi', 'Siddhi', 0.03976768219579521   );
addEdge( 'Siddhi', 'T_point17', 0.010452044666360032   );
addEdge( 'T_point17', 'Riddhi', 0.0017734002804218997   );
addEdge( 'Riddhi', 'Karthik', 0.012406764590107339   );
addEdge( 'Karthik', 'Ganesh', 0.03653068642191196   );
addEdge( 'Ganesh', 'Parvati', 0.007273924079735203   );
addEdge( 'Ganesh', 'Raddha', 0.009845345649613861   );
addEdge( 'Raddha', 'Meera', 0.009192820994584567   );
addEdge( 'Meera', 'Shiva', 0.016152958538798372   );
addEdge( 'Shiva', 'Buddha', 0.013278461120948626   );
addEdge( 'Buddha', 'Mahavir', 0.008147705187354703   );
addEdge( 'T_point9', 'T_point18', 0.13458468176415844   );
addEdge( 'T_point18', 'T_point19', 0.06186224336582958   );
addEdge( 'T_point19', 'Tulsi_Dormitory', 0.009182431707566016   );
addEdge( 'T_point19', 'T_point20', 0.09282891357981943   );
addEdge( 'T_point20', 'Trotakacharya_Kutir', 0.08487986000761386   );
addEdge( 'T_point20', 'Trotakacharya_Dormitory', 0.10303759175643436   );
addEdge( 'Baswa_Accomodation', 'Baswa_Accomodation_C', 0.10000277556525103   );
addEdge( 'Baswa_Accomodation_C', 'Baswa_Accomodation_B', 0.10476187787287139   );
addEdge(
  'Baswa_Accomodation_B',
  'Baswa_Accomodation_A',
  0.055348187539340815
  );
addEdge( 'Baswa_Accomodation_A', 'Baswa_Hall', 0.08444694436893871  );
addEdge( 'Baswa_Hall', 'Baswa_Bunglow_1', 0.040280359697184825 );
addEdge( 'Baswa_Bunglow_1', 'Baswa_Bunglow_2', 0.019685490910797843 );
addEdge( 'Baswa_Bunglow_2', 'Baswa_Bunglow_3', 0.031903273993693734 );
addEdge( 'Baswa_Bunglow_3', 'Baswa_Bunglow_4', 0.03127216606141903 );
addEdge( 'Baswa_Bunglow_4', 'Baswa_Bunglow_5', 0.018970422011451823 );
addEdge( 'Baswa_Bunglow_5', 'T_point7', 0.13639242852496525 );
addEdge( 'T_point5', 'Yagnashala_Accomodation', 0.07291934419572176 );
addEdge(
  'Yagnashala_Accomodation',
  'Yagnashala_Accomodation_A',
  0.031319324341615155
  );
  addEdge(
  'Yagnashala_Accomodation_A',
  'Yagnashala_Accomodation_B',
  0.08920648640149849
  );
  addEdge(
  'Yagnashala_Accomodation_B',
  'Yagnashala_Accomodation_C',
  0.08098472748016257
  );
  addEdge(
  'Yagnashala_Accomodation_C',
  'Yagnashala_Accomodation_D',
  0.08397206950835184
  );
addEdge( 'Yagnashala_Accomodation_D', 'Vrinda_Van', 0.04311201092779968          );
addEdge( 'Vrinda_Van', 'Guru_Paduka_Vanam', 0.14779809396605761   );
addEdge( 'T_point18', 'Gate2', 0.04477255122124638   );
addEdge( 'Gate2', 'Soudamini', 0.08126210776816978   );
addEdge( 'Gate2', 'T_point22', 0.013231799655851278   );
addEdge( 'T_point22', 'Vasuki_2', 0.005233260862277253   );
addEdge( 'T_point22', 'Adishesha', 0.0031725264981737064   );
addEdge( 'T_point22', 'T_point23', 0.00784956281924688   );
addEdge( 'T_point23', 'T_point17', 0.12231288142390462   );
addEdge( 'Reception', 'Gate5', 0.09608374531999625   );
addEdge( 'Gate5', 'Cafe_Vishala_Bistro', 0.038440002220560425   );
addEdge( 'Cafe_Vishala_Bistro', 'Sarda_Vihar', 0.9788973747543044   );
addEdge( 'T_point27', 'T_point37', 0.015217981376564348   );
addEdge( 'T_point37', 'Panchamrut', 0.03337031898370859   );
addEdge( 'T_point37', 'Krishna_Kutir', 0.05231451679166771   );
addEdge( 'T_point23', 'T_point29', 0.13500359432770676   );
addEdge( 'T_point29', 'TTP_YLTP_Office', 0.11727281020736421   );
addEdge( 'TTP_YLTP_Office', 'Narayan', 0.25716797748009834   );
addEdge( 'Narayan', 'Devi_Place', 0.02596192924791561   );
addEdge( 'Devi_Place', 'SSRDP', 0.00988392703939946   );
addEdge( 'SSRDP', 'Shanmukha', 0.023648578084469827   );
addEdge( 'Shanmukha', 'Rishimukh', 0.012513566821791538   );
addEdge( 'Rishimukh', 'VVKI', 0.037032291459591   );
addEdge( 'VVKI', 'T_point28', 0.06979251380315368   );
addEdge( 'T_point28', 'SBI', 0.0049289021234955885   );
addEdge( 'T_point28', 'Gate1', 0.022028936765759097   );
addEdge( 'T_point29', 'T_point30', 0.045714866464382345   );
addEdge( 'T_point30', 'Vasishta', 0.026027866528570576   );
addEdge( 'Vasishta', 'Vishwamitra', 0.014686922786494524   );
addEdge( 'T_point30', 'T_point31', 0.055752881449797134   );
addEdge( 'T_point31', 'T_point32', 0.02400497642992372   );
addEdge( 'T_point32', 'Gargi_Dinning_Hall', 0.010602647665023317   );
addEdge( 'T_point32', 'Mahalakshmi_Mantap', 0.028270493458570058   );
addEdge( 'Mahalakshmi_Mantap', 'Sumeru_Mantap', 0.0655084383293151   );
addEdge( 'T_point31', 'Old_Amphitheater', 0.01646452358615202   );
addEdge( 'Old_Amphitheater', 'Arundhati', 0.015156658770954302   );
addEdge( 'Arundhati', 'SSIAS', 0.02392511083968442   );
addEdge( 'SSIAS', 'IAHV', 0.020637101520066068   );
addEdge( 'IAHV', 'T_point28', 0.011323680102084814   );
addEdge( 'T_point7', 'T_point46', 0.1071130118608085              );
addEdge( 'T_point46', 'T_point10', 0.006709517504515269 );
addEdge( 'T_point46', 'Patanjali_Mantap', 0.0073345178695029736 );
addEdge('Shankra_Hall', 'Ganesha_Hall', 0.02596348465167393 );
addEdge( 'T_point34', 'Ganga_Kutir', 0.0572821752069632 );
addEdge( 'Annapoorna', 'Annapoorna_Hall', 0.012188352883448978 );
console.log(graph);