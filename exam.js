const questions = [
    // ==================== PHYSICS (1-45) ====================
    {
        question: "A drunkard walking in a narrow lane takes 5 steps forward and 3 steps backward, followed again by 5 steps forward and 3 steps backward, and so on. Each step is 1 m long and requires 1 s. The time taken by the drunkard to fall in a pit 13 m away is:",
        options: ["25 s", "37 s", "41 s", "49 s"],
        answer: 2,
        subject: "Physics"
    },
    {
        question: "A car moves in a horizontal circle along the vertical wall of a 'death well' of radius 5 m. The coefficient of static friction is 0.5. The minimum speed to prevent sliding down is (g = 10 m/s²):",
        options: ["5 m/s", "10 m/s", "15 m/s", "20 m/s"],
        answer: 1,
        subject: "Physics"
    },
    {
        question: "Work done by a conservative force in moving a particle from A to B is 40 J and from B to C is −90 J. Work done from C to A is:",
        options: ["50 J", "−50 J", "130 J", "−130 J"],
        answer: 0,
        subject: "Physics"
    },
    {
        question: "Three identical rods each of length L and mass M are joined to form letter H. Moment of inertia about an axis along one vertical side is:",
        options: ["(5/3)ML²", "(11/3)ML²", "(13/3)ML²", "2ML²"],
        answer: 1,
        subject: "Physics"
    },
    {
        question: "1 dyne is equal to:",
        options: ["10⁻⁵ N", "10⁻⁷ N", "10⁻³ N", "10⁵ N"],
        answer: 0,
        subject: "Physics"
    },
    {
        question: "If d = a²b¹/² / c³ and percentage errors in a, b, c are 1%, 4%, 2% respectively, maximum percentage error in d is:",
        options: ["4%", "6%", "8%", "10%"],
        answer: 2,
        subject: "Physics"
    },
    {
        question: "A block of mass 2 kg is attached to a spring of force constant 200 N/m. The elongation of spring when the block just lifts off the ground is (g = 10 m/s²):",
        options: ["0.1 m", "0.2 m", "0.05 m", "0.5 m"],
        answer: 0,
        subject: "Physics"
    },
    {
        question: "A waterfall of height 100 m has water flow rate 10⁵ kg/min. Efficiency of conversion is 50%. Power available is:",
        options: ["8.33 × 10⁵ W", "1.67 × 10⁶ W", "5 × 10⁵ W", "10⁵ W"],
        answer: 0,
        subject: "Physics"
    },
    {
        question: "Minimum speed at bottom for a particle to complete vertical circle of radius r when attached to a string is:",
        options: ["√(2gr)", "√(3gr)", "√(5gr)", "√(gr)"],
        answer: 2,
        subject: "Physics"
    },
    {
        question: "A stuntman jumps over 5 buses each of length 8 m. Take-off angle is 45°. Minimum speed required (g = 10 m/s²) is:",
        options: ["20 m/s", "28.3 m/s", "40 m/s", "14.1 m/s"],
        answer: 1,
        subject: "Physics"
    },
    {
        question: "Inertia of a body depends on:",
        options: ["Mass only", "Velocity only", "Acceleration only", "Force only"],
        answer: 0,
        subject: "Physics"
    },
    {
        question: "A particle starts from rest with angular acceleration 2 rad/s² in a circle of radius 1 m. Distance covered in 4th second is:",
        options: ["7 m", "14 m", "21 m", "28 m"],
        answer: 0,
        subject: "Physics"
    },
    {
        question: "Coefficient of restitution e = 1 means collision is:",
        options: ["Perfectly inelastic", "Perfectly elastic", "Partially elastic", "Explosive"],
        answer: 1,
        subject: "Physics"
    },
    {
        question: "Most suitable instrument to measure diameter of a thin wire is:",
        options: ["Metre scale", "Vernier caliper", "Screw gauge", "Travelling microscope"],
        answer: 2,
        subject: "Physics"
    },
    {
        question: "In an isolated system, if a body breaks into two parts, which quantity is conserved?",
        options: ["Kinetic energy", "Linear momentum", "Potential energy", "Angular velocity"],
        answer: 1,
        subject: "Physics"
    },
    {
        question: "A rod of mass m and length L is hinged at one end and released from horizontal position. Angular speed when it becomes vertical is:",
        options: ["√(3g/L)", "√(6g/L)", "√(2g/L)", "√(g/L)"],
        answer: 1,
        subject: "Physics"
    },
    {
        question: "Two particles move towards each other under mutual attraction. Speed of centre of mass is:",
        options: ["Zero", "Constant non-zero", "Increasing", "Decreasing"],
        answer: 0,
        subject: "Physics"
    },
    {
        question: "Dimensional analysis can be used to:",
        options: ["Only convert units", "Only check correctness of equation", "Convert units and check equation", "None"],
        answer: 2,
        subject: "Physics"
    },
    {
        question: "A ball falls with constant velocity. Net work done by all forces is:",
        options: ["Positive", "Negative", "Zero", "Cannot say"],
        answer: 2,
        subject: "Physics"
    },
    {
        question: "An elevator descends with acceleration a. Apparent weight of a body of mass m is mg/4. Value of a is:",
        options: ["g/4", "3g/4", "g/2", "g"],
        answer: 1,
        subject: "Physics"
    },
    {
        question: "A river flows at 2 m/s. Boat speed in still water is 5 m/s. Boat heads perpendicular to current. Speed relative to ground is:",
        options: ["√21 m/s", "3 m/s", "7 m/s", "√29 m/s"],
        answer: 0,
        subject: "Physics"
    },
    {
        question: "Two blocks of masses 2 kg and 4 kg are connected by a string. Coefficient of friction is 0.2. Maximum force so that both move together is (g = 10 m/s²):",
        options: ["12 N", "18 N", "24 N", "6 N"],
        answer: 1,
        subject: "Physics"
    },
    {
        question: "A particle moves in a circle of radius 2 m with constant speed 4 m/s. Centripetal acceleration is:",
        options: ["4 m/s²", "8 m/s²", "2 m/s²", "16 m/s²"],
        answer: 1,
        subject: "Physics"
    },
    {
        question: "Angle between vectors A and B is 60° and between B and C is 30°. Angle between A and C can be:",
        options: ["30° only", "90° only", "30° or 90°", "60° only"],
        answer: 2,
        subject: "Physics"
    },
    {
        question: "A disc of radius R has a square hole of side R/√2. y-coordinate of centre of mass (hole centre on y-axis) is:",
        options: ["−R/4π", "R/4π", "−R/2π", "R/2π"],
        answer: 0,
        subject: "Physics"
    },
    {
        question: "Velocity-time graph of a particle is a straight line from (0,0) to (4,8). Maximum distance from origin occurs at:",
        options: ["2 s", "4 s", "6 s", "8 s"],
        answer: 1,
        subject: "Physics"
    },
    {
        question: "Moment of inertia of a disc of mass M and radius R about its diameter is:",
        options: ["MR²/2", "MR²/4", "MR²", "2MR²"],
        answer: 1,
        subject: "Physics"
    },
    {
        question: "Work done to stretch a spring by x is 20 J. Additional work to stretch it further by x is:",
        options: ["20 J", "40 J", "60 J", "80 J"],
        answer: 2,
        subject: "Physics"
    },
    {
        question: "Five identical balls collide elastically in a line. First ball has speed v. Final speed of last ball is:",
        options: ["0", "v/5", "v/2", "v"],
        answer: 3,
        subject: "Physics"
    },
    {
        question: "Angular velocity ω = 3t² + 2. Angular acceleration at t = 2 s is:",
        options: ["6 rad/s²", "12 rad/s²", "14 rad/s²", "18 rad/s²"],
        answer: 1,
        subject: "Physics"
    },
    {
        question: "Number of significant figures in 0.00250 is:",
        options: ["2", "3", "4", "5"],
        answer: 1,
        subject: "Physics"
    },
    {
        question: "A police van moving at 30 m/s fires a bullet at 200 m/s relative to van. Speed of bullet relative to ground is:",
        options: ["170 m/s", "230 m/s", "200 m/s", "30 m/s"],
        answer: 1,
        subject: "Physics"
    },
    {
        question: "A rod of length L is bent at midpoint into right angle. Distance of centre of mass from bend is:",
        options: ["L/4", "L/2√2", "L/√2", "L/8"],
        answer: 1,
        subject: "Physics"
    },
    {
        question: "A helicopter flying at 20 m/s at height 80 m drops a package. Time to reach ground (g = 10 m/s²) is:",
        options: ["2 s", "4 s", "8 s", "√16 s"],
        answer: 1,
        subject: "Physics"
    },
    {
        question: "Force F = (3i − 4j) N acts at point (2,3) m. Torque about origin is:",
        options: ["17 k Nm", "−17 k Nm", "6 k Nm", "0"],
        answer: 0,
        subject: "Physics"
    },
    {
        question: "By parallel axis theorem, I = ICM + Md². If d is doubled, increase in I is:",
        options: ["3Md²", "4Md²", "Md²", "2Md²"],
        answer: 0,
        subject: "Physics"
    },
    {
        question: "Perpendicular axes theorem is applicable to:",
        options: ["3D bodies", "Planar bodies", "Only spheres", "Only cylinders"],
        answer: 1,
        subject: "Physics"
    },
    {
        question: "A spring of constant k is cut into three equal parts. Two parts in parallel connected to third in series. Equivalent k is:",
        options: ["k", "3k/2", "2k", "3k"],
        answer: 1,
        subject: "Physics"
    },
    {
        question: "Potential energy decreases by 50 J. Work done by conservative force is:",
        options: ["−50 J", "50 J", "0", "100 J"],
        answer: 1,
        subject: "Physics"
    },
    {
        question: "Minimum work to raise a uniform rod of mass M and length L from horizontal to vertical is:",
        options: ["MgL/2", "MgL", "MgL/4", "2MgL"],
        answer: 0,
        subject: "Physics"
    },
    {
        question: "A particle of mass m moves with v = α√x. Work done from x = 0 to x = a is:",
        options: ["(1/2)mα²a", "mα²a", "(1/4)mα²a", "2mα²a"],
        answer: 0,
        subject: "Physics"
    },
    {
        question: "Change in momentum is equal to:",
        options: ["Force × time", "Force × distance", "Mass × velocity", "Work"],
        answer: 0,
        subject: "Physics"
    },
    {
        question: "A body of mass 2 kg has acceleration 3 m/s². Force acting is:",
        options: ["6 N", "1.5 N", "5 N", "0"],
        answer: 0,
        subject: "Physics"
    },
    {
        question: "Unit of impulse is same as:",
        options: ["Force", "Momentum", "Energy", "Power"],
        answer: 1,
        subject: "Physics"
    },
    {
        question: "A force of 10 N acts for 2 s on a body of mass 5 kg initially at rest. Final velocity is:",
        options: ["2 m/s", "4 m/s", "5 m/s", "10 m/s"],
        answer: 1,
        subject: "Physics"
    },

    // ==================== CHEMISTRY (46-90) ====================
    {
        question: "For a zero order reaction, concentration vs time graph is:",
        options: ["Straight line with positive slope", "Straight line with negative slope", "Exponential curve", "Parabola"],
        answer: 1,
        subject: "Chemistry"
    },
    {
        question: "Ionic radii of N³⁻, O²⁻, F⁻ are in order:",
        options: ["N³⁻ > O²⁻ > F⁻", "F⁻ > O²⁻ > N³⁻", "O²⁻ > N³⁻ > F⁻", "F⁻ > N³⁻ > O²⁻"],
        answer: 0,
        subject: "Chemistry"
    },
    {
        question: "Charge required to deposit 0.5 mol of Ni from NiSO₄ is:",
        options: ["1 F", "2 F", "0.5 F", "4 F"],
        answer: 0,
        subject: "Chemistry"
    },
    {
        question: "Half life of first order reaction is 20 min. Percentage completed in 100 min is approximately:",
        options: ["75%", "87.5%", "96.9%", "99.9%"],
        answer: 2,
        subject: "Chemistry"
    },
    {
        question: "Solution showing positive deviation from Raoult’s law is formed by:",
        options: ["Acetone + Chloroform", "Acetone + Ethanol", "HCl + Water", "HNO₃ + Water"],
        answer: 1,
        subject: "Chemistry"
    },
    {
        question: "For endothermic reaction, increase in temperature and decrease in pressure favours:",
        options: ["Reactants", "Products", "No change", "Equilibrium constant decreases"],
        answer: 1,
        subject: "Chemistry"
    },
    {
        question: "ΔfH of PCl₅ from given data is −772 kJ/mol. The value is:",
        options: ["Positive", "Negative", "Zero", "Cannot say"],
        answer: 1,
        subject: "Chemistry"
    },
    {
        question: "Moles of K₂Cr₂O₇ reduced by 1 mole Sn²⁺ in acidic medium is:",
        options: ["1/3", "2/3", "1", "3/2"],
        answer: 0,
        subject: "Chemistry"
    },
    {
        question: "For reaction N₂ + 3H₂ ⇌ 2NH₃, K = 4. For ½N₂ + ³⁄₂H₂ ⇌ NH₃, K is:",
        options: ["2", "√4", "4", "16"],
        answer: 1,
        subject: "Chemistry"
    },
    {
        question: "An atom has 2K, 8L, 6M electrons. Number of d-electrons is:",
        options: ["0", "2", "4", "6"],
        answer: 0,
        subject: "Chemistry"
    },
    {
        question: "Mass of carbon in 0.1 mol K₄[Fe(CN)₆] is:",
        options: ["7.2 g", "1.2 g", "14.4 g", "3.6 g"],
        answer: 0,
        subject: "Chemistry"
    },
    {
        question: "If 4 A for 2 min deposits m g Ag, then 6 A for 40 s deposits:",
        options: ["m/2", "2m/3", "m", "3m/2"],
        answer: 1,
        subject: "Chemistry"
    },
    {
        question: "ΔS for ice → water at 0°C (ΔH = 6 kJ/mol) is approximately:",
        options: ["22 J/K mol", "0.022 J/K mol", "220 J/K mol", "2.2 J/K mol"],
        answer: 0,
        subject: "Chemistry"
    },
    {
        question: "For PCl₅ ⇌ PCl₃ + Cl₂, if 40% dissociates in 2 L vessel starting with 2 mol, Kc is:",
        options: ["0.266", "0.133", "0.532", "0.8"],
        answer: 0,
        subject: "Chemistry"
    },
    {
        question: "Oxidising behaviour of H₂SO₄ is shown in:",
        options: ["2HI + H₂SO₄ → I₂ + SO₂ + 2H₂O", "NaCl + H₂SO₄ → NaHSO₄ + HCl", "Ca(OH)₂ + H₂SO₄ → CaSO₄ + 2H₂O", "Both A and B"],
        answer: 0,
        subject: "Chemistry"
    },
    {
        question: "Vapour pressure and osmotic pressure are:",
        options: ["Both colligative", "Only vapour pressure colligative", "Only osmotic pressure colligative", "Neither"],
        answer: 0,
        subject: "Chemistry"
    },
    {
        question: "Number of spectral lines when electron jumps from n = 5 to n = 2 is:",
        options: ["3", "6", "10", "4"],
        answer: 1,
        subject: "Chemistry"
    },
    {
        question: "For SO₂ + ½O₂ ⇌ SO₃, equilibrium constant expression is:",
        options: ["[SO₃]/[SO₂][O₂]½", "[SO₃]²/[SO₂]²[O₂]", "[SO₂][O₂]/[SO₃]", "None"],
        answer: 0,
        subject: "Chemistry"
    },
    {
        question: "E° for Fe³⁺/Fe²⁺ if K = 10⁸ for 2Fe³⁺ + 2I⁻ ⇌ 2Fe²⁺ + I₂ (E° I₂/I⁻ = 0.54 V) is approximately:",
        options: ["0.77 V", "0.54 V", "0.30 V", "1.0 V"],
        answer: 0,
        subject: "Chemistry"
    },
    {
        question: "Autoprotolysis constant of NH₃ is:",
        options: ["[NH₄⁺][NH₂⁻]", "[NH₄⁺]/[NH₃]", "[NH₂⁻]/[NH₃]", "[NH₃]²"],
        answer: 0,
        subject: "Chemistry"
    },
    {
        question: "First ionisation enthalpy of Na is less than Mg because:",
        options: ["Na has larger size", "Mg has stable configuration", "Both A and B", "None"],
        answer: 2,
        subject: "Chemistry"
    },
    {
        question: "50 cc O₂ and 50 cc H₂ are mixed and sparked. Volume left is:",
        options: ["25 cc O₂", "25 cc H₂", "50 cc", "0"],
        answer: 0,
        subject: "Chemistry"
    },
    {
        question: "In reaction xKMnO₄ + yNH₃ → products, x − y is:",
        options: ["−1", "1", "5", "−5"],
        answer: 0,
        subject: "Chemistry"
    },
    {
        question: "Temperature at which k₁ = k₂ for two reactions with different activation energies is:",
        options: ["T = Ea₁ − Ea₂ / R ln(A₁/A₂)", "T = (Ea₁ − Ea₂)/R", "Independent of T", "None"],
        answer: 0,
        subject: "Chemistry"
    },
    {
        question: "de Broglie wavelength is given by:",
        options: ["λ = h/mv", "λ = hv", "λ = h/c", "λ = mc²"],
        answer: 0,
        subject: "Chemistry"
    },
    {
        question: "Solution with highest boiling point is:",
        options: ["0.1 m glucose", "0.1 m NaCl", "0.1 m CaCl₂", "0.1 m urea"],
        answer: 2,
        subject: "Chemistry"
    },
    {
        question: "Molar conductance of 1 M CH₃COOH with resistance 250 ohm and cell constant 1.25 cm⁻¹ is:",
        options: ["5 S cm² mol⁻¹", "0.005", "50", "0.5"],
        answer: 0,
        subject: "Chemistry"
    },
    {
        question: "pH of 0.05 M Ba(OH)₂ is approximately:",
        options: ["12", "13", "1", "12.7"],
        answer: 1,
        subject: "Chemistry"
    },
    {
        question: "For spontaneous process, ΔStotal is:",
        options: ["> 0", "< 0", "= 0", "Cannot say"],
        answer: 0,
        subject: "Chemistry"
    },
    {
        question: "Oxide that does not react with NaOH is:",
        options: ["Al₂O₃", "CaO", "Cl₂O₇", "As₂O₃"],
        answer: 1,
        subject: "Chemistry"
    },
    {
        question: "In which reaction underlined element decreases oxidation number?",
        options: ["Fe + CuSO₄ → Cu + FeSO₄", "H₂ + Cl₂ → 2HCl", "C + H₂O → CO + H₂", "All"],
        answer: 0,
        subject: "Chemistry"
    },
    {
        question: "Osmotic pressure of solution containing 9 g glucose + 3 g urea in 1 L at 27°C (R = 0.082) is approximately:",
        options: ["2.46 atm", "4.92 atm", "1.23 atm", "7.38 atm"],
        answer: 1,
        subject: "Chemistry"
    },
    {
        question: "Ratio of radii of first orbits of H, He⁺, Li²⁺ is:",
        options: ["1 : 1/2 : 1/3", "1 : 2 : 3", "1 : 4 : 9", "3 : 2 : 1"],
        answer: 0,
        subject: "Chemistry"
    },
    {
        question: "10 mL mixture of CO and N₂ requires 7 mL O₂ for combustion. Volume of CO is:",
        options: ["4 mL", "6 mL", "7 mL", "10 mL"],
        answer: 1,
        subject: "Chemistry"
    },
    {
        question: "Degree of hydrolysis independent of concentration for:",
        options: ["Salt of strong acid strong base", "Salt of weak acid weak base", "Salt of weak acid strong base", "None"],
        answer: 1,
        subject: "Chemistry"
    },
    {
        question: "Work done in reversible isothermal compression of 1 mol ideal gas from 1 bar to 10 bar at 300 K is approximately:",
        options: ["−5.74 kJ", "5.74 kJ", "−2.303 kJ", "2.303 kJ"],
        answer: 0,
        subject: "Chemistry"
    },
    {
        question: "Rate = k[A][B]². If volume is reduced to 1/4, rate becomes:",
        options: ["4 times", "16 times", "64 times", "1/64"],
        answer: 2,
        subject: "Chemistry"
    },
    {
        question: "Moles of Na⁺ in 20 mL of 0.2 M Na₃PO₄ is:",
        options: ["0.012", "0.004", "0.024", "0.008"],
        answer: 0,
        subject: "Chemistry"
    },
    {
        question: "Fuel cell used in Apollo mission is a type of:",
        options: ["Galvanic cell", "Electrolytic cell", "Both", "None"],
        answer: 0,
        subject: "Chemistry"
    },
    {
        question: "Freezing point of solution containing 23 g ethanol in 1000 g water (Kf = 1.86) is:",
        options: ["−0.93°C", "−1.86°C", "0°C", "−0.465°C"],
        answer: 0,
        subject: "Chemistry"
    },
    {
        question: "Threshold frequency if KE max = 6.63 × 10⁻¹⁹ J and ν = 3 × 10¹⁵ Hz (h = 6.63 × 10⁻³⁴) is:",
        options: ["2 × 10¹⁵ Hz", "1 × 10¹⁵ Hz", "3 × 10¹⁵ Hz", "4 × 10¹⁵ Hz"],
        answer: 0,
        subject: "Chemistry"
    },
    {
        question: "Element Z = 115 belongs to:",
        options: ["Nitrogen family", "Oxygen family", "Halogen family", "Carbon family"],
        answer: 0,
        subject: "Chemistry"
    },
    {
        question: "HClO₄ is stronger acid than HClO₃ because:",
        options: ["Higher oxidation state of Cl", "More oxygen atoms", "Both", "None"],
        answer: 2,
        subject: "Chemistry"
    },
    {
        question: "Solubility order of MX, MX₂, M₃X with given Ksp is:",
        options: ["MX > MX₂ > M₃X", "M₃X > MX₂ > MX", "MX₂ > MX > M₃X", "Cannot determine"],
        answer: 0,
        subject: "Chemistry"
    },
    {
        question: "Number of connective tissue components among given list is approximately:",
        options: ["3", "5", "8", "10"],
        answer: 2,
        subject: "Chemistry"
    },

    // ==================== BOTANY (91-135) ====================
    {
        question: "Which of the following exclusively belongs to connective tissue?",
        options: ["Neuron", "Osteocytes", "Myofibrils", "Mesothelium"],
        answer: 1,
        subject: "Botany"
    },
    {
        question: "Juxta-medullary nephrons have:",
        options: ["Short loop of Henle", "Long loop of Henle", "No loop of Henle", "Loop in cortex only"],
        answer: 1,
        subject: "Botany"
    },
    {
        question: "Sequence of barriers for CO₂ from tissue to alveoli after entering RBC is:",
        options: ["RBC membrane → Capillary endothelium → Basement membrane → Alveolar epithelium", "Alveolar epithelium → Capillary → RBC", "Basement → RBC → Capillary", "None"],
        answer: 0,
        subject: "Botany"
    },
    {
        question: "Cortex in roots has innermost layer called:",
        options: ["Epidermis", "Endodermis", "Pericycle", "Pith"],
        answer: 1,
        subject: "Botany"
    },
    {
        question: "Increase in pCO₂, H⁺ and temperature shifts oxygen dissociation curve:",
        options: ["To the left", "To the right", "No shift", "Upwards"],
        answer: 1,
        subject: "Botany"
    },
    {
        question: "Nervous system of cockroach has:",
        options: ["Dorsal hollow nerve cord", "Ventral solid nerve cord", "No ganglia", "Only brain"],
        answer: 1,
        subject: "Botany"
    },
    {
        question: "Ribosomes are assembled in:",
        options: ["Nucleolus", "Cytoplasm only", "Golgi body", "Mitochondria"],
        answer: 0,
        subject: "Botany"
    },
    {
        question: "In frog, if Bidder’s canal is blocked:",
        options: ["Both urine and sperm blocked", "Only sperm blocked", "Only urine blocked", "No effect"],
        answer: 0,
        subject: "Botany"
    },
    {
        question: "Meiosis II starts with cells that are:",
        options: ["Diploid", "Haploid", "Triploid", "Tetraploid"],
        answer: 1,
        subject: "Botany"
    },
    {
        question: "First heart sound is due to:",
        options: ["Closure of AV valves", "Closure of semilunar valves", "Opening of AV valves", "Opening of semilunar valves"],
        answer: 0,
        subject: "Botany"
    },
    {
        question: "Elite sprinter muscles have predominance of:",
        options: ["Red fibres", "White fibres", "Both equal", "Cardiac fibres"],
        answer: 1,
        subject: "Botany"
    },
    {
        question: "Seed habit is advanced in:",
        options: ["Bryophytes", "Pteridophytes", "Gymnosperms", "Algae"],
        answer: 2,
        subject: "Botany"
    },
    {
        question: "Family with basal placentation is:",
        options: ["Brassicaceae", "Asteraceae (Compositae)", "Fabaceae", "Solanaceae"],
        answer: 1,
        subject: "Botany"
    },
    {
        question: "Inhibition of carbonic anhydrase mainly affects:",
        options: ["O₂ transport", "CO₂ transport as bicarbonate", "Nitrogen transport", "None"],
        answer: 1,
        subject: "Botany"
    },
    {
        question: "Vital Capacity = TV + IRV + ERV is:",
        options: ["Correct", "Incorrect", "Only for athletes", "None"],
        answer: 0,
        subject: "Botany"
    },
    {
        question: "Sclerenchyma is present in:",
        options: ["Jute fibres", "Sieve tubes", "Companion cells", "All"],
        answer: 0,
        subject: "Botany"
    },
    {
        question: "Incorrect match is:",
        options: ["Pelvic girdle – synovial joint at pubic symphysis", "Pectoral girdle – clavicle + scapula", "Vertebrochondral ribs – 8th to 10th", "Cranial bones – 8"],
        answer: 0,
        subject: "Botany"
    },
    {
        question: "Number of cervical vertebrae in mammals is generally:",
        options: ["5", "7", "12", "33"],
        answer: 1,
        subject: "Botany"
    },
    {
        question: "Bone rigidity is due to:",
        options: ["Collagen", "Calcium salts", "Chondroitin", "Elastin"],
        answer: 1,
        subject: "Botany"
    },
    {
        question: "Non-functional podocytes lead to:",
        options: ["Proteinuria", "Anuria", "Polyuria only", "No effect"],
        answer: 0,
        subject: "Botany"
    },
    {
        question: "Floral diagram with vexillary aestivation belongs to:",
        options: ["Solanaceae", "Fabaceae", "Brassicaceae", "Liliaceae"],
        answer: 1,
        subject: "Botany"
    },
    {
        question: "Blockage of lymphatic vessels impairs:",
        options: ["Fat transport and fluid return", "Only RBC transport", "Hormone delivery only", "None"],
        answer: 0,
        subject: "Botany"
    },
    {
        question: "Crossing over occurs in:",
        options: ["Pachytene", "Zygotene", "Diplotene", "Diakinesis"],
        answer: 0,
        subject: "Botany"
    },
    {
        question: "Incorrect statement about cockroach is:",
        options: ["Spermatheca in 6th segment", "2000 ommatidia", "Dorsal diaphragm between pericardial and perineural", "14-16 nymphs from ootheca"],
        answer: 2,
        subject: "Botany"
    },
    {
        question: "In monocot stem, vascular bundles are:",
        options: ["Larger at periphery", "Larger at centre", "Equal size", "Absent"],
        answer: 0,
        subject: "Botany"
    },
    {
        question: "Reproduction is not an all-inclusive characteristic of living organisms because:",
        options: ["Some organisms do not reproduce", "Viruses do not reproduce", "Both", "None"],
        answer: 0,
        subject: "Botany"
    },
    {
        question: "Glenoid cavity articulates with:",
        options: ["Head of humerus", "Clavicle", "Scapula spine", "Acromion"],
        answer: 0,
        subject: "Botany"
    },
    {
        question: "Inner mitochondrial membrane has:",
        options: ["Specific enzymes", "No enzymes", "Only DNA", "Ribosomes only"],
        answer: 0,
        subject: "Botany"
    },
    {
        question: "If gametes of onion have 8 chromosomes, number of bivalents in Metaphase I is:",
        options: ["8", "16", "4", "32"],
        answer: 0,
        subject: "Botany"
    },
    {
        question: "Collagen defect leads to:",
        options: ["Joint instability and bone fragility", "Muscle spasms", "Autoimmune disease", "None"],
        answer: 0,
        subject: "Botany"
    },
    {
        question: "Cell enters G₀ from:",
        options: ["G₁", "S", "G₂", "M"],
        answer: 0,
        subject: "Botany"
    },
    {
        question: "Root hairs arise from:",
        options: ["Region of elongation", "Region of maturation", "Meristematic region", "Root cap"],
        answer: 1,
        subject: "Botany"
    },
    {
        question: "Common between potato and mustard is:",
        options: ["Simple alternate leaves with reticulate venation", "Axile placentation", "Both", "None"],
        answer: 0,
        subject: "Botany"
    },
    {
        question: "Absence of nucleus in RBC helps in:",
        options: ["More haemoglobin packing", "Longer life", "Faster division", "None"],
        answer: 0,
        subject: "Botany"
    },
    {
        question: "Correct sequence of cardiac cycle starting from joint diastole is:",
        options: ["SAN → Atrial systole → Ventricular systole → AV valves close → Semilunar open", "Other sequences"],
        answer: 0,
        subject: "Botany"
    },
    {
        question: "Mesosome is formed by:",
        options: ["Invagination of plasma membrane", "Cell wall", "Nuclear membrane", "None"],
        answer: 0,
        subject: "Botany"
    },
    {
        question: "Dinoflagellates do NOT have:",
        options: ["Silica cell wall", "Cellulose plates", "Two flagella", "Photosynthetic ability"],
        answer: 0,
        subject: "Botany"
    },
    {
        question: "Most abundant WBC is:",
        options: ["Neutrophil", "Lymphocyte", "Monocyte", "Eosinophil"],
        answer: 0,
        subject: "Botany"
    },
    {
        question: "Incorrect excretory statement is:",
        options: ["Lungs remove 20 mL CO₂/min", "Liver secretes bile", "Sweat has NaCl and urea", "All are correct"],
        answer: 3,
        subject: "Botany"
    },
    {
        question: "Microfilament defect mainly affects:",
        options: ["Leucocyte migration", "Ciliary movement", "Muscle contraction", "All"],
        answer: 0,
        subject: "Botany"
    },
    {
        question: "SAN is located in:",
        options: ["Right atrium upper corner", "Left atrium", "Ventricle", "AV node"],
        answer: 0,
        subject: "Botany"
    },
    {
        question: "Simple squamous epithelium is specialised for:",
        options: ["Diffusion", "Secretion", "Absorption only", "Protection"],
        answer: 0,
        subject: "Botany"
    },
    {
        question: "Number of correct statements about frog physiology is:",
        options: ["1", "2", "3", "4"],
        answer: 1,
        subject: "Botany"
    },
    {
        question: "Organism with storage bodies in chloroplast is:",
        options: ["Chlamydomonas", "Fucus", "Pinus", "All"],
        answer: 0,
        subject: "Botany"
    },
    {
        question: "Plant cells and cyanobacteria differ in:",
        options: ["Site of DNA replication and ribosome association", "Chlorophyll a", "Cell wall polysaccharide", "None"],
        answer: 0,
        subject: "Botany"
    },

    // ==================== ZOOLOGY (136-180) ====================
    {
        question: "Primary response to low pO₂ at high altitude is detected by:",
        options: ["Aortic and carotid receptors", "Medulla only", "Pneumotaxic centre", "None"],
        answer: 0,
        subject: "Zoology"
    },
    {
        question: "In grasses, regeneration after grazing is due to:",
        options: ["Intercalary meristem", "Apical meristem only", "Lateral meristem", "None"],
        answer: 0,
        subject: "Zoology"
    },
    {
        question: "False septum in ovary is characteristic of:",
        options: ["Brassicaceae", "Solanaceae", "Fabaceae", "Asteraceae"],
        answer: 0,
        subject: "Zoology"
    },
    {
        question: "Viruses are not truly living because:",
        options: ["They are non-cellular and crystallisable", "They have DNA/RNA", "They infect cells", "None"],
        answer: 0,
        subject: "Zoology"
    },
    {
        question: "FRC = TLC − VC + ERV calculation gives:",
        options: ["ERV + RV", "VC − ERV", "IC", "None"],
        answer: 0,
        subject: "Zoology"
    },
    {
        question: "Plants of same family but different genera belong to same:",
        options: ["Order", "Class always", "Genus", "Species"],
        answer: 0,
        subject: "Zoology"
    },
    {
        question: "Stamens in mustard are represented as:",
        options: ["A₂₊₄", "A₁₀", "A₅", "A∞"],
        answer: 0,
        subject: "Zoology"
    },
    {
        question: "Zygomorphic flowers are found in:",
        options: ["Cassia, Bean, Pea, Gulmohur", "Mustard, Chilli", "China rose", "All"],
        answer: 0,
        subject: "Zoology"
    },
    {
        question: "Incorrect excretory structure match is:",
        options: ["Protonephridia – Planaria", "Nephridia – Earthworm", "Malpighian tubules – Cockroach", "Green glands – Cockroach"],
        answer: 3,
        subject: "Zoology"
    },
    {
        question: "Hyperventilation leads to:",
        options: ["Respiratory alkalosis", "Respiratory acidosis", "Metabolic acidosis", "No change"],
        answer: 0,
        subject: "Zoology"
    },
    {
        question: "Correct sequence for erythroblastosis foetalis is:",
        options: ["Rh− mother + Rh+ foetus → delivery → antibody formation → next pregnancy → attack"],
        answer: 0,
        subject: "Zoology"
    },
    {
        question: "Bulliform cells when flaccid cause:",
        options: ["Leaf curling", "Leaf expansion", "No change", "Wilting only"],
        answer: 0,
        subject: "Zoology"
    },
    {
        question: "Tracheids are:",
        options: ["Dead, lignified, elongated", "Living", "Sieve elements", "None"],
        answer: 0,
        subject: "Zoology"
    },
    {
        question: "Euglena has:",
        options: ["Pellicle instead of cell wall", "Silica wall", "Cellulose wall", "Chitin wall"],
        answer: 0,
        subject: "Zoology"
    },
    {
        question: "Spermatheca in cockroach is in:",
        options: ["6th abdominal segment", "5th", "7th", "Thorax"],
        answer: 0,
        subject: "Zoology"
    },
    {
        question: "Radial spokes are present in:",
        options: ["Cilium/flagellum", "Centriole only", "Both", "None"],
        answer: 0,
        subject: "Zoology"
    },
    {
        question: "Epidermis is usually:",
        options: ["Single layered", "Multi layered always", "Absent in roots", "None"],
        answer: 0,
        subject: "Zoology"
    },
    {
        question: "Common feature between Volvox and Fucus is:",
        options: ["Oogamous reproduction", "Same pigments", "Same reserve food", "Silica wall"],
        answer: 0,
        subject: "Zoology"
    },
    {
        question: "Intercalary meristem is responsible for:",
        options: ["Increase in length of internodes", "Increase in girth", "Secondary growth", "None"],
        answer: 0,
        subject: "Zoology"
    },
    {
        question: "Correct hierarchical arrangement is:",
        options: ["Solanaceae → Polymoniales → Solanum", "Other orders"],
        answer: 0,
        subject: "Zoology"
    },
    {
        question: "Active transport in kidney occurs mainly in:",
        options: ["PCT", "Descending limb", "Collecting duct only", "None"],
        answer: 0,
        subject: "Zoology"
    },
    {
        question: "Isolated metabolic reactions are considered living reactions because:",
        options: ["Metabolism is defining feature of life", "They occur only in vivo", "They need intact cell", "None"],
        answer: 0,
        subject: "Zoology"
    },
    {
        question: "Organism shown with flagella and eyespot is typically:",
        options: ["Euglena", "Paramecium", "Amoeba", "Plasmodium"],
        answer: 0,
        subject: "Zoology"
    },
    {
        question: "Which is correct about tissues?",
        options: ["Apical meristem produces primary tissues", "Cambium is primary meristem", "Intercalary increases girth", "None"],
        answer: 0,
        subject: "Zoology"
    },
    {
        question: "Number of incorrect statements about excretory organs is:",
        options: ["3 or more", "1", "2", "0"],
        answer: 0,
        subject: "Zoology"
    },
    {
        question: "Functional residual capacity includes:",
        options: ["ERV + RV", "IRV + TV", "VC", "TLC"],
        answer: 0,
        subject: "Zoology"
    },
    {
        question: "In five kingdom classification, viruses are:",
        options: ["Not included", "Included in Monera", "Included in Protista", "Included in Fungi"],
        answer: 0,
        subject: "Zoology"
    },
    {
        question: "Mustard family has:",
        options: ["Tetradynamous stamens", "Diadelphous", "Monoadelphous", "Polyadelphous"],
        answer: 0,
        subject: "Zoology"
    },
    {
        question: "Plants with zygomorphic flowers among given list are:",
        options: ["Four or five", "One", "Two", "All nine"],
        answer: 0,
        subject: "Zoology"
    },
    {
        question: "Green glands are excretory organs of:",
        options: ["Crustaceans", "Insects", "Annelids", "Molluscs"],
        answer: 0,
        subject: "Zoology"
    },
    {
        question: "Respiratory alkalosis is caused by:",
        options: ["Hyperventilation", "Hypoventilation", "Exercise", "None"],
        answer: 0,
        subject: "Zoology"
    },
    {
        question: "Rh incompatibility mainly affects:",
        options: ["Second pregnancy onwards", "First pregnancy only", "Never", "Always first"],
        answer: 0,
        subject: "Zoology"
    },
    {
        question: "Bulliform cells help in:",
        options: ["Rolling of leaves", "Photosynthesis", "Storage", "None"],
        answer: 0,
        subject: "Zoology"
    },
    {
        question: "Sclereids are:",
        options: ["Highly thickened dead cells", "Living cells", "Sieve cells", "None"],
        answer: 0,
        subject: "Zoology"
    },
    {
        question: "Pellicle is found in:",
        options: ["Euglena", "Amoeba", "Paramecium only", "All protozoa"],
        answer: 0,
        subject: "Zoology"
    },
    {
        question: "Mutation preventing spermatheca formation affects:",
        options: ["Sperm storage in female", "Sperm production", "Ova maturation", "None"],
        answer: 0,
        subject: "Zoology"
    },
    {
        question: "Centriole has:",
        options: ["9 + 0 arrangement", "9 + 2", "9 + 3", "None"],
        answer: 0,
        subject: "Zoology"
    },
    {
        question: "Cuticle is present on:",
        options: ["Aerial parts epidermis", "Root epidermis", "All cells", "None"],
        answer: 0,
        subject: "Zoology"
    },
    {
        question: "Oogamy is common in:",
        options: ["Volvox and Fucus", "Spirogyra", "Ulothrix", "All algae"],
        answer: 0,
        subject: "Zoology"
    },
    {
        question: "Primary meristems include:",
        options: ["Apical and intercalary", "Only cambium", "Only cork cambium", "None"],
        answer: 0,
        subject: "Zoology"
    },
    {
        question: "Correct ascending hierarchy is:",
        options: ["Genus → Family → Order → Class", "Other"],
        answer: 0,
        subject: "Zoology"
    },
    {
        question: "PCT is main site for:",
        options: ["Reabsorption of glucose and amino acids", "Only secretion", "Only filtration", "None"],
        answer: 0,
        subject: "Zoology"
    },
    {
        question: "Metabolism is:",
        options: ["Defining feature of living organisms", "Only in animals", "Only in plants", "None"],
        answer: 0,
        subject: "Zoology"
    },
    {
        question: "Organism with contractile vacuole and flagella is typically:",
        options: ["Euglena", "Hydra", "Earthworm", "None"],
        answer: 0,
        subject: "Zoology"
    },
    {
        question: "Which statement is correct?",
        options: ["Apical meristem forms primary plant body", "Cambium is secondary", "Both", "None"],
        answer: 2,
        subject: "Zoology"
    }
];

