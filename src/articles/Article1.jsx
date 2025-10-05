const Article1 = () => (
  <div className="container" style={{ width: "100%" }}>
    <h2>DETERMINANTS OF TECHNICAL EFFICIENCY OF TOMATO GROWERS IN THE BRONG-AHAFO REGION OF GHANA</h2>
    <p className="authors">
      DR VIJAY K. BHASIN
    </p>
    <p className="affiliation">
      Department of Economics, University of Cape Coast, Cape Coast, Ghana. Telephone: 233-24-364881 (Mobile), 233-42-35560/61 (Office). E-mail: doe@ghana.com / vbhasin96@yahoo.com
    </p>
    <h3>Abstract</h3>
    <p className="abstract">
      The present study identifies the determinants of technical efficiency of agricultural households that grow tomato in the Berekum, Dormaa, and Asutifi districts of the Brong-Ahafo Region of Ghana. The study assesses the contribution of various factors of production in the production of tomatoes and indicates on whose productivity the efforts of the government should be concentrated. The study uses stochastic production function frontier to obtain estimates for the level of technical efficiency of agricultural households that grow tomato. The study shows whether there is any scope for improvement in the level of technical efficiency of these tomato growers at the district level. The study identifies the significant human capital, institutional and socio-economic variables through which the technical efficiency of the agricultural households that grow tomato could be raised and points out the variables on which the efforts of the government should be concentrated. The human capital variables that are being considered are age, education and farming experience of the household head. The institutional variable comprises training experience (extension services). The socio-economic variables that are being considered are occupation of the father of the head of household and soil fertility management practices.
    </p>
    <div className="keywords">
      <strong>Keywords:</strong> Technical efficiency, tomato growers, stochastic production frontier, Brong-Ahafo Region, human capital, extension services, soil fertility management
    </div>

    <h3>Background</h3>
    <p>
      The satisfaction of the ever-growing demand for food remains a major challenge to world agriculture. This is particularly true in the developing world such as Sub-Saharan Africa (SSA) where tremendous socio-economic transformations and geophysical changes are observed to render traditional farming system incapable of meeting this ever-growing demand for food. SSA has been experiencing substantial land degradation and declining soil fertility, leading to lower total agricultural productivity. SSA is the only region of the world where per capita food production has steadily declined over the past two decades. Agricultural output has grown annually by an average of less than 1.5%, with food production increasing at a rate slower than the population growth. This greatly undermines the food security situation of the sub-region (FAO, 2002).
    </p>
    <br />
    <p>
      Ghana is mainly an agricultural country. The country covers an area of approximately 23.9 million sq. km., about 57% of which is agricultural land (Nyanteng & Seini, 2000). The country is divided into six distinct agro-ecological zones, namely the high rain forest, the semi-deciduous ram forest, the forest-savannah transition, the Guinea savannah, the Sudan savannah and the coastal savannah. The conditions of these zones limit the type of crops that can be successfully cultivated. In general, tree crops do better in the forest zones, while food crops do well in the transitional and savannah zones.
    </p>
    <br />
    <p>
      The contribution of the agricultural sector to the Ghanaian economy has stagnated around 36% over the last 5 years (Table 1). In 2000, the share of the sector in total GDP was 36.0% as compared with 36.5% in 1999 and 36.7% in 1998. The industrial sector, accounting about 25.0%, continues to remain the least contributor to national output behind agriculture and service sectors. The services sector has contributed an average of about 28% to the GDP over the past five years.
    </p>
    <br />
    
    <div className="table-container responsive-table-scroll" style={{overflowX: 'auto', marginBottom: '20px'}}>
      <table style={{width: '100%', borderCollapse: 'collapse', border: '1px solid #ddd'}}>
        <caption style={{marginBottom: '10px', fontWeight: 'bold', textAlign: 'left'}}>
          Table 1: GDP by sector at constant 1993 prices (Percent), 1995-2000
        </caption>
        <thead>
          <tr style={{backgroundColor: '#f5f5f5'}}>
            <th style={{border: '1px solid #ddd', padding: '8px', textAlign: 'left'}}>Year</th>
            <th style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>Agriculture</th>
            <th style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>Industry</th>
            <th style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>Services</th>
            <th style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>Others</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>1995</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>36.3</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>24.9</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>28.1</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>10.6</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>1996</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>36.5</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>24.9</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>28.1</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>10.5</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>1997</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>36.6</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>25.4</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>28.7</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>9.3</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>1998</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>36.7</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>25.1</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>29.0</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>9.2</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>1999</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>36.5</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>25.2</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>29.2</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>9.2</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>2000</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>36.0</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>25.2</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>29.7</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>9.2</td>
          </tr>
        </tbody>
      </table>
      <p style={{fontSize: '0.9em', fontStyle: 'italic', marginTop: '5px'}}>
        Source: Ghana Statistical Service, 2000.
      </p>
    </div>

    <p>
      According to Ghana Living Standards Survey (Ghana Statistical Service, 2000), the agricultural sector employs 55.0% of the working age population (15-64 years). There were 730,000 households engaged in the production of tomatoes. The annual value of harvested tomatoes was 75.2 billion cedis and the annual value of sales of tomatoes was 16.8 billion cedis. The mean household income for the Brong-Ahafo Region was 2,302,000 cedis that were above the mean annual household income for Ghana that was 2,267,000 cedis. In the Brong-Ahafo Region, 55.1% of the household income came from household agricultural activities, 27.9% from non-farm self-employment, 9.3% from wage income from employment, 6.0% from remittances, 1.4% from rental income, and 0.3% from other income sources.
    </p>
    <br />

    <div className="table-container responsive-table-scroll" style={{overflowX: 'auto', marginBottom: '20px'}}>
      <table style={{width: '100%', borderCollapse: 'collapse', border: '1px solid #ddd'}}>
        <caption style={{marginBottom: '10px', fontWeight: 'bold', textAlign: 'left'}}>
          Table 2: Production, Area under Cultivation, and Imports of Tomatoes in Ghana, 1983-2000
        </caption>
        <thead>
          <tr style={{backgroundColor: '#f5f5f5'}}>
            <th style={{border: '1px solid #ddd', padding: '8px', textAlign: 'left'}}>Year</th>
            <th style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>Production (Metric tons)</th>
            <th style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>Area under Cultivation (Hectares)</th>
            <th style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>Imports (Metric tons)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>1983</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>57,200</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>12,000</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>493</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>1984</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>45,600</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>9,600</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>500</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>1985</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>38,400</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>7,700</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>600</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>1986</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>38,900</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>8,200</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>667</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>1987</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>91,100</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>19,800</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>667</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>1988</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>78,500</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>15,700</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>3,000</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>1989</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>96,000</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>20,400</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>1,167</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>1990</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>86,400</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>16,300</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>1,033</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>1991</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>91,700</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>17,400</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>12,000</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>1992</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>100,200</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>19,100</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>15,667</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>1993</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>107,000</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>20,000</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>13,000</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>1994</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>181,500</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>33,200</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>10,667</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>1995</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>213,000</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>30,000</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>17,667</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>1996</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>182,000</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>17,800</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>4,141</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>1997</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>219,800</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>22,600</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>5,961</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>1998</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>216,200</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>21,000</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>10,731</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>1999</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>215,000</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>21,000</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>34,246</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>2000</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>200,000</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>37,000</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>43,527</td>
          </tr>
        </tbody>
      </table>
      <p style={{fontSize: '0.9em', fontStyle: 'italic', marginTop: '5px'}}>
        Source: FAO, 2002.
      </p>
    </div>

    <p>
      The production of tomatoes has been continuously declining since 1997 (Table 2). The area under cultivation of tomatoes has increased from 22,600 hectares in 1997 to 37,000 hectares in 2000. This shows that the average productivity of tomato growers has declined during 1997 and 2000. Imports of tomatoes have increased from 5,961 metric tons in 1997 to 43,527 metric tons in 2000. There is a need to increase the production of tomatoes, so that foreign exchange that is spent on the imports of tomatoes could be saved.
    </p>
    <br />


    <p>
      Agricultural productivity depends on the labour productivity, the productivity of land and the technical efficiency of the farm-owner/agricultural household in operational management. As a matter of fact; Oluleye (1991) has argued that increase in output is achievable by improvements in productivity rather than by additional labour and capital. Labour productivity may be affected by the quality of hired and family labour on the farm. Quality of such labour is influenced by factors as education and training, working conditions, social attitudes toward work, efficiency of other factors of production, etc. In a period of economic uncertainty characterised by inflation, declining real value of wages and adverse general socio-economic environment, it may be difficult to raise the productivity of hired labour on the farm. The productivity of land depends on the fertility of soil. The fertility of soil can be improved through the extensive use of organic manure, crop rotation, and chemical fertilisers. Farmyard manure is the most commonly used and readily available fertiliser world-wide. However, soil fertility can be maintained only through the recycling of organic materials such as crop residues and manure in combination with chemical fertilisers. Moreover, the efficiency of fertiliser use increases dramatically when combined with crop residues and manure. Increasing the technical efficiency of the farm-owner/agricultural household can also raise agricultural productivity.
    </p>
    <br />
    <p>
      Estimates for the technical efficiency of farm owner can be obtained by considering the neoclassical 'unitary' model of the household in which the farming household behaves as if it were an individual farmer. However, Udry et. al. (1995) and Udry (1996) have argued that the neoclassical 'unitary' household decision model may not be appropriate for understanding the behaviour of farming households in sub-Saharan Africa and other less developed countries in which households cultivate on multiple plots controlled by different members of the household. They have suggested the collective household model in which intra-household resource allocation is made by using plot level information and characteristics. In such a case, estimates for the technical efficiency of agricultural households can be obtained by considering plot level characteristics. In the present study, we adapt the approach of Udry et. al. (1995) and Udry (1996) by focusing on plot level analysis of technical efficiency of tomato growers. It has been established in the literature that the determinants of technical efficiency of farm owners/agricultural households could be marital status, sex, age, education, farming experience, farm size, access to credit, and extension services.
    </p>
    <br />
    <p>
      The agricultural productivity of households that grow tomato in the Brong-Ahafo region of Ghana may be low because of lack of research and extension services, which are provided by the research institutes and NGOs. In an effort to improve the agricultural productivity, the government of Ghana has set up the Savanna Agricultural Research Institute (SARI) and the Soil Research Institute (SRI). Besides these institutes, Ghanaian-German project for Integrated Crop Protection (ICP) in which the collaborators are the Ministry of Food and Agriculture (MOFA) and the Deutsche Gesellschaft fur Technische Zusammenarbeit Gmbh(GTZ) has been going on in the Berekum, Dormaa and Asutifi districts of the Brong Ahafo Region of Ghana since October, 1997. The participants in this project are the farmers, District Development Officers (DDOs), District Directors of Agriculture (DDAs) and Agricultural Extension Agents (AEAs). Under the ICP project, GTZ teaches farmers how to distinguish between beneficiary and non-beneficiary insects. It also trains farmers in the adoption of innovations such as use of neem, organic manure, sub-soil nursery, weed control, seed selection, row planting, timely harvesting, pruning, optimal spacing, crop rotation, and post-harvest storage.
    </p>
    <br />

    <h3>Characteristics of the Brong-Ahafo Region</h3>
    <p>
      Brong-Ahafo Region is the second largest region in the country in terms of landmass with territorial size of 39,557.08 square kilometers. To its north lies the Northern Region and to the South, lies the Ashanti and Western Regions. The Volta Region is to the east and the Western Region again borders it to the southeast. On Brong-Ahafo's western flank is the Republic of La Cote d'Ivoire. Thus, Brong-Ahafo Region serves as the gateway between the northern and southern parts of Ghana as well as being an international link between the country and the Ivorian economy. The regional capital is Sunyani.
    </p>
    <br />
    <p>
      Generally, the region has a tropical climate with high temperature and relatively high humidity. Rainfall is also high in the southern parts of the region, although this decreases as one moves northwards. There are two types of vegetation in the region. The moist semi-deciduous forest is found mostly in the southern and southeastern parts, while Guinea savannah woodland is predominant in the northern part of region. As at 2000, the region had a population of 1,815,408, giving a population density of 45.9 persons per square kilometer. The region has 13 administrative districts. These are Sunyani, Atebubu, Wenchi, Nkoranza, Techiman, Kintampo, Berekum, Dormaa, Tano, Sene, Jaman, Asunafo, and Asutifi districts. The region has a total of 2,050 kilometers of highways with 35.6% of it paved and 64.4% graveled. There is generally adequate access, through the trunk road network, between Sunyani, the regional capital, and all the district capitals. The feeder road network covers 4,179 kilometers of which 51.5% provides reasonable access to the food growing areas of the region. All the district capitals are linked to the regional capital through the telephone system. All 13-district capitals are connected to the national electricity grid. There is no commercial processing of tomato in the region and due to the perishability of the crop; post-harvest losses are quite high, averaging around 30% (Ghana: We mean Business, 2000).
    </p>
    <br />
    <p>
      The three regions of the study are Berekum, Dormaa, and Asutifi. These regions belong to the western side of the region. Berekum is a small district located at the western part of the Brong-Ahafo Region. It has a total land area of approximately 1062 square kilometers. The district shares boundaries with the Sunyani district in the southeast, Wenchi district in the northwest, Jaman district in the northeast and the Dormaa district in the southwest. Berekum is about 32 Km from Sunyani, the regional capital and about 437 Km from Accra. Berekum is the gateway to La Cote d'Ivoire through the Jaman district. The district is drained by several rivers such as Amomaso, Awasu, Kyimina and Kora. The population of the district is 93,235 (5.1% of the region) people making it the eleventh most populated district in the region. About 68.0% of the labour force is engaged in agriculture. Potentials of the soil characteristics of the district reveal that farm lands have prospects for export crops such as maize, plantain, pepper, ginger, pineapple, mushroom, cashew, sunflower, tomato, black pepper, okro and yam.
    </p>
    <br />
    <p>
      Dormaa district is located in the western part of the Brong-Ahafo region, and is spread over a total land area of 1368 square kilometers. Dormaa Ahenkro, the district capital, is located about 80 kilometers west of the regional capital, Sunyani. The district is linked to Accra by a first class road. The population of the district is 150,299 (8.3% of the region) people making it the sixth most populated district of the region. Agriculture is the main economic activity in the district, employing about 58% of the work force. The main food crops that thrive well in this district are maize, rice, cocoyam, cassava, plantain, and vegetables. The other cash crops that are well supported by the district's soil are cocoa, coffee, oil palm, citrus, cola, and cashew.
    </p>
    <br />
    <p>
      Covering a land surface area of 1500 square kilometers, Asutifi district shares boundaries with Sunyani district to the north, Tano district to the northeast, Dormaa district to the northwest, Asunafo district to the southwest, and the Ashanti region's Ahafo Ano district in the southeast. Kenyasi, the district capital is about 50 Kilometers from Sunyani. The district is drained by the Tano River and its many tributaries, which include Subin, Goa, and Ktotro rivers. The population of the district is 84,485 people (4.7% of the region) making it the twelfth most populated district in the region. There are vast tracts of arable lands and sufficient annual rainfall for tree crops like cocoa, coffee, citrus, oil palm, and pear. Food crops such as maize, legumes, cassava, plantain, cocoyam, and vegetables also do very well.
    </p>
    <br />

    <h3>Problem Statement</h3>
    <p>
      In the Brong-Ahafo region of Ghana, agricultural productivity of the various factors of production and technical efficiency of the agricultural households that grow tomato can be improved through the development and adoption of new technologies, the efficient use of the existing technologies, and the reallocation of resources. Since most of the agricultural household are poor and they face credit constraints, they may not be in a position to raise the agricultural productivity by selecting the first and third options. Therefore, the only option left to these households is to raise their productivity through the efficient use of the existing technologies. Thus, the challenge to policy makers is how to improve technical efficiency of the agricultural households so that large gains in agricultural output of tomatoes can be attained. The technical efficiency is generally estimated using stochastic production function frontiers. However, to increase factor productivity and technical efficiency of the agricultural household require a good knowledge of the level of current efficiency as well as the variations in the level of current efficiency, and the factors on which factor productivity and technical efficiency of the agricultural household depend.
    </p>
    <br />
    <p>
      It is argued that technical efficiency of the agricultural households that grow tomato is determined by plot level characteristics and household characteristics. Factors influencing such characteristics may be divided into two groups - human capital variables that dominate the decision-making process of the members of the household and institutional and socio-economic variables that could influence a farmer's capacity to apply his/her decisions at the plot level without any constraints. The human capital variables are age, education and farming experience of the head of the agricultural household. The institutional variable is the extension services (training experience of the head of the household). The socio-economic variables are the occupation of the father of the household head and index of soil fertility management practices. The index of soil fertility management practices is constructed from fertilizer use, manure use, and crop rotation to account for differences in land quality.
    </p>
    <br />
    <p>
      This research, therefore, seeks to investigate the factors that influence agricultural productivity of tomato growers, and identifies the determinants of their technical efficiency in Berekum, Dormaa and Asutifi districts of the Brong-Ahafo Region of Ghana, with special emphasis on the extension services provided by GTZ.
    </p>
    <br />

    <h3>Objectives of the Study</h3>
    <p>
      The present study tries to answer the following questions with regard to the agricultural households that grow tomato in the Berekum, Dormaa and Asutifi districts of the Brong-Ahafo Region of Ghana: What is their current level of technical efficiency? Is there any scope in the improvement of their technical efficiency? Can we identify the factors that influence their level of technical efficiency? Does the training provided under the Ghanaian-German project for Integrated Crop Protection (ICP) matter for their technical efficiency?
    </p>
    <br />

    <h3>Organisation of the Study</h3>
    <p>
      Section 1 deals with introduction, characteristics of the Brong-Ahafo Region, problem statement, objectives of the study, and organisation of the study. Section 2 presents the literature review. This section is further sub-divided into two sub-sections. Section 2.1 deals with theoretical literature on technical efficiency and allocative efficiency. Section 2.2 deals with the empirical literature. In Section 3, we present the research methods. This section is further sub-divided into four sub-sections. Section 3.1 presents the theoretical framework. Section 3.2 enlists the research hypotheses. Section 3.3 deals with the sampling procedure and data collection. Section 3.4 presents the empirical framework. Section 4 presents the descriptive analysis of data. Section 5.0 presents the analysis of estimated results. This section is further sub-divided into three sections. Section 5.1 presents the maximum likelihood estimates of frontier production functions. Section 5.2 presents estimates for the technical efficiency. Section 5.3 analyses the determinants of technical efficiency. The last section deals with conclusions and policy implications.
    </p>
    <br />

    <h3>Literature Review</h3>
    <h4>Theoretical Literature</h4>
    <p>
      The existing literature emphasises two broad approaches to the estimation of stochastic production frontier and stochastic cost frontier and these are: (a) The non-parametric programming approach and (b) The Statistical approach. The estimation of stochastic production frontier provides estimates for the technical efficiency and the estimation of stochastic cost frontier provides estimates for the allocative efficiency. Technical efficiency reflects the ability of a farmer to obtain maximal output for a given set of inputs. Allocative efficiency reflects the ability of a farmer to use the inputs in optimal proportions, given their respective prices. In the case of a stochastic production frontier, the value of technical efficiency lies between zero and one, while the value of allocative efficiency lies between one and infinity in the stochastic cost function case. If the farmer operates below the stochastic production frontier then it is considered as technically inefficient (the value of technical efficiency is less than one). On the other hand, if the farmer operates above the stochastic cost frontier then it is considered as allocatively inefficient (the value of allocative efficiency is more than one).
    </p>
    <br />
    <p>
      The non-parametric programming approach requires one to construct a free disposal convex hull in the input-output space from a given sample of observations of inputs and outputs. This approach can be used where a farmer produces multiple outputs. In this approach, estimates can be obtained for technical, allocative and scale efficiencies (Farrell, 1957; Afriat 1972; Hanoch and Rothchild, 1972). A major criticism of this approach is that the convex hull, representing the maximum possible output, is derived using only marginal data and not utilising all the observations in the sample. Thus the production efficiency measures are susceptible to outliers and measurement errors (Forsund et.al., 1980). Secondly, the method has very demanding data needs. Finally, this being a non-parametric approach, no statistical inferences from the estimates can be derived.
    </p>
    <br />
    <p>
      The statistical approach can be sub-divided into the neutral-shift frontiers and the non-neutral shift frontiers. The former approach provides estimates for the technical and allocative efficiencies by specifying composed error formulations to the conventional production and cost functions (Aigner et. al., 1977; and Meeusen and van den Broeck, 1977). The latter approach uses a varying coefficients production function formulation (Kalirajan and Obwona, 1994; Obwona, 1995). A major criticism of the statistical approach is that it cannot provide estimates for the technical and allocative efficiencies for those farmers that produce multiple outputs.
    </p>
    <br />

    <h4>Empirical Literature</h4>
    <p>
      The empirical literature on the measurement of technical and allocative efficiency in the agricultural sector of sub-Saharan African countries is very limited. Heshmati and Mulugeta (1996) have estimated the technical efficiency of Uganda's matoke producing farms and established that these farms face decreasing returns to scale in production. The mean technical efficiency of matoke producing farms was found to be 65 percent. This study, however, did not identify the sources of technical efficiency of matoke producing farms. Croppenstedt and Derneke (1997) have estimated the technical efficiency of private farmers engaged in the cereal crop production in Ethiopia and observed that education is weakly correlated with farm efficiency. Admassie and Asfaw (1997) have estimated the technical and allocative efficiency of farmers in Ethiopia and observed that educated farmers are relatively and absolutely more efficient than those without education, and the mean profit efficiency of farmers is 54 percent. Seyoum et. al. (1998) have estimated the technical efficiency and productivity of maize producers in Ethiopia and compared the performance of those farmers which are within and outside the program of technology demonstration. They observed that those farmers that have participated in the program had higher mean technical efficiency of 94 percent in comparison to those who were outside the project with mean technical efficiency of 79 percent. Moreover, they observed that education of farmers and extension services affect the technical efficiency of those farmers participating in the modern technology project. Croppenstedt and Muller (1998) have noted that the average farm specific efficiency of farmers in Ethiopia ranges from 51 to 76 percent depending on the assumed distributional form of the one-sided error.
    </p>
    <br />
    <p>
      Weir (1999) has observed that the farm-level efficiency of cereal crop producers in Ethiopia is approximately 55 percent and increased schooling reduces inefficiency of these farmers. Obwona (2000) has shown for the Tobacco growers of Uganda that the most significant determinants of technical efficiency are the family size, level of education, health status, hired workforce, credit accessibility, fragmentation of land and extension services. Mochebelele and Winter-Nelson (2000) have investigated the impact of labour migration and remittances on the technical efficiency of farms in the rural economy of Lesotho. They have observed that household that send migrant labour to South African mines are more efficient than households that do not send migrant labour. Moreover, they have shown that the remittances of migrant labourers affect the technical efficiency of their households. Weir and Knight (2000) have observed for farmers in Ethiopia that a one year increase in average schooling attained in the household reduces measured farm inefficiency in the production of cereal crops by 2.1 percentage points. Thus, if educational attainment is raised from zero to four years of primary schooling on average in the household, mean efficiency could increase by 15 percent. Owens et. al. (2001) have explored the impact of agricultural extension on farm production in Zimbabwe and found out that the access to agricultural extension services raises the value of crop production by 15 percent. Bhasin (2002) has shown that the significant determinants of technical efficiency of onion growers in the Upper East Region of Ghana are farm experience, distance of the farm from the house of the farmer and extension services. The significant determinants of the technical efficiency of pepper growers in the same region are age of the farmer, distance of the farm from the market, and extension services. On the other hand, the significant determinants of technical efficiency of tomato growers in the Upper East Region of Ghana are age of the farmer, level of education, distance of the farm from the house of the farmer, and soil fertility management practices.
    </p>
    <br />
    <p>
      Most of the empirical studies show that human capital variables (age, level of education), socio-economic variables (family size, health status, hired workforce, labour migration, remittances, distance of the farm from the house of the farmer, distance of the farm from market, soil fertility management practices), institutional variables (access to credit, extension services) and plot level characteristics (fragmentation of land) are important sources of technical efficiency of farm owners/agricultural households. There are virtually no empirical studies in Ghana, which examine the determinants of technical efficiency of agricultural households that grow tomato in the Berekum, Dormaa and Asutifi districts of the Brong-Ahafo region of Ghana.
    </p>
    <br />

    <h3>Research Methods</h3>
    <h4>Theoretical Framework</h4>
    <p>
      In this study, we intend to use the stochastic frontier, also called "Composed error" model of Aigner et al (1977) and Meeusen and van den Broeck (1977). We define the farmer as the head of the agricultural household who controls production activities on sole cropped plots mainly for the production of tomato. Consider a farmer using n inputs (xi, xj, ...,xn) to produce a single output y. Efficient transformation of inputs into output is characterised by the production function f (x), which shows the maximum output obtainable from various input vectors. The stochastic frontier production function is defined as
    </p>
    <p>
      yi = f(xi; a) exp(Vi – Ui), i = 1, 2, .... ,N (1)
    </p>
    <p>
      where Vi is the usual symmetric noise associated with the random factors not under the control of the farm-owner, while the one-sided error Ui with Ui ≥ 0, captures technical inefficiency relative to the Stochastic frontier. The possible production, yi, is bounded above by the stochastic quantity, f(x;a) exp(Vi) (that is when Ui = 0). The random errors, Vi are assumed to be independently and identically distributed as N (s,v2) independent of Ui's. The random error represents random variations in the economic environment facing the production units, luck, weather, machine breakdown and variable input quality; measurement errors and omitted variables from the functional form (Aigner et. al., 1977). The one-sided error represents a variety of features that reflect inefficiency such as firm-specific knowledge; the will, skills, and effort of management and employees; work stoppages, material bottlenecks, and other disruptions to production (Aigner et al., 1977; Lee and Tyler, 1978; Page, 1980). The Ui's are also assumed to be independently and identically distributed as, for example, exponential (Meeusen and van den Broeck, 1977), half normal (Aigner et. al., 1977), truncated normal (Stevenson, 1980), and gamma (Greene, 1980). However, there is no a priori argument that suggests that one form of distribution is superior to another, although different assumptions yield different efficiency levels. In the present study, we assume that Ui's follow truncated normal distribution and use mixed chi-square distribution (Likelihood Ratio Test) to test for the one-sided error.
    </p>
    <br />
    <p>
      Technical efficiency (TE) of an individual farmer is defined as the ratio of the observed output (yi) to the corresponding frontier output (yi*), conditional on the levels of inputs used by the farmer. Thus the technical efficiency of farmer i in the context of the stochastic frontier production function (1) is
    </p>
    <p>
      TEi = yi/yi* = f (xi;a) exp(Vi – Ui) / f(xi, a)exp(Vi) = exp(-Ui) (2)
    </p>
    <p>
      The value of the technical efficiency lies between zero and one. The most efficient farmer will have value one, whereas the less efficient farmers will have their efficiencies lying between zero and one. For our empirical analysis, a translog stochastic frontier production function is assumed to specify the technology of the farmers:
    </p>
    <p>
      lnyi = b0 + Σbj ln xji + ΣΣbjk lnxji xki + Vi – Ui (3)
    </p>
    <p>
      where ln represents the natural logarithm. The maximum likelihood estimates for the parameters of the Stochastic frontier and the predicted technical efficiency/ inefficiency of the farmer for each district will be obtained by using the Computer program, FRONTIER 4.1 (Coelli, 1994), in which the variance parameters are expressed in terms of
    </p>
    <p>
      s2 = (sU2 + sV2), and g = sU2/(sU2 + sV2). (4)
    </p>
    <p>
      The term g represents the ratio of the variance of inefficiency's error term to the total variance of the two error terms defined above. The value of g can range between 0 and 1. The significance of the g parameter can be used to test whether the stochastic frontier production function is preferred to the average production function. If the null hypothesis, that g equals zero, is accepted, this would indicate that sU2 is zero and hence that the Ui term should be removed from the model, leaving a specification with parameters that can be consistently estimated using ordinary least squares. It should be noted that since the input use is correlated with the error terms, the estimates of the production function parameters are biased (Levinsohn and Petron, 2001).
    </p>
    <br />
    <p>
      We estimate the technical efficiency model by regressing the predicted technical efficiency on a vector of human capital variables (age, level of education, and farming experience of the farmer), institutional variables (training experience of the farmer) and socio-economic variables (occupation of the father of the farmer and soil fertility management practices). The technical efficiency model can be specified as
    </p>
    <p>
      TEi = d0 + Σdj Hji (5)
    </p>
    <p>
      where H is a vector of exogenous variables and the parameters of this equation are estimated by OLS. The statistical significance of d's will help us in identifying the variables which determine the technical efficiency of agricultural households that grow tomato in three districts of the Brong-Ahafo Region of Ghana. Thereafter, we re-estimate the preferred model by deleting the insignificant policy variables. The two-stage estimation procedure has been long recognised as one that is inconsistent in its assumptions regarding the independence of the inefficiency effects in the two estimation stages. The two-stage estimation procedure is unlikely to provide estimates that are as efficient as those that could be obtained using a single-stage estimation procedure (Reifschneider and Stevenson, 1991).
    </p>
    <br />

    <h4>Research Hypotheses</h4>
    <p>
      The following hypotheses are tested in the present study:
    </p>
    <div style={{marginLeft: '20px', marginBottom: '20px'}}>
      <p><strong>h01:</strong> There is no difference between the composed error model (two error terms) and the standard production model (one error term).</p>
      <p><strong>H1:</strong> Composed error model is more appropriate in comparison to the standard production model.</p>
      <p><strong>h02:</strong> Human capital variables (age, education and experience of the farmer) do not have any impact on the technical efficiency of agricultural households.</p>
      <p><strong>H2:</strong> Human capital variables do have some impact on the technical efficiency of agricultural households.</p>
      <p><strong>h03:</strong> Institutional variable (extension services) does not have any impact on the technical efficiency of agricultural households.</p>
      <p><strong>H3:</strong> Institutional variable does have some impact on the technical efficiency of agricultural households.</p>
      <p><strong>h04:</strong> Socio-economic variables (occupation of the father of the farmer, soil-fertility management practices) do not have any impact on the technical efficiency of agricultural households.</p>
      <p><strong>H4:</strong> Socio-economic variables do have some impact on the technical efficiency of agricultural households.</p>
    </div>
    <br />

    <h4>Sampling Procedure and Data Collection</h4>
    <p>
      The agricultural households that grow tomato in Berekum, Dormaa and Asutifi districts of the Brong-Ahafo Region of Ghana have been selected for the study. The data collection process required three pilot surveys in order to construct the sampling frames and draw various samples. The sampling frames were constructed with the help of GTZ. The factors that guided us in the construction of sampling frames were the sole-cropped and mapped plots, availability of enumerators, time-frame, the budget and the training activities of GTZ. Three pilot surveys were therefore conducted for this purpose. In the first pilot survey, estimates for the relevant agricultural households in the villages of Berekum, Senase, Koraso, Biadan, Nsapor, Kutre No. 1, Benkase, Kutre No. 2 of the Berekum district of the Brong-Ahafo Region were obtained from the Agricultural Extension Agents. Proportional random sampling procedure was adopted to select a sample of ninety households that grow tomato (around 5%) from the Berekum district. In the second pilot survey, estimates for the relevant agricultural households in the villages of Dormaa-Ahenkro, Nkrankwanta, Dorma-Akwamu, Nsuhia, Yaakrom, Diabaa, Krakrom, Nsesereso of the Dormaa District of the Brong-Ahafo Region were obtained with the help of Agricultural Extension Agents. Again, proportional random sampling procedure was adopted to select a sample of ninety households that grow tomato (around 4%) from the Dormaa district. In the third pilot survey, estimates for the relevant agricultural households that grow tomato in the villages of Kenyasi No. 2, Kenyasi No. 1, Gambia 2, Ntotroso, Nkrankrom, Kensere, Biaso, Gambia 1 of the Asutifi district of Brong-Ahafo Region were obtained with the help of Agricultural Extension Agents. Proportional random sampling procedure was adopted to select a sample of ninety households that grow tomato (around 3.5%) from the Asutifi district. The population and sample sizes of the tomato growers for these districts are indicated in Table 3. The size of the sample for each district was chosen to be the same for comparison purposes.
    </p>
    <br />
    <p>
      Enumerators who were very proficient in the local language were selected and trained for one week so that they could interpret the questionnaires to the agricultural households that grow tomato. Before the final questionnaires were administered, questionnaire testing was conducted on eight respondents from each district. The testing revealed some weaknesses in the structure of some of the questions in original questionnaire. The questionnaire was therefore modified accordingly. Thereafter, pre-tested structured questionnaire was administered to collect the necessary primary data. Such data included information on physical quantities of production inputs as well as outputs. Bhasin and Ekumah (2001) have noticed that the farmers in the study area are literate, and keep simple diary which records output and input data for each plot. Efforts were made to collect accurate information on both inputs and outputs. Data were collected soon after the completion of the harvest. To identify, factors that affect technical efficiency, information was also collected on human capital, institutional and socio-economic variables. There was a follow up to confirm some of the responses provided by the respondents.
    </p>
    <br />
    <p>
      Efforts were made to minimize the measurement error. In case, some measurement error is noticed, "reliability ratio" method as suggested by Dhawan and Jochumzen (1999) is to be used. Cross-sectional data collected provides consistent estimates for the agricultural productivity of various factors of production and technical efficiencies of agricultural households that grow tomato in the three districts.
    </p>
    <br />

    <div className="table-container responsive-table-scroll" style={{overflowX: 'auto', marginBottom: '20px'}}>
      <table style={{width: '100%', borderCollapse: 'collapse', border: '1px solid #ddd'}}>
        <caption style={{marginBottom: '10px', fontWeight: 'bold', textAlign: 'left'}}>
          Table 3: Population and Sample size of Agricultural Households by District/Locality
        </caption>
        <thead>
          <tr style={{backgroundColor: '#f5f5f5'}}>
            <th style={{border: '1px solid #ddd', padding: '8px', textAlign: 'left'}}>District/Locality</th>
            <th style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>Population</th>
            <th style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>Sample</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}><strong>Berekum District</strong></td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>461</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>90</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>Berekum</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>150</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>29</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>Senase</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>60</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>12</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>Koraso</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>55</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>10</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>Biadan</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>42</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>8</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>Nsapor</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>48</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>9</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>Kutre No. 1</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>52</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>10</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>Benkase</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>30</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>7</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>Kutre No. 2</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>24</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>5</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}><strong>Dormaa District</strong></td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>357</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>90</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>Dormaa-Ahenkro</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>130</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>32</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>Nkrankwanta</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>55</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>12</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>Dormaa-Akwamu</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>48</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>11</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>Nsuhia</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>32</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>9</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>Yaakrom</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>26</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>8</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>Diabaa</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>24</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>7</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>Krakrom</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>22</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>6</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>Nsesereso</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>20</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>5</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}><strong>Asutifi District</strong></td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>314</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>90</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>Kenyasi No. 2</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>65</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>18</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>Kenyasi No. 1</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>60</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>15</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>Gambia 2</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>42</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>13</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>Ntotroso</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>40</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>11</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>Nkrankrom</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>32</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>9</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>Kensere</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>30</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>9</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>Biaso</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>22</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>7</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>Gambia 1</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>23</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>8</td>
          </tr>
        </tbody>
      </table>
      <p style={{fontSize: '0.9em', fontStyle: 'italic', marginTop: '5px'}}>
        Source: From the Survey, 2003.
      </p>
    </div>

    <h4>Empirical Framework</h4>
    <p>
      Descriptive statistics such as uni-variate and bi-variate frequency distributions are used to analyse the primary data. In the estimation of production functions, physical output of tomato is the dependent variable. The inputs that are included in the estimation of production functions are man-hours worked, area under cultivation, expenditure on equipment, expenditure on fertilizers and expenditure on seeds. The maximum likelihood method is used to obtain estimates for the parameters of production functions. The likelihood ratio test is used to test the appropriateness stochastic frontier production function in relation to the standard production function. Once it is found that the stochastic frontier production function is more appropriate, estimates for the technical efficiency are obtained. The distribution of technical efficiency for each district is examined to know the scope for improvement in the technical efficiency of agricultural households that grow tomato. Technical efficiency is regressed on human capital, institutional and socio-economic variables. The Ordinary Least Squares (OLS) method is used to obtain estimates for the parameters of the determinants of technical efficiency. The significant determinants of technical efficiency are identified and compared with the other studies.
    </p>
    <br />

    <h3>Descriptive Data Analysis</h3>
    <p>
      The age composition of the head of agricultural households that grow tomato is indicated in Table 4. Male head of households dominate in the production of tomato in these three districts. This may be because males do not allow their wives to take the responsibility of head of household. In the event of husband's death, women become insecure and therefore women should be encouraged to become head of household in these districts. The modal age group for the head of agricultural households that grow tomato in Dormaa and Asutifi districts is 36 to 45 years, whereas the modal age group for them in Berekum district is 26 to 35 years. The age composition suggests that younger people should be encouraged in Dormaa and Asutifi districts to become head of households that grow tomato.
    </p>
    <br />

    <div className="table-container responsive-table-scroll" style={{overflowX: 'auto', marginBottom: '20px'}}>
      <table style={{width: '100%', borderCollapse: 'collapse', border: '1px solid #ddd'}}>
        <caption style={{marginBottom: '10px', fontWeight: 'bold', textAlign: 'left'}}>
          Table 4: Age Composition of the Head of Agricultural Households by sex and district
        </caption>
        <thead>
          <tr style={{backgroundColor: '#f5f5f5'}}>
            <th style={{border: '1px solid #ddd', padding: '8px', textAlign: 'left'}}>Age Group</th>
            <th style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}} colspan="3">Berekum</th>
            <th style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}} colspan="3">Dormaa</th>
            <th style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}} colspan="3">Asutifi</th>
          </tr>         
        </thead>
        <tbody>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}></td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center', fontWeight: 'bold'}}>Male</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center', fontWeight: 'bold'}}>Female</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center', fontWeight: 'bold'}}>Total</td>
           <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center', fontWeight: 'bold'}}>Male</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center', fontWeight: 'bold'}}>Female</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center', fontWeight: 'bold'}}>Total</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center', fontWeight: 'bold'}}>Male</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center', fontWeight: 'bold'}}>Female</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center', fontWeight: 'bold'}}>Total</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>Less than 25</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>10</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>5</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>15</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>8</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>4</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>12</td>
             <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>8</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>2</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>10</td>
          </tr>

           <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>26-35</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>18</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>4</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>22</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>15</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>5</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>20</td>
             <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>12</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>4</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>16</td>
          </tr>

           <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>36-45</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>7</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>4</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>11</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>18</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>7</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>25</td>
             <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>20</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>6</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>26</td>
          </tr>

          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>46-55</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>12</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>6</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>18</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>9</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>6</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>15</td>
             <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>10</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>9</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>19</td>
          </tr>

          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>56-65</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>10</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>4</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>14</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>8</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>2</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>10</td>
             <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>7</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>5</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>12</td>
          </tr>

          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>ABOVE 65</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>5</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>5</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>10</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>5</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>3</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>8</td>
             <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>4</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>3</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>7</td>
          </tr>

          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>TOTAL</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>62</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>28</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>90</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>60</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>30</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>90</td>
             <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>61</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>29</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>90</td>
          </tr>
        </tbody>
      </table>
      
      <p style={{fontSize: '0.9em', fontStyle: 'italic', marginTop: '5px'}}>
        Source: From the Survey, 2003.
      </p>
    </div>

    <p>
      The educational background of the head of agricultural households that grow tomato is presented in Table 5. Majority of the head of agricultural households that grow tomato have at least primary level of education in all the three districts. One reason for this could be that the villages situated in these districts have proper schooling facilities. It seems that educated people are attracted to tomato cultivation. This may be because the cultivation of tomato is more remunerative or requires some technical knowledge that only educated farmers can acquire.
    </p>
    <br />

    <div className="table-container responsive-table-scroll" style={{overflowX: 'auto', marginBottom: '20px'}}>
      <table style={{width: '100%', borderCollapse: 'collapse', border: '1px solid #ddd'}}>
        <caption style={{marginBottom: '10px', fontWeight: 'bold', textAlign: 'left'}}>
          Table 5: Educational Background of the Head of Agricultural Households
        </caption>
        <thead>
          <tr style={{backgroundColor: '#f5f5f5'}}>
            <th style={{border: '1px solid #ddd', padding: '8px', textAlign: 'left'}}>Level of Formal Education </th>
            <th style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}} colspan="2">Berekum</th>
            <th style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}} colspan="2">Dormaa</th>
            <th style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}} colspan="2">Asutifi</th>       
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}></td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center', fontWeight: 'bold'}}>Frequency</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center', fontWeight: 'bold'}}>%</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center', fontWeight: 'bold'}}>Frequency</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center', fontWeight: 'bold'}}>%</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center', fontWeight: 'bold'}}>Frequency</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center', fontWeight: 'bold'}}>%</td> 
          </tr>

          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>No Schooling</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>7</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>7.8</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>10</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>11.1</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>15</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>16.7</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>Primary</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>30</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>33.3</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>25</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>27.8</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>22</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>24.4</td>
          </tr>

          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>Middle/JSS</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>28</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>31.1</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>20</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>22.2</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>25</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>27.8</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>Secondary/SSS</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>12</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>13.3</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>18</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>20.0</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>7</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>7.8</td>
          </tr>
          
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>Vocational/Polytechnic</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>5</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>5.5</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>8</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>8.9</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>8</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>8.9</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>University</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>2</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>2.2</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>5</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>5.6</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>3</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>3.3</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>Adult Education</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>6</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>6.6</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>4</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>4.4</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>10</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>11.1</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>TOTAL</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>90</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>100.0</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>90</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>100.0</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>90</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>100.0</td>
          </tr>
        </tbody>
      </table>

      <p style={{fontSize: '0.9em', fontStyle: 'italic', marginTop: '5px'}}>
        Source: From the Survey, 2003.
      </p>
    </div>
    
    <p>
      The percentage contribution of different sources of income to agricultural household income for various districts is indicated in Table 6. Three sources of agricultural income were identified from the survey and these were incomes from the sale of tomato, sale of other crops, and sale of livestocks. Agricultural income was the major source of income in all the three districts and it contributed 55%, 56.7%, and 50.1% to the household income in Berekum, Dormaa, and Asutifi districts respectively. Sale of tomato contributed 22.5%, 20.7%, and 19.6% to the household income in Berekum, Dormaa, and Asutifi districts respectively. The second most important source of income was non-farm self-employment comprising 26.2%, 24.2%, and 28.9% in Berekum, Dormaa, and Asutifi districts respectively. The third most important source of income was wage income from employment contributing about 10.3%, 9.7%, and 10.1% to household income in Berekum, Dormaa, and Asutifi districts respectively. The least important source of household income was identified as other income in Berekum district, whereas rental income was the least source of household income in Dormaa and Asutifi districts.
    </p>
    <br />

    <div className="table-container responsive-table-scroll" style={{overflowX: 'auto', marginBottom: '20px'}}>
      <table style={{width: '100%', borderCollapse: 'collapse', border: '1px solid #ddd'}}>
        <caption style={{marginBottom: '10px', fontWeight: 'bold', textAlign: 'left'}}>
          Table 6: Percentage Contribution of Sources of Income to Agricultural Household Income
        </caption>
        <thead>
          <tr style={{backgroundColor: '#f5f5f5'}}>
            <th style={{border: '1px solid #ddd', padding: '8px', textAlign: 'left'}}>Sources of Income</th>
            <th style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>Berekum Percentage Contribution</th>
            <th style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>Dormaa Percentage Contribution</th>
            <th style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>Asutifi Percentage Contribution</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>Sale of Tomato</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>22.5</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>20.7</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>19.6</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>Sale of Other Crops</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>26.4</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>28.8</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>25.3</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>Livestock Sales</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>6.1</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>7.2</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>5.2</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>Wage from Employment</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>10.3</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>9.7</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>10.1</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>Non-farm Self-employment</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>26.2</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>24.2</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>28.9</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>Rental</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>1.6</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>1.4</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>1.2</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>Net Remittances</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>6.4</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>5.4</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>8.4</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>Other</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>0.5</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>2.6</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>1.3</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>Total</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>100.0</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>100.0</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>100.0</td>
          </tr>
        </tbody>
      </table>
      <p style={{fontSize: '0.9em', fontStyle: 'italic', marginTop: '5px'}}>
        Source: From the Survey, 2003.
      </p>
    </div>

    <p>
      The types of organic manure used by agricultural households that grow tomato are indicated in Table 7. Majority of the agricultural households that grow tomato in Berekum, Dormaa, and Asutifi districts get their organic manure from livestock droppings. Black soil is the least popular source of organic manure for the agricultural households that grow tomato in the Berekum and Asutifi districts. The agricultural households of Berekum and Asutifi districts should be encouraged to use more of black soil. On the other hand, compost is the least popular source of organic manure for the agricultural households that grow tomato in the Dormaa district and there is a need to encourage the agricultural households of this district to use compost extensively.
    </p>
    <br />

    <div className="table-container responsive-table-scroll" style={{overflowX: 'auto', marginBottom: '20px'}}>
      <table style={{width: '100%', borderCollapse: 'collapse', border: '1px solid #ddd'}}>
        <caption style={{marginBottom: '10px', fontWeight: 'bold', textAlign: 'left'}}>
          Table 7: Type of Organic Manure Used by Agricultural Households in Districts
        </caption>
        <thead>
          <tr style={{backgroundColor: '#f5f5f5'}}>
            <th style={{border: '1px solid #ddd', padding: '8px', textAlign: 'left'}}>Type of Organic Manure</th>
            <th style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>Berekum Frequency</th>
            <th style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>Berekum %</th>
            <th style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>Dormaa Frequency</th>
            <th style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>Dormaa %</th>
            <th style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>Asutifi Frequency</th>
            <th style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>Asutifi %</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>Compost</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>17</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>18.9</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>3</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>3.3</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>6</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>6.7</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>Livestock Droppings</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>80</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>88.9</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>75</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>83.3</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>85</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>94.4</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>Crop Residue</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>66</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>73.3</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>15</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>16.7</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>52</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>57.8</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>Black Soil</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>12</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>13.3</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>8</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>8.9</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>2</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>2.2</td>
          </tr>
        </tbody>
      </table>
      <p style={{fontSize: '0.9em', fontStyle: 'italic', marginTop: '5px'}}>
        Source: From the Survey, 2003.
      </p>
    </div>

    <p>
      The different types of fertilizers that are used by the agricultural households that grow tomato are indicated in Table 8. Sulphate Ammonia is the most popular fertilizer and N.P.K. is the least popular fertilizer among the agricultural households that grow tomato in these three districts. The agricultural households of these districts should be encouraged to use more of compound and N.P.K. fertilizers.
    </p>
    <br />

    <div className="table-container responsive-table-scroll" style={{overflowX: 'auto', marginBottom: '20px'}}>
      <table style={{width: '100%', borderCollapse: 'collapse', border: '1px solid #ddd'}}>
        <caption style={{marginBottom: '10px', fontWeight: 'bold', textAlign: 'left'}}>
          Table 8: Type of Fertilizer Used by Agricultural Households in Districts
        </caption>
        <thead>
          <tr style={{backgroundColor: '#f5f5f5'}}>
            <th style={{border: '1px solid #ddd', padding: '8px', textAlign: 'left'}}>Fertilizer</th>
            <th style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>Berekum Frequency</th>
            <th style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>Berekum %</th>
            <th style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>Dormaa Frequency</th>
            <th style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>Dormaa %</th>
            <th style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>Asutifi Frequency</th>
            <th style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>Asutifi %</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>Compound</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>32</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>35.5</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>35</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>38.9</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>14</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>15.6</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>Sulphate Ammonia</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>75</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>83.3</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>68</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>75.5</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>65</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>72.2</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>N.P.K.</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>10</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>11.1</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>20</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>22.2</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>8</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>8.9</td>
          </tr>
        </tbody>
      </table>
      <p style={{fontSize: '0.9em', fontStyle: 'italic', marginTop: '5px'}}>
        Source: From the Survey, 2003.
      </p>
    </div>

    <p>
      Different types of crop rotation that are practiced by the agricultural households that grow tomato are indicated in Table 9. The incidence of crop rotation is the highest in Berekum district, with 93.3% of the agricultural households practicing crop rotation. The incidence of crop rotation is the lowest in Dormaa district, with 75.6% of the agricultural households practicing crop rotation. There is a need to encourage the agricultural households of the Dormaa district that grow tomato to practice more widely the crop rotation. The most popular crop rotation among the growers of tomato is vegetable-vegetable, i.e. Tomato-other vegetables in all the three districts. This type of crop rotation that is common to all the three districts includes Tomato-onion-cabbage, Tomato-onion, Tomato-pepper, Tomato-okro, and Tomato-cabbage. The second most popular crop rotation is vegetable-cereals, i.e. Tomato followed by other vegetables and cereals in all the three districts. This type of crop rotation that is common to all the three districts includes Tomato followed by cereal. The least popular crop rotation among the growers of tomato is vegetable-legume, i.e. Tomato followed by other vegetables and legumes in all the three districts. This type of crop rotation that is common to all the three districts includes Tomato followed by legumes. The analysis indicated in Tables 7, 8 and 9 shows that tomato growers have been practicing different types of soil fertility management practices in order to sustain the soil fertility in these districts.
    </p>
    <br />

    <div className="table-container responsive-table-scroll" style={{overflowX: 'auto', marginBottom: '20px'}}>
      <table style={{width: '100%', borderCollapse: 'collapse', border: '1px solid #ddd'}}>
        <caption style={{marginBottom: '10px', fontWeight: 'bold', textAlign: 'left'}}>
          Table 9: Types of Crop Rotation Practiced by Agricultural Households in Districts
        </caption>
        <thead>
          <tr style={{backgroundColor: '#f5f5f5'}}>
            <th style={{border: '1px solid #ddd', padding: '8px', textAlign: 'left'}}>Type of Crop Rotation</th>
            <th style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>Berekum Frequency</th>
            <th style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>Berekum %</th>
            <th style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>Dormaa Frequency</th>
            <th style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>Dormaa %</th>
            <th style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>Asutifi Frequency</th>
            <th style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>Asutifi %</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>Vegetable-Vegetable</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>65</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>72.2</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>50</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>55.6</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>60</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>66.7</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>Vegetable-Cereal</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>15</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>16.7</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>12</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>13.3</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>14</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>15.6</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>Vegetable-Legume</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>4</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>4.4</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>6</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>6.7</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>5</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>5.6</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #ddd', padding: '8px'}}>Total Practicing Crop Rotation</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>84</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>93.3</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>68</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>75.6</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>79</td>
            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'center'}}>87.8</td>
          </tr>
        </tbody>
      </table>
      <p style={{fontSize: '0.9em', fontStyle: 'italic', marginTop: '5px'}}>
        Source: From the Survey, 2003.
      </p>
    </div>

    <h3>Analysis of Estimated Results</h3>
    <h4>Maximum Likelihood Estimates of Frontier Production Functions</h4>
    <p>
      The maximum likelihood estimates of the stochastic frontier production function for tomato growers in Berekum, Dormaa, and Asutifi districts were obtained using the FRONTIER 4.1 software. The translog production function was employed, incorporating inputs such as man-hours worked, area under cultivation, expenditure on equipment, fertilizers, and seeds. The results indicate that the stochastic frontier model is appropriate, as the likelihood ratio test rejected the null hypothesis (h01) that the standard production model with one error term is sufficient. The parameter gamma (γ), representing the ratio of the variance of inefficiency to the total variance, was significant (p {'<'} 0.05) across all districts, confirming the presence of technical inefficiency in tomato production.
    </p>
    <br />

    <p>
      In Berekum, the area under cultivation and expenditure on fertilizers were the most significant inputs (p {'<'} 0.01), contributing positively to output. In Dormaa, man-hours worked and seeds showed significant positive effects (p {'<'} 0.05), while in Asutifi, equipment expenditure and fertilizers were key drivers (p {'<'} 0.01). The elasticity of output with respect to these inputs suggests that increasing fertilizer use and land area could significantly boost tomato production, particularly in Berekum and Asutifi.
    </p>
    <br />

    <h4>Estimates for Technical Efficiency</h4>
    <p>
      The mean technical efficiency scores for tomato growers were estimated as 0.78, 0.72, and 0.75 for Berekum, Dormaa, and Asutifi districts, respectively. These scores indicate that, on average, tomato growers in these districts are operating at 72–78% of their potential output, given the current input levels and technology. The distribution of technical efficiency scores shows that 20% of households in Berekum, 25% in Dormaa, and 22% in Asutifi operate at efficiency levels above 0.85, suggesting a moderate scope for improvement. The lowest efficiency scores (below 0.60) were observed in 10% of households in Dormaa, indicating potential for significant productivity gains through targeted interventions.
    </p>
    <br />

    <p>
      The variation in technical efficiency across districts suggests that local factors, such as soil quality and access to extension services, play a critical role. Berekum’s higher mean efficiency may be attributed to its greater adoption of crop rotation (93.3%) and use of livestock droppings (88.9%), which enhance soil fertility.
    </p>
    <br />

    <h4>Determinants of Technical Efficiency</h4>
    <p>
      The technical efficiency scores were regressed on human capital, institutional, and socio-economic variables using Ordinary Least Squares (OLS). The results confirm that several variables significantly influence technical efficiency, supporting the rejection of null hypotheses h02, h03, and h04.
    </p>
    <br />

    <p>
      <strong><em>Human Capital Variables:</em></strong> The age of the household head was significant (p {'<'} 0.05) in Berekum and Asutifi, with younger farmers (26–35 years) exhibiting higher efficiency due to greater physical capability and openness to new techniques. Education was a significant determinant (p {'<'} 0.01) across all districts, with households headed by individuals with at least primary education showing higher efficiency. Farming experience was significant (p {'<'} 0.05) in Dormaa, where farmers with over 10 years of experience demonstrated better resource management.
    </p>
    <p>
      <strong><em>Institutional Variables:</em></strong> Access to extension services, particularly through the Ghanaian-German Integrated Crop Protection (ICP) project, was highly significant (p {'<'} 0.01) in all districts. Farmers who received training on practices such as neem use, row planting, and timely harvesting exhibited higher technical efficiency. In Berekum, 70% of sampled households accessed extension services, compared to 60% in Dormaa and 65% in Asutifi, explaining some of the efficiency differences.
    </p>
    <p>
      <strong><em>Socio-Economic Variables:</em></strong> The occupation of the father of the household head was significant (p {'<'} 0.05) in Berekum and Dormaa, where households with a farming background showed higher efficiency due to inherited knowledge. Soil fertility management practices, measured as an index of fertilizer use, manure application, and crop rotation, were significant (p {'<'} 0.01) across all districts. Households practicing vegetable-vegetable crop rotation and using livestock droppings had higher efficiency scores, particularly in Berekum.
    </p>
    <br />

    <p>
      The regression results suggest that improving access to education and extension services, along with promoting soil fertility management practices, could significantly enhance technical efficiency. The low adoption of N.P.K. fertilizers and compost in Dormaa indicates a need for targeted interventions to encourage their use.
    </p>
    <br />

    <h3>Conclusions and Policy Implications</h3>
    <p>
      The study reveals that tomato growers in the Berekum, Dormaa, and Asutifi districts of the Brong-Ahafo Region operate at moderate levels of technical efficiency, with mean scores ranging from 0.72 to 0.78. There is considerable scope for improving efficiency, particularly in Dormaa, where efficiency is lowest. Key determinants of technical efficiency include the age and education of the household head, farming experience, access to extension services, and soil fertility management practices. The Ghanaian-German ICP project has been instrumental in improving efficiency through training, but its reach needs to be expanded, especially in Dormaa, where only 60% of households accessed these services.
    </p>
    <br />

    <p>
      Policy recommendations include:
      <ol style={{marginLeft: '20px', marginBottom: '20px'}}>
        <li><strong>Enhancing Extension Services:</strong> The government and NGOs should expand the ICP project to cover more farmers, focusing on Dormaa, where crop rotation and compost use are low. Training should emphasize modern techniques like row planting, optimal spacing, and integrated pest management.</li>
        <li><strong>Promoting Education:</strong> Investments in primary and secondary education for rural households can enhance technical efficiency, as educated farmers are more likely to adopt efficient practices.</li>
        <li><strong>Improving Soil Fertility Management:</strong> Encourage the use of N.P.K. fertilizers and compost, particularly in Dormaa, through subsidies and demonstrations. Promote vegetable-legume crop rotation to improve soil nitrogen levels.</li>
        <li><strong>Targeting Younger Farmers:</strong> Policies should encourage younger farmers to take up tomato production, especially in Dormaa and Asutifi, where older farmers dominate.</li>
        <li><strong>Addressing Post-Harvest Losses:</strong> Given the 30% post-harvest losses reported, investments in storage facilities and market access can improve overall productivity and income.</li>
      </ol>
    </p>
    <p>
      By focusing on these areas, the government can enhance the technical efficiency of tomato growers, reduce reliance on imports, and improve food security and household incomes in the Brong-Ahafo Region. Further research should explore the role of credit access and gender dynamics in technical efficiency to provide a more comprehensive understanding of agricultural productivity constraints.
    </p>
    <br />

    <h3>References</h3>
    <ul className="references">
      <li>Afriat, S. (1972). Efficiency Estimation of Production Functions. <em>International Economic Review</em>, 13, 568–598.</li>
      <li>Aigner, D., Lovell, C. A. K., & Schmidt, P. (1977). Formulation and Estimation of Stochastic Frontier Production Function Models. <em>Journal of Econometrics</em>, 6, 21–37.</li>
      <li>Admassie, A., & Asfaw, H. (1997). Technical and Allocative Efficiency of Farmers in Ethiopia. <em>Ethiopian Journal of Agricultural Economics</em>, 1(1), 1–15.</li>
      <li>Bhasin, V. K. (2002). Technical Efficiency of Onion and Pepper Growers in the Upper East Region of Ghana. <em>Journal of Agricultural Economics</em>, 5(2), 45–60.</li>
      <li>Bhasin, V. K., & Ekumah, E. K. (2001). Farm Record Keeping and Productivity in Ghana. <em>African Journal of Agricultural Research</em>, 3(2), 23–35.</li>
      <li>Coelli, T. J. (1994). A Guide to FRONTIER Version 4.1: A Computer Program for Stochastic Frontier Production and Cost Function Estimation. <em>CEPA Working Papers</em>, University of New England.</li>
      <li>Croppenstedt, A., & Derneke, M. (1997). Technical Efficiency of Cereal Crop Producers in Ethiopia. <em>Ethiopian Journal of Agricultural Economics</em>, 1(2), 34–49.</li>
      <li>Croppenstedt, A., & Muller, C. (1998). Farm Efficiency in Ethiopia: A Stochastic Frontier Approach. <em>Journal of Development Studies</em>, 34(3), 56–78.</li>
      <li>Dhawan, R., & Jochumzen, P. (1999). Measurement Error in Agricultural Surveys. <em>Journal of Agricultural Statistics</em>, 2(1), 12–25.</li>
      <li>FAO. (2002). <em>The State of Food and Agriculture</em>. Food and Agriculture Organization of the United Nations, Rome.</li>
      <li>Farrell, M. J. (1957). The Measurement of Productive Efficiency. <em>Journal of the Royal Statistical Society</em>, 120(3), 253–281.</li>
      <li>Forsund, F. R., Lovell, C. A. K., & Schmidt, P. (1980). A Survey of Frontier Production Functions and of their Relationship to Efficiency Measurement. <em>Journal of Econometrics</em>, 13, 5–25.</li>
      <li>Ghana Statistical Service. (2000). <em>Ghana Living Standards Survey</em>. Accra, Ghana.</li>
      <li>Ghana: We Mean Business. (2000). <em>Investment Opportunities in Brong-Ahafo Region</em>. Ministry of Trade and Industry, Ghana.</li>
      <li>Greene, W. H. (1980). Maximum Likelihood Estimation of Econometric Frontier Functions. <em>Journal of Econometrics</em>, 13, 27–56.</li>
      <li>Hanoch, G., & Rothchild, M. (1972). Testing the Assumptions of Production Theory: A Nonparametric Approach. <em>Journal of Political Economy</em>, 80, 256–275.</li>
      <li>Heshmati, A., & Mulugeta, Y. (1996). Technical Efficiency of Matoke Farms in Uganda. <em>African Development Review</em>, 8(2), 45–60.</li>
      <li>Kalirajan, K. P., & Obwona, M. B. (1994). Frontier Production Functions: A Stochastic Approach. <em>Journal of African Economies</em>, 3(2), 234–250.</li>
      <li>Lee, L. F., & Tyler, W. G. (1978). The Stochastic Frontier Production Function and Average Efficiency. <em>Journal of Econometrics</em>, 7, 385–389.</li>
      <li>Meeusen, W., & van den Broeck, J. (1977). Efficiency Estimation from Cobb-Douglas Production Functions with Composed Error. <em>International Economic Review</em>, 18, 435–444.</li>
      <li>Mochebelele, M., & Winter-Nelson, A. (2000). Migrant Labor and Farm Efficiency in Lesotho. <em>World Development</em>, 28(1), 143–153.</li>
      <li>Nyanteng, V. K., & Seini, A. W. (2000). Agricultural Policy and the Impact on Food Security in Ghana. <em>Journal of Agricultural Economics</em>, 4(1), 12–28.</li>
      <li>Obwona, M. B. (1995). Estimating Technical Efficiency in Ugandan Agriculture. <em>African Journal of Agricultural Research</em>, 1(1), 34–45.</li>
      <li>Obwona, M. B. (2000). Determinants of Technical Efficiency Among Tobacco Growers in Uganda. <em>African Development Review</em>, 12(1), 56–70.</li>
      <li>Owens, T., Hoddinott, J., & Kinsey, B. (2001). The Impact of Agricultural Extension on Farm Production in Zimbabwe. <em>Agricultural Economics</em>, 25(3), 337–346.</li>
      <li>Page, J. M. (1980). Technical Efficiency and Economic Performance: Some Evidence from Ghana. <em>Oxford Economic Papers</em>, 32(2), 319–339.</li>
      <li>Reifschneider, D., & Stevenson, R. (1991). Systematic Departures from the Frontier: A Framework for the Analysis of Firm Inefficiency. <em>International Economic Review</em>, 32, 715–723.</li>
      <li>Seyoum, E. T., Battese, G. E., & Fleming, E. M. (1998). Technical Efficiency and Productivity of Maize Producers in Ethiopia. <em>Agricultural Economics</em>, 19(1–2), 177–185.</li>
      <li>Stevenson, R. E. (1980). Likelihood Functions for Generalized Stochastic Frontier Estimation. <em>Journal of Econometrics</em>, 13, 57–66.</li>
      <li>Udry, C. (1996). Gender, Agricultural Production, and the Theory of the Household. <em>Journal of Political Economy</em>, 104(5), 1010–1046.</li>
      <li>Udry, C., Hoddinott, J., Alderman, H., & Haddad, L. (1995). Gender Differentials in Farm Productivity: Implications for Household Efficiency and Agricultural Policy. <em>Food Policy</em>, 20(5), 407–423.</li>
      <li>Weir, S. (1999). The Effects of Education on Farmer Productivity in Rural Ethiopia. <em>Oxford Development Studies</em>, 27(3), 321–338.</li>
      <li>Weir, S., & Knight, J. (2000). Education Externalities in Rural Ethiopia: Evidence from Average and Stochastic Frontier Production Functions. <em>CSA Working Paper</em>, University of Oxford.</li>
    </ul>
   
  </div>

);

export default Article1;