// =================================
// VARIABLES
// =================================

let currentQuestion = 0;

let userAnswers =
    new Array(questions.length).fill(null);

let examSubmitted = false;


// =================================
// TIMER
// =================================

// 200 minutes
let totalSeconds = 200 * 60;

let timerInterval;


// =================================
// PAGE LOAD
// =================================

window.onload = function () {

    const studentName =
        localStorage.getItem("studentName");


    if (!studentName) {

        window.location.href =
            "index.html";

        return;
    }


    document.getElementById(
        "studentDisplay"
    ).textContent =
        "Student: " + studentName;


    createPalette();

    loadQuestion();

    startTimer();

};


// =================================
// LOAD QUESTION
// =================================

function loadQuestion() {

    const question =
        questions[currentQuestion];


    document.getElementById(
        "questionNumber"
    ).textContent =
        "Question " + (currentQuestion + 1);


    document.getElementById(
        "questionText"
    ).textContent =
        question.question;


    const optionsContainer =
        document.getElementById(
            "optionsContainer"
        );


    optionsContainer.innerHTML = "";


    question.options.forEach(
        function (option, index) {

            const label =
                document.createElement("label");


            label.className = "option";


            const radio =
                document.createElement("input");


            radio.type = "radio";

            radio.name = "answer";

            radio.value = index;


            if (
                userAnswers[currentQuestion]
                === index
            ) {

                radio.checked = true;

            }


            radio.addEventListener(
                "change",
                function () {

                    userAnswers[
                        currentQuestion
                    ] = index;

                    createPalette();

                }
            );


            label.appendChild(radio);


            label.appendChild(
                document.createTextNode(
                    " " + option
                )
            );


            optionsContainer.appendChild(
                label
            );

        }
    );


    document.getElementById(
        "previousBtn"
    ).disabled =
        currentQuestion === 0;


    createPalette();
}


// =================================
// NEXT
// =================================

function nextQuestion() {

    if (
        currentQuestion <
        questions.length - 1
    ) {

        currentQuestion++;

        loadQuestion();

    }

}


// =================================
// PREVIOUS
// =================================

function previousQuestion() {

    if (currentQuestion > 0) {

        currentQuestion--;

        loadQuestion();

    }

}


// =================================
// CLEAR RESPONSE
// =================================

function clearResponse() {

    userAnswers[currentQuestion] =
        null;

    loadQuestion();

}


// =================================
// QUESTION PALETTE
// =================================

function createPalette() {

    const palette =
        document.getElementById(
            "questionPalette"
        );


    palette.innerHTML = "";


    questions.forEach(
        function (question, index) {

            const button =
                document.createElement("button");


            button.type = "button";

            button.textContent =
                index + 1;


            if (
                userAnswers[index] !== null
            ) {

                button.classList.add(
                    "answered"
                );

            }

            else {

                button.classList.add(
                    "unattempted"
                );

            }


            if (
                index === currentQuestion
            ) {

                button.classList.add(
                    "current"
                );

            }


            button.onclick =
                function () {

                    currentQuestion =
                        index;

                    loadQuestion();

                };


            palette.appendChild(button);

        }
    );

}


// =================================
// TIMER
// =================================

function startTimer() {

    updateTimer();


    timerInterval =
        setInterval(
            function () {

                if (
                    totalSeconds <= 0
                ) {

                    clearInterval(
                        timerInterval
                    );

                    autoSubmit();

                    return;

                }


                totalSeconds--;

                updateTimer();

            },
            1000
        );
}


function updateTimer() {

    const minutes =
        Math.floor(
            totalSeconds / 60
        );


    const seconds =
        totalSeconds % 60;


    document.getElementById(
        "timer"
    ).textContent =

        String(minutes).padStart(
            3,
            "0"
        )

        + ":"

        +

        String(seconds).padStart(
            2,
            "0"
        );

}


// =================================
// MANUAL SUBMIT
// =================================

function submitExam() {

    const unanswered =
        userAnswers.filter(
            function (answer) {

                return answer === null;

            }
        ).length;


    const confirmSubmit =
        confirm(

            "Are you sure you want to submit the exam?\n\n"
            +
            "Unattempted Questions: "
            +
            unanswered

        );


    if (!confirmSubmit) {

        return;

    }


    calculateResult();

}


// =================================
// AUTO SUBMIT
// =================================

function autoSubmit() {

    alert(
        "Time is over. Your exam will be submitted automatically."
    );


    calculateResult();

}


// =================================
// RESULT
// =================================

function calculateResult() {

    if (examSubmitted) {

        return;

    }


    examSubmitted = true;


    clearInterval(
        timerInterval
    );


    let correct = 0;

    let wrong = 0;

    let unattempted = 0;


    questions.forEach(
        function (question, index) {

            const selected =
                userAnswers[index];


            if (selected === null) {

                unattempted++;

            }

            else if (
                selected === question.answer
            ) {

                correct++;

            }

            else {

                wrong++;

            }

        }
    );


    const marks =
        (correct * 4) -
        (wrong * 1);


    const result = {

        studentName:
            localStorage.getItem(
                "studentName"
            ),

        correct:
            correct,

        wrong:
            wrong,

        unattempted:
            unattempted,

        marks:
            marks,

        totalQuestions:
            questions.length

    };


    localStorage.setItem(
        "examResult",
        JSON.stringify(result)
    );


    window.location.href =
        "result.html";

}
