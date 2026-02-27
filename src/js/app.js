// --- Application State and Configuration ---

      const branches = {
        CSE: {
          sectionNames: ["CSE-A", "CSE-B", "CSE-C", "CSE-D"],
          sectionIncharges: {
            "CSE-A": "Dr. S. Mehra",
            "CSE-B": "Dr. V. Kapoor",
            "CSE-C": "Dr. R. Singh",
            "CSE-D": "Dr. P. Agarwal",
          },
          subjects: [
            "Data Structures",
            "Algorithms",
            "Operating Systems",
            "DBMS",
            "Computer Networks",
            "Data Structures Lab",
            "DBMS Lab",
            "OS & Networks Lab",
          ],
          faculty: {
            "Data Structures": "Prof. S. Verma",
            Algorithms: "Prof. R. Kumar",
            "Operating Systems": "Prof. P. Jain",
            DBMS: "Prof. A. Gupta",
            "Computer Networks": "Prof. M. Sharma",
            "Data Structures Lab": "Mr. Anand",
            "DBMS Lab": "Ms. Priya",
            "OS & Networks Lab": "Mr. Vijay",
          },
        },
        ECE: {
          sectionNames: ["ECE-A", "ECE-B", "ECE-C"],
          sectionIncharges: {
            "ECE-A": "Dr. K. Sharma",
            "ECE-B": "Dr. L. Prasad",
            "ECE-C": "Dr. M. Iyer",
          },
          subjects: [
            "Analog Circuits",
            "Digital Circuits",
            "Signals & Systems",
            "Control Systems",
            "EM Waves",
            "Analog Circuits Lab",
            "Digital Circuits Lab",
            "Microcontrollers Lab",
          ],
          faculty: {
            "Analog Circuits": "Prof. K. Reddy",
            "Digital Circuits": "Prof. L. Singh",
            "Signals & Systems": "Prof. N. Patel",
            "Control Systems": "Prof. O. Shah",
            "EM Waves": "Prof. Q. Khan",
            Algorithms: "Prof. Raju",
            "Analog Circuits Lab": "Ms. Radha",
            "Digital Circuits Lab": "Mr. Krish",
            "Microcontrollers Lab": "Ms. Sita",
          },
        },
        CSM: {
          sectionNames: ["CSM-A", "CSM-B"],
          sectionIncharges: {
            "CSM-A": "Dr. A. Khan",
            "CSM-B": "Dr. B. Reddy",
          },
          subjects: [
            "AI Fundamentals",
            "Machine Learning",
            "Data Science",
            "Python Programming",
            "Big Data",
            "AI & ML Lab",
            "Data Science Lab",
            "Python Lab",
          ],
          faculty: {
            "AI Fundamentals": "Prof. B. Rao",
            "Machine Learning": "Prof. C. Iyer",
            "Data Science": "Prof. D. Menon",
            "Python Programming": "Prof. E. Nair",
            "Big Data": "Prof. F. Joshi",
            "AI & ML Lab": "Mr. Ram",
            "Data Science Lab": "Ms. Geeta",
            "Python Lab": "Mr. Shyam",
          },
        },
        CSD: {
          sectionNames: ["CSD-A"],
          sectionIncharges: {
            "CSD-A": "Dr. G. Verma",
          },
          subjects: [
            "Intro to Data Science",
            "Statistics",
            "Data Visualization",
            "Machine Learning",
            "Database Management",
            "Data Science Lab",
            "R Programming Lab",
            "Database Lab",
          ],
          faculty: {
            "Intro to Data Science": "Prof. G. Reddy",
            Statistics: "Prof. H. Naidu",
            "Data Visualization": "Prof. I. Pillai",
            "Machine Learning": "",
            "Database Management": "Prof. K. Desai",
            "Data Science Lab": "Ms. Divya",
            "R Programming Lab": "Mr. Hari",
            "Database Lab": "Ms. Lakshmi",
          },
        },
        EEE: {
          sectionNames: ["EEE-A", "EEE-B", "EEE-C"],
          sectionIncharges: {
            "EEE-A": "Dr. P. Kumar",
            "EEE-B": "Dr. Q. Das",
            "EEE-C": "Dr. R. Gupta",
          },
          subjects: [
            "Electrical Machines",
            "Power Systems",
            "Control Systems",
            "Power Electronics",
            "Measurements",
            "Electrical Machines Lab",
            "Power Systems Lab",
            "Control Systems Lab",
          ],
          faculty: {
            "Electrical Machines": "Prof. L. Murthy",
            "Power Systems": "Prof. M. Prasad",
            "Control Systems": "Prof. N. Rao",
            "Power Electronics": "Prof. O. Swami",
            Measurements: "Prof. P. Kumar",
            "Electrical Machines Lab": "Mr. Suresh",
            "Power Systems Lab": "Ms. Anitha",
            "Control Systems Lab": "Mr. Rajesh",
          },
        },
        MECH: {
          sectionNames: ["MECH-A", "MECH-B", "MECH-C", "MECH-D"],
          sectionIncharges: {
            "MECH-A": "Dr. T. Singh",
            "MECH-B": "Dr. U. Jain",
            "MECH-C": "Dr. V. Rao",
            "MECH-D": "Dr. W. Desai",
          },
          subjects: [
            "Thermodynamics",
            "Fluid Mechanics",
            "Strength of Materials",
            "Manufacturing",
            "Machine Design",
            "Thermal Engg. Lab",
            "Fluid Mechanics Lab",
            "Workshop",
          ],
          faculty: {
            Thermodynamics: "Prof. Q. Singh",
            "Fluid Mechanics": "Prof. R. Bhatia",
            "Strength of Materials": "Prof. S. Chauhan",
            Manufacturing: "Prof. T. Yadav",
            "Machine Design": "Prof. U. Agarwal",
            "Thermal Engg. Lab": "Mr. Varun",
            "Fluid Mechanics Lab": "Ms. Meena",
            Workshop: "Mr. Ashok",
          },
        },
      };

      // Shared resources configuration
      const sharedResources = {
        labs: {
          "Computer Lab 1": ["CSE", "CSM", "CSD"],
          "Computer Lab 2": ["CSE", "CSM", "CSD"],
          "Electronics Lab": ["ECE", "EEE"],
          "Central Library": ["CSE", "ECE", "CSM", "CSD", "EEE", "MECH"],
        },
        facultyCrossBranch: {
          "Prof. C. Iyer": ["CSM", "CSD"], // Teaches ML in both branches
          "Prof. R. Kumar": ["CSE", "CSD"], // Teaches algorithms
          "Dr. Smith": ["ECE", "EEE"], // Guest faculty
          "Prof. Universal": ["CSE", "ECE", "CSM"], // HOD level faculty
          "Prof. Raju": ["ECE", "CSE"], // Teaches algorithms
        },
      };

      const state = {
        step: 0, // 0: Welcome, 1: Branch Selection, 2: Setup, 3: View Timetables
        selectedBranches: new Set(),
        branchConfigs: {},
        globalTimetables: {},
        globalFacultyTimetables: {},
        sharedResourceSchedule: {},
        facultyAvailability: {},
        error: null,
        isLoading: false,
        currentConfigBranch: null,
        activeTab: "student", // 'student' or 'faculty'
        facultySearchQuery: "",
      };

      const DAYS = 6;
      const PERIODS = 8;
      const LUNCH_PERIOD = 4;
      const END_PERIOD = 8;
      const LAB_DURATION = 3;

      const WEEK_DAYS = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const PERIOD_TIMES = [
        "09:30 - 10:20",
        "10:20 - 11:10",
        "11:10 - 12:00",
        "12:00 - 12:50",
        "12:50 - 01:40",
        "01:40 - 02:30",
        "02:30 - 03:20",
        "03:20 - 04:10",
      ];

      const colorScheme = {
        theory: [
          "bg-sky-800",
          "bg-teal-800",
          "bg-indigo-800",
          "bg-rose-800",
          "bg-amber-800",
          "bg-emerald-800",
        ],
        lab: "bg-purple-600",
        lunch: "bg-yellow-600",
        sports: "bg-green-600",
        library: "bg-blue-600",
        default: "bg-gray-700",
        shared: "bg-orange-600",
      };

      const app = document.getElementById("app");

      const isLab = (subject) => subject.toLowerCase().includes("lab");

      // --- Cross-Branch Faculty Helpers ---
      const facultyHomeBranch = {};

      const buildFacultyHomeBranchMap = () => {
        for (const branchKey in branches) {
          const facultySet = new Set(
            Object.values(branches[branchKey].faculty)
          );
          if (branches[branchKey].sectionIncharges) {
            Object.values(branches[branchKey].sectionIncharges).forEach(
              (incharge) => facultySet.add(incharge)
            );
          }

          for (const facultyName of facultySet) {
            if (facultyName && !facultyHomeBranch[facultyName]) {
              facultyHomeBranch[facultyName] = branchKey;
            }
          }
        }
      };

      buildFacultyHomeBranchMap();

      const getFacultyDisplayString = (facultyName, currentBranchKey) => {
        if (!facultyName) return "";
        const homeBranch = facultyHomeBranch[facultyName];

        if (homeBranch && homeBranch !== currentBranchKey) {
          return `${facultyName} (${homeBranch} Dept)`;
        }
        return facultyName;
      };

      // --- Helper Components ---
      const Button = (id, text, { className = "", disabled = false } = {}) => `
          <button id="${id}" ${disabled ? "disabled" : ""}
            class="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition-transform transform hover:scale-105 ${className} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }">
            ${text}
          </button>`;

      const Input = (id, label, value, placeholder, type = "text") => `
          <div class="w-full">
            <label class="block text-sm font-medium text-gray-300 mb-1">${label}</label>
            <input id="${id}" type="${type}" value="${value}" placeholder="${placeholder}"
              class="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 transition"/>
          </div>`;

      const RemovableInput = (
        id,
        label,
        value,
        placeholder,
        branchKey,
        type,
        index
      ) => `
            <div class="flex items-end gap-2">
                <div class="flex-grow">
                    <label class="block text-sm font-medium text-gray-300 mb-1">${label}</label>
                    <input id="${id}" type="text" value="${value}" placeholder="${placeholder}"
                    class="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 transition"/>
                </div>
                <button data-branch="${branchKey}" data-type="${type}" data-index="${index}" class="remove-item-btn h-10 px-3 bg-red-700 hover:bg-red-600 text-white font-bold rounded-md transition">&times;</button>
            </div>
        `;

      const ListManager = (branchKey, idPrefix, title, items, placeholder) => `
            <div class="space-y-3 p-4 bg-gray-800 rounded-lg border border-gray-700">
              <h3 class="font-semibold text-lg text-white">${title}</h3>
              ${items
                .map((item, index) =>
                  RemovableInput(
                    `${branchKey}-${idPrefix}-${index}`,
                    `${placeholder} ${index + 1}`,
                    item,
                    `Enter name for ${placeholder.toLowerCase()} ${index + 1}`,
                    branchKey,
                    idPrefix,
                    index
                  )
                )
                .join("")}
              <div class="mt-4">
                <button data-branch="${branchKey}" data-type="${idPrefix}" class="add-item-btn w-full px-4 py-2 text-sm bg-green-700 hover:bg-green-600 rounded-md transition">+ Add ${placeholder}</button>
              </div>
            </div>`;

      const CrossBranchAllocator = (branchKey) => {
        const config = state.branchConfigs[branchKey];
        if (!config) return "";

        const otherBranches = Array.from(state.selectedBranches).filter(
          (b) => b !== branchKey
        );
        if (otherBranches.length === 0) {
          return `<div class="p-4 bg-gray-800 rounded-lg border border-gray-700 text-gray-400">Select more than one branch to enable cross-branch faculty allocation.</div>`;
        }

        const sections = (config.sectionNames || []).slice(
          0,
          config.numSections
        );
        const currentSubjects = [...config.subjects].sort();
        const crossFacultyPool = otherBranches
          .flatMap((otherBranch) =>
            [...new Set(Object.values(branches[otherBranch].faculty))].map(
              (faculty) => ({ name: faculty, branch: otherBranch })
            )
          )
          .sort((a, b) => a.name.localeCompare(b.name));

        return `
            <div class="p-4 bg-gray-800 rounded-lg border border-gray-700 space-y-4">
                <h3 class="font-semibold text-lg text-white">Cross-Branch Faculty Allocation</h3>
                <p class="text-sm text-gray-400">Assign faculty from other departments to a specific section, or all sections.</p>
                
                <!-- List of existing assignments -->
                <div id="cross-assignments-list-${branchKey}" class="space-y-2">
                    ${(config.crossBranchAssignments || [])
                      .map(
                        (assignment, index) => `
                        <div class="flex items-center justify-between p-2 bg-gray-700 rounded-md">
                            <span class="text-white font-mono text-sm">[${
                              assignment.section
                            }]</span>
                            <span class="text-white mx-2">${
                              assignment.subject
                            } → ${getFacultyDisplayString(
                          assignment.faculty,
                          branchKey
                        )}</span>
                            <button data-branch="${branchKey}" data-index="${index}" class="remove-cross-assignment-btn px-2 py-1 text-xs bg-red-700 hover:bg-red-600 rounded">&times;</button>
                        </div>
                    `
                      )
                      .join("")}
                </div>

                <!-- Form to add new assignment -->
                <div class="flex flex-wrap items-end gap-2 p-3 bg-gray-900/50 rounded-md border border-gray-700">
                    <div class="flex-grow min-w-[150px]">
                        <label class="block text-xs font-medium text-gray-300 mb-1">Section</label>
                        <select id="cross-assign-section-${branchKey}" class="w-full px-3 py-2 text-sm bg-gray-700 border border-gray-600 rounded-md h-10">
                            <option value="*">All Sections</option>
                            ${sections
                              .map((s) => `<option value="${s}">${s}</option>`)
                              .join("")}
                        </select>
                    </div>
                     <div class="flex-grow min-w-[150px]">
                        <label class="block text-xs font-medium text-gray-300 mb-1">Subject / Lab</label>
                        <select id="cross-assign-subject-${branchKey}" class="w-full px-3 py-2 text-sm bg-gray-700 border border-gray-600 rounded-md h-10">
                            <option value="">-- Select Subject --</option>
                            ${currentSubjects
                              .map((s) => `<option value="${s}">${s}</option>`)
                              .join("")}
                        </select>
                    </div>
                    <div class="flex-grow min-w-[150px]">
                        <label class="block text-xs font-medium text-gray-300 mb-1">Faculty (from other Depts)</label>
                        <select id="cross-assign-faculty-${branchKey}" class="w-full px-3 py-2 text-sm bg-gray-700 border border-gray-600 rounded-md h-10">
                            <option value="">-- Select Faculty --</option>
                            ${crossFacultyPool
                              .map(
                                (f) =>
                                  `<option value="${f.name}">${f.name} (${f.branch})</option>`
                              )
                              .join("")}
                        </select>
                    </div>
                    <div class="flex-grow">
                        <button data-branch="${branchKey}" class="add-cross-btn h-10 w-full px-4 text-sm bg-green-700 hover:bg-green-600 rounded-md whitespace-nowrap">Add Assignment</button>
                    </div>
                </div>
            </div>
            `;
      };

      const SectionFacultyManager = (branchKey, config) => {
        const sections = (config.sectionNames || []).slice(
          0,
          config.numSections
        );
        if (!sections.length)
          return '<div class="p-4 bg-gray-800 rounded-lg border border-gray-700 text-gray-400">Add sections to assign faculty.</div>';

        const subjects = config.subjects || [];

        const allFacultySet = new Set();
        state.selectedBranches.forEach((bKey) => {
          const branchData = branches[bKey];
          Object.values(branchData.faculty).forEach((f) =>
            allFacultySet.add(f)
          );
          Object.values(branchData.sectionIncharges || {}).forEach((f) =>
            allFacultySet.add(f)
          );
        });
        const sortedAvailableFaculty = [...allFacultySet].sort();

        return `
            <div class="p-4 bg-gray-800 rounded-lg border border-gray-700 space-y-6">
                <h3 class="font-semibold text-lg text-white">Section-wise Faculty Assignments</h3>
                <p class="text-sm text-gray-400">Assign faculty to subjects for each section individually. Cross-branch assignments are locked.</p>
                <datalist id="faculty-list-${branchKey}">
                    ${sortedAvailableFaculty
                      .map((f) => `<option value="${f}"></option>`)
                      .join("")}
                </datalist>

                ${sections
                  .map(
                    (sectionName) => `
                    <div class="p-4 bg-gray-900/70 rounded-lg border border-gray-700">
                        <h4 class="font-semibold text-white text-md mb-4">Faculty for Section: ${sectionName}</h4>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        ${subjects
                          .map((subject) => {
                            const facultyName =
                              config.sectionFaculty?.[sectionName]?.[subject] ||
                              "";
                            const homeBranch = facultyHomeBranch[facultyName];
                            const isTeachingOutsideHome =
                              homeBranch && homeBranch !== branchKey;
                            const isCrossAssigned = (
                              config.crossBranchAssignments || []
                            ).some(
                              (a) =>
                                a.section === sectionName &&
                                a.subject === subject
                            );

                            let crossBranchIndicator = "";
                            if (isTeachingOutsideHome) {
                              crossBranchIndicator = `
                                    <span class="text-yellow-400 ml-2 inline-flex items-center text-xs font-semibold">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="h-3 w-3 mr-1" viewBox="0 0 16 16">
                                            <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                                            <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                                        </svg> 
                                        (${homeBranch} Dept)
                                    </span>`;
                            }

                            return `
                            <div>
                                <label class="block text-sm font-medium text-gray-300 mb-1">${subject} ${crossBranchIndicator}</label>
                                <input
                                list="faculty-list-${branchKey}"
                                data-branch="${branchKey}"
                                data-section="${sectionName}"
                                data-subject="${subject}"
                                type="text"
                                value="${facultyName}"
                                placeholder="Enter faculty"
                                ${isCrossAssigned ? "disabled" : ""}
                                class="section-faculty-input w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 transition ${
                                  isTeachingOutsideHome
                                    ? "faculty-highlight"
                                    : ""
                                } ${
                              isCrossAssigned
                                ? "opacity-70 bg-gray-600 cursor-not-allowed"
                                : ""
                            }"
                                />
                            </div>
                            `;
                          })
                          .join("")}
                        </div>
                    </div>
                `
                  )
                  .join("")}
            </div>
            `;
      };

      // --- Advanced Timetable Generation Logic ---
      const generateCoordinatedTimetables = () => {
        state.isLoading = true;
        state.error = null;
        render();

        setTimeout(() => {
          try {
            // Initialize global structures
            state.globalTimetables = {};
            state.globalFacultyTimetables = {};
            state.sharedResourceSchedule = {};
            state.facultyAvailability = {};

            // Initialize faculty availability tracking
            const allFaculty = new Set();
            Object.values(state.branchConfigs).forEach((config) => {
              Object.values(config.sectionFaculty || {}).forEach(
                (sectionAssignments) => {
                  Object.values(sectionAssignments).forEach((name) => {
                    if (name && name.trim()) allFaculty.add(name.trim());
                  });
                }
              );
            });

            allFaculty.forEach((faculty) => {
              state.facultyAvailability[faculty] = Array.from(
                { length: DAYS },
                () => Array.from({ length: PERIODS }, () => false)
              );
              state.globalFacultyTimetables[faculty] = Array.from(
                { length: DAYS },
                () => Array.from({ length: PERIODS }, () => null)
              );
            });

            // Initialize shared resource tracking
            Object.keys(sharedResources.labs).forEach((resource) => {
              state.sharedResourceSchedule[resource] = Array.from(
                { length: DAYS },
                () => Array.from({ length: PERIODS }, () => null)
              );
            });

            // Initialize sports and library tracking
            state.sharedResourceSchedule["Sports"] = Array.from(
              { length: DAYS },
              () => Array.from({ length: PERIODS }, () => [])
            );
            state.sharedResourceSchedule["Library"] = Array.from(
              { length: DAYS },
              () => Array.from({ length: PERIODS }, () => [])
            );

            // Process each branch in order of complexity (fewer sections first)
            const branchOrder = Array.from(state.selectedBranches).sort(
              (a, b) => {
                return (
                  state.branchConfigs[a].numSections -
                  state.branchConfigs[b].numSections
                );
              }
            );

            for (const branchKey of branchOrder) {
              const config = state.branchConfigs[branchKey];
              const activeSections = config.sectionNames.slice(
                0,
                config.numSections
              );

              // Initialize branch timetables
              state.globalTimetables[branchKey] = {};
              activeSections.forEach((section) => {
                state.globalTimetables[branchKey][section] = Array.from(
                  { length: DAYS },
                  () => Array.from({ length: PERIODS }, () => null)
                );
              });

              // Assign fixed periods (Lunch, Sports, Library)
              assignFixedPeriods(branchKey, config, activeSections);

              // Assign labs with resource coordination
              assignLabsWithResourceCoordination(
                branchKey,
                config,
                activeSections
              );

              // Assign theory subjects with faculty coordination
              assignTheoryWithFacultyCoordination(
                branchKey,
                config,
                activeSections
              );
            }

            state.step = 3;
          } catch (e) {
            state.error = e.message;
            console.error("Timetable generation error:", e);
          } finally {
            state.isLoading = false;
            render();
          }
        }, 1000);
      };

      const assignFixedPeriods = (branchKey, config, activeSections) => {
        const SPORTS_CONCURRENCY_LIMIT = 3;
        const LIBRARY_CONCURRENCY_LIMIT = 5;

        // Assign Lunch (same time for all)
        activeSections.forEach((section) => {
          for (let day = 0; day < DAYS; day++) {
            state.globalTimetables[branchKey][section][day][LUNCH_PERIOD - 1] =
              {
                subject: "Lunch",
                type: "lunch",
              };
          }
        });

        const branchFaculty = new Set();
        Object.values(config.sectionFaculty || {}).forEach((assignments) => {
          Object.values(assignments).forEach((facultyName) => {
            if (facultyName && facultyName.trim())
              branchFaculty.add(facultyName.trim());
          });
        });

        branchFaculty.forEach((facultyName) => {
          if (state.globalFacultyTimetables[facultyName]) {
            for (let day = 0; day < DAYS; day++) {
              state.globalFacultyTimetables[facultyName][day][
                LUNCH_PERIOD - 1
              ] = {
                subject: "Lunch",
                type: "lunch",
              };
              state.facultyAvailability[facultyName][day][
                LUNCH_PERIOD - 1
              ] = true;
            }
          }
        });

        activeSections.forEach((section) => {
          let sportsAssigned = false;
          const shuffledDays = [...Array(DAYS).keys()].sort(
            () => Math.random() - 0.5
          );

          for (const day of shuffledDays) {
            const sportsSlot =
              state.sharedResourceSchedule["Sports"][day][END_PERIOD - 1];
            if (sportsSlot.length < SPORTS_CONCURRENCY_LIMIT) {
              state.globalTimetables[branchKey][section][day][END_PERIOD - 1] =
                {
                  subject: "Sports",
                  type: "sports",
                };
              sportsSlot.push(`${branchKey}-${section}`);
              sportsAssigned = true;
              break;
            }
          }

          if (!sportsAssigned) {
            console.warn(
              `Could not assign Sports for ${branchKey}-${section}. All last periods are full.`
            );
          }
        });

        activeSections.forEach((section) => {
          let libraryAssigned = false;
          const possibleSlots = [];
          for (let day = 0; day < DAYS; day++) {
            for (let period = 0; period < PERIODS; period++) {
              if (period !== LUNCH_PERIOD - 1) {
                possibleSlots.push({ day, period });
              }
            }
          }
          possibleSlots.sort(() => Math.random() - 0.5);

          for (const { day, period } of possibleSlots) {
            if (
              state.globalTimetables[branchKey][section][day][period] === null
            ) {
              const librarySlot =
                state.sharedResourceSchedule["Library"][day][period];
              if (librarySlot.length < LIBRARY_CONCURRENCY_LIMIT) {
                state.globalTimetables[branchKey][section][day][period] = {
                  subject: "Library",
                  type: "library",
                };
                librarySlot.push(`${branchKey}-${section}`);
                libraryAssigned = true;
                break;
              }
            }
          }

          if (!libraryAssigned) {
            console.warn(
              `Could not assign Library for ${branchKey}-${section}. Trying fallback.`
            );
            for (let day = 0; day < DAYS && !libraryAssigned; day++) {
              for (let period = 0; period < PERIODS; period++) {
                if (
                  state.globalTimetables[branchKey][section][day][period] ===
                  null
                ) {
                  state.globalTimetables[branchKey][section][day][period] = {
                    subject: "Library",
                    type: "library",
                  };
                  libraryAssigned = true;
                  break;
                }
              }
            }
          }
        });
      };

      const findAvailableTheoryForSlot = (
        branchKey,
        section,
        day,
        period,
        config
      ) => {
        const theorySubjects = config.subjects.filter((s) => !isLab(s));
        const shuffledSubjects = [...theorySubjects].sort(
          () => Math.random() - 0.5
        );
        for (const subject of shuffledSubjects) {
          const faculty = config.sectionFaculty?.[section]?.[subject];

          const facultyAvailable =
            faculty &&
            faculty.trim() &&
            state.facultyAvailability[faculty.trim()]
              ? !state.facultyAvailability[faculty.trim()][day][period]
              : true;

          const dailySubjectCount = state.globalTimetables[branchKey][section][
            day
          ].filter((slot) => slot && slot.subject === subject).length;

          if (facultyAvailable && dailySubjectCount < 2) {
            return subject;
          }
        }
        return null;
      };

      const assignLabsWithResourceCoordination = (
        branchKey,
        config,
        activeSections
      ) => {
        activeSections.forEach((section) => {
          const labsToAssign = config.subjects.filter((s) => isLab(s));

          labsToAssign.forEach((lab) => {
            const faculty = config.sectionFaculty?.[section]?.[lab];
            let labAssigned = false;

            const shuffledDays = [...Array(DAYS).keys()].sort(
              () => Math.random() - 0.5
            );

            for (const day of shuffledDays) {
              if (labAssigned) break;

              const possibleStartPeriods = [0, 1, LUNCH_PERIOD + 1].sort(
                () => Math.random() - 0.5
              );

              for (const period of possibleStartPeriods) {
                if (period === LUNCH_PERIOD + 1) {
                  // Post-lunch special case
                  const theorySlotIndex = LUNCH_PERIOD;
                  const labStartSlotIndex = LUNCH_PERIOD + 1;
                  const blockDuration = 1 + LAB_DURATION;
                  if (labStartSlotIndex + LAB_DURATION > PERIODS) continue; // Ensure it doesn't overflow

                  const sectionBlockFree = state.globalTimetables[branchKey][
                    section
                  ][day]
                    .slice(theorySlotIndex, theorySlotIndex + blockDuration)
                    .every((slot) => slot === null);
                  if (!sectionBlockFree) continue;

                  const availableTheory = findAvailableTheoryForSlot(
                    branchKey,
                    section,
                    day,
                    theorySlotIndex,
                    config
                  );
                  if (!availableTheory) continue;

                  const theoryFaculty =
                    config.sectionFaculty?.[section]?.[availableTheory];
                  const labFaculty = faculty;

                  const labFacultyAvailable =
                    labFaculty &&
                    labFaculty.trim() &&
                    state.facultyAvailability[labFaculty.trim()]
                      ? state.facultyAvailability[labFaculty.trim()][day]
                          .slice(
                            labStartSlotIndex,
                            labStartSlotIndex + LAB_DURATION
                          )
                          .every((busy) => !busy)
                      : true;
                  if (!labFacultyAvailable) continue;

                  const resourceCheck = checkSharedResourceAvailability(
                    lab,
                    day,
                    labStartSlotIndex,
                    LAB_DURATION
                  );
                  if (!resourceCheck.isAvailable) continue;

                  // All checks passed, assign theory + lab block
                  // 1. Assign Theory
                  const theorySlotInfo = {
                    subject: availableTheory,
                    type: "theory",
                    faculty: theoryFaculty,
                  };
                  state.globalTimetables[branchKey][section][day][
                    theorySlotIndex
                  ] = theorySlotInfo;
                  if (theoryFaculty && theoryFaculty.trim()) {
                    state.facultyAvailability[theoryFaculty.trim()][day][
                      theorySlotIndex
                    ] = true;
                    state.globalFacultyTimetables[theoryFaculty.trim()][day][
                      theorySlotIndex
                    ] = {
                      subject: availableTheory,
                      section: `${branchKey}-${section}`,
                      type: "theory",
                    };
                  }

                  // 2. Assign Lab
                  for (let i = 0; i < LAB_DURATION; i++) {
                    const slotInfo = {
                      subject: lab,
                      type: "lab",
                      faculty: labFaculty,
                      resource: resourceCheck.resource,
                    };
                    state.globalTimetables[branchKey][section][day][
                      labStartSlotIndex + i
                    ] = slotInfo;
                    if (labFaculty && labFaculty.trim()) {
                      state.facultyAvailability[labFaculty.trim()][day][
                        labStartSlotIndex + i
                      ] = true;
                      state.globalFacultyTimetables[labFaculty.trim()][day][
                        labStartSlotIndex + i
                      ] = {
                        subject: lab,
                        section: `${branchKey}-${section}`,
                        type: "lab",
                      };
                    }
                  }

                  if (resourceCheck.resource) {
                    reserveSharedResource(
                      resourceCheck.resource,
                      day,
                      labStartSlotIndex,
                      LAB_DURATION,
                      branchKey,
                      section
                    );
                  }
                  labAssigned = true;
                  break;
                } else {
                  // Morning labs
                  if (
                    period + LAB_DURATION > LUNCH_PERIOD - 1 &&
                    period < LUNCH_PERIOD - 1
                  )
                    continue; // prevent overlap with lunch
                  if (period + LAB_DURATION > PERIODS) continue; // prevent overflow

                  const sectionSlotsFree = state.globalTimetables[branchKey][
                    section
                  ][day]
                    .slice(period, period + LAB_DURATION)
                    .every((slot) => slot === null);
                  if (!sectionSlotsFree) continue;

                  const facultyAvailable =
                    faculty &&
                    faculty.trim() &&
                    state.facultyAvailability[faculty.trim()]
                      ? state.facultyAvailability[faculty.trim()][day]
                          .slice(period, period + LAB_DURATION)
                          .every((busy) => !busy)
                      : true;
                  if (!facultyAvailable) continue;

                  const resourceCheck = checkSharedResourceAvailability(
                    lab,
                    day,
                    period,
                    LAB_DURATION
                  );
                  if (resourceCheck.isAvailable) {
                    for (let i = 0; i < LAB_DURATION; i++) {
                      const slotInfo = {
                        subject: lab,
                        type: "lab",
                        faculty: faculty,
                        resource: resourceCheck.resource,
                      };
                      state.globalTimetables[branchKey][section][day][
                        period + i
                      ] = slotInfo;
                      if (faculty && faculty.trim()) {
                        state.facultyAvailability[faculty.trim()][day][
                          period + i
                        ] = true;
                        state.globalFacultyTimetables[faculty.trim()][day][
                          period + i
                        ] = {
                          subject: lab,
                          section: `${branchKey}-${section}`,
                          type: "lab",
                        };
                      }
                    }
                    if (resourceCheck.resource) {
                      reserveSharedResource(
                        resourceCheck.resource,
                        day,
                        period,
                        LAB_DURATION,
                        branchKey,
                        section
                      );
                    }
                    labAssigned = true;
                    break;
                  }
                }
              }
            }
            if (!labAssigned) {
              console.warn(
                `Could not assign lab "${lab}" for ${branchKey}-${section}.`
              );
            }
          });
        });
      };

      const assignTheoryWithFacultyCoordination = (
        branchKey,
        config,
        activeSections
      ) => {
        activeSections.forEach((section) => {
          // Get all empty slots for this section
          const emptySlots = [];
          for (let day = 0; day < DAYS; day++) {
            for (let period = 0; period < PERIODS; period++) {
              if (
                state.globalTimetables[branchKey][section][day][period] === null
              ) {
                emptySlots.push({ day, period });
              }
            }
          }

          // Create a subject pool with repetitions to aim for even distribution
          let subjectPool = [];
          const theorySubjects = config.subjects.filter((s) => !isLab(s));
          if (theorySubjects.length > 0) {
            const baseCount = Math.floor(
              emptySlots.length / theorySubjects.length
            );
            const remainder = emptySlots.length % theorySubjects.length;

            theorySubjects.forEach((subject, index) => {
              const count = baseCount + (index < remainder ? 1 : 0);
              for (let i = 0; i < count; i++) {
                subjectPool.push(subject);
              }
            });
          }
          subjectPool.sort(() => Math.random() - 0.5); // Shuffle for variety

          // Fill each empty slot
          emptySlots.forEach(({ day, period }) => {
            let assigned = false;
            // Try to assign a subject from the pool without conflict
            for (let i = 0; i < subjectPool.length; i++) {
              const subject = subjectPool[i];
              const faculty = config.sectionFaculty?.[section]?.[subject];

              const facultyAvailable =
                faculty &&
                faculty.trim() &&
                state.facultyAvailability[faculty.trim()]
                  ? !state.facultyAvailability[faculty.trim()][day][period]
                  : true;

              const dailySubjectCount = state.globalTimetables[branchKey][
                section
              ][day].filter((slot) => slot && slot.subject === subject).length;

              if (facultyAvailable && dailySubjectCount < 2) {
                const slotInfo = { subject, type: "theory", faculty };
                state.globalTimetables[branchKey][section][day][period] =
                  slotInfo;

                if (faculty && faculty.trim()) {
                  if (state.facultyAvailability[faculty.trim()]) {
                    state.facultyAvailability[faculty.trim()][day][
                      period
                    ] = true;
                  }
                  if (state.globalFacultyTimetables[faculty.trim()]) {
                    state.globalFacultyTimetables[faculty.trim()][day][period] =
                      {
                        subject,
                        section: `${branchKey}-${section}`,
                        type: "theory",
                      };
                  }
                }
                subjectPool.splice(i, 1); // Remove assigned subject from pool
                assigned = true;
                break; // Move to next empty slot
              }
            }

            // Fallback: If no subject from the pool could be assigned without conflict,
            // take the first available subject from the pool and assign it with a conflict flag.
            if (!assigned && subjectPool.length > 0) {
              const subject = subjectPool.shift(); // Take the first one
              const faculty = config.sectionFaculty?.[section]?.[subject];

              const slotInfo = { subject, type: "theory", faculty }; // Removed conflict flag
              state.globalTimetables[branchKey][section][day][period] =
                slotInfo;

              console.warn(
                `Fallback assignment for ${branchKey}-${section} at Day ${day}, Period ${period} with subject ${subject}. Potential conflict.`
              );

              if (faculty && faculty.trim()) {
                // Even with conflict, we should show it on the faculty timetable
                if (state.globalFacultyTimetables[faculty.trim()]) {
                  state.globalFacultyTimetables[faculty.trim()][day][period] = {
                    subject,
                    section: `${branchKey}-${section}`,
                    type: "theory",
                  }; // Removed conflict flag
                }
              }
            }
          });
        });
      };

      const checkSharedResourceAvailability = (lab, day, period, duration) => {
        const labLower = lab.toLowerCase();
        let potentialResources = [];

        if (
          labLower.includes("computer") ||
          labLower.includes("data") ||
          labLower.includes("python") ||
          labLower.includes("dbms")
        ) {
          potentialResources = ["Computer Lab 1", "Computer Lab 2"];
        } else if (
          labLower.includes("electronics") ||
          labLower.includes("circuits") ||
          labLower.includes("microcontrollers")
        ) {
          potentialResources = ["Electronics Lab"];
        } else {
          return { isAvailable: true, resource: null };
        }

        for (const resource of potentialResources) {
          let resourceIsFree = true;
          if (
            state.sharedResourceSchedule[resource] &&
            state.sharedResourceSchedule[resource][day]
          ) {
            for (let i = 0; i < duration; i++) {
              if (
                period + i < PERIODS &&
                state.sharedResourceSchedule[resource][day][period + i] !== null
              ) {
                resourceIsFree = false;
                break;
              }
            }
          }
          if (resourceIsFree) {
            return { isAvailable: true, resource: resource };
          }
        }

        return { isAvailable: false, resource: null };
      };

      const reserveSharedResource = (
        resource,
        day,
        period,
        duration,
        branchKey,
        section
      ) => {
        if (!resource || !state.sharedResourceSchedule[resource]) return;

        for (let i = 0; i < duration; i++) {
          state.sharedResourceSchedule[resource][day][
            period + i
          ] = `${branchKey}-${section}`;
        }
      };

      // --- Render Logic ---
      const getSubjectColor = (subject, branchKey = "") => {
        if (!subject) return colorScheme.default;
        if (subject === "Lunch") return colorScheme.lunch;
        if (subject === "Sports") return colorScheme.sports;
        if (subject === "Library") return colorScheme.library;

        if (branchKey && state.branchConfigs[branchKey]) {
          if (isLab(subject)) return colorScheme.lab;
          const theorySubjects = state.branchConfigs[branchKey].subjects.filter(
            (s) => !isLab(s)
          );
          const theoryIndex = theorySubjects.indexOf(subject);
          return theoryIndex !== -1
            ? colorScheme.theory[theoryIndex % colorScheme.theory.length]
            : colorScheme.default;
        }

        return colorScheme.default;
      };

      const renderWelcomePage = () => `
            <div class="max-w-4xl mx-auto p-8 text-center flex flex-col items-center justify-center min-h-screen">
              <h1 class="text-5xl md:text-7xl font-extrabold text-white mb-4">
                Advanced Timetable Generator
              </h1>
              <p class="text-xl text-gray-300 mb-8 max-w-2xl">
                Effortlessly create coordinated timetables for multiple departments. Manage shared resources and cross-branch faculty with ease.
              </p>
              ${Button("get-started-btn", "Get Started →", {
                className: "text-lg",
              })}
              <div class="mt-12 p-6 bg-gray-900/50 rounded-lg border border-gray-700 w-full max-w-3xl">
                <h3 class="text-2xl font-bold text-white mb-4">Key Features</h3>
                <div class="grid md:grid-cols-3 gap-6 text-left">
                  <div class="p-4 bg-gray-800 rounded-lg">
                    <h4 class="font-semibold text-lg text-white mb-2">🚀 Multi-Branch Coordination</h4>
                    <p class="text-gray-400 text-sm">Schedule multiple departments simultaneously.</p>
                  </div>
                  <div class="p-4 bg-gray-800 rounded-lg">
                    <h4 class="font-semibold text-lg text-white mb-2">👨‍🏫 Smart Faculty Allocation</h4>
                    <p class="text-gray-400 text-sm">Avoid conflicts for cross-department faculty.</p>
                  </div>
                  <div class="p-4 bg-gray-800 rounded-lg">
                    <h4 class="font-semibold text-lg text-white mb-2">📋 Customizable & Flexible</h4>
                    <p class="text-gray-400 text-sm">Easily add/remove subjects, sections, and faculty.</p>
                  </div>
                </div>
              </div>
            </div>`;

      const renderBranchSelection = () => `
            <div class="max-w-6xl mx-auto p-4 md:p-8 text-center">
              <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">Select Departments</h1>
              <p class="text-lg text-gray-300 mb-6">Choose one or more departments to generate a coordinated schedule.</p>
              
              <div class="mb-8 p-4 bg-gray-800 rounded-lg border border-gray-700">
                <h3 class="text-xl font-semibold text-white mb-3">Selected Branches (${
                  state.selectedBranches.size
                })</h3>
                <div class="flex flex-wrap gap-2 justify-center">
                  ${
                    Array.from(state.selectedBranches)
                      .map(
                        (branch) => `
                    <span class="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">${branch}</span>
                  `
                      )
                      .join("") ||
                    '<span class="text-gray-400">No branches selected</span>'
                  }
                </div>
              </div>
              
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                ${Object.keys(branches)
                  .map(
                    (branchKey) => `
                  <div class="branch-card ${
                    state.selectedBranches.has(branchKey)
                      ? "branch-selected"
                      : ""
                  } bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 hover:bg-gray-700 hover:border-blue-500 cursor-pointer transition-all transform hover:-translate-y-1" data-branch="${branchKey}">
                    <h2 class="text-2xl font-bold text-white">${branchKey}</h2>
                    <p class="text-gray-400 mt-2">${branches[branchKey].subjects
                      .slice(0, 3)
                      .join(", ")}...</p>
                    <div class="mt-3">
                      ${
                        state.selectedBranches.has(branchKey)
                          ? '<span class="text-green-400 font-semibold">✓ Selected</span>'
                          : '<span class="text-gray-500">Click to select</span>'
                      }
                    </div>
                  </div>
                `
                  )
                  .join("")}
              </div>
              
              ${
                state.selectedBranches.size > 0
                  ? `
                <div class="space-y-4">
                  ${Button(
                    "proceed-to-config-btn",
                    `Configure ${state.selectedBranches.size} Branch${
                      state.selectedBranches.size > 1 ? "es" : ""
                    } →`,
                    { className: "text-lg" }
                  )}
                  ${Button("clear-selection-btn", "Clear Selection", {
                    className: "bg-red-600 hover:bg-red-700 ml-4",
                  })}
                </div>
              `
                  : ""
              }
            </div>`;

      const renderBranchConfiguration = () => {
        const branchesToConfigure = Array.from(state.selectedBranches);
        const currentBranchIndex = branchesToConfigure.indexOf(
          state.currentConfigBranch
        );
        const config = state.branchConfigs[state.currentConfigBranch] || {};

        return `
            <div class="max-w-5xl mx-auto p-4 md:p-8 space-y-8">
              <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between text-center sm:text-left">
                <div>
                  <h1 class="text-4xl md:text-5xl font-bold text-white mb-2">Configure ${
                    state.currentConfigBranch
                  }</h1>
                  <p class="text-lg text-gray-300">Branch ${
                    currentBranchIndex + 1
                  } of ${branchesToConfigure.length}</p>
                </div>
                <div class="flex gap-2 mt-4 sm:mt-0">
                  ${Button("back-to-selection-btn", "Back to Selection", {
                    className: "bg-gray-600 hover:bg-gray-700",
                  })}
                  ${
                    currentBranchIndex > 0
                      ? Button("prev-branch-btn", "← Previous", {
                          className: "bg-gray-600 hover:bg-gray-700",
                        })
                      : ""
                  }
                </div>
              </div>

              <div class="p-6 bg-gray-900 rounded-xl shadow-2xl border border-gray-700 space-y-6">
                ${
                  state.error
                    ? `<div class="p-4 bg-red-800 text-white rounded-md border border-red-600">${state.error}</div>`
                    : ""
                }

                <div class="p-4 bg-gray-800 rounded-lg border border-gray-700">
                    <h3 class="font-semibold text-lg text-white mb-3">Sections Configuration</h3>
                    <div class="flex items-center gap-4 mb-4">
                        <label class="block text-sm font-medium text-gray-300">Number of Sections: <span class="font-bold text-lg text-white">${
                          config.numSections || 1
                        }</span></label>
                        <button id="add-section-btn" class="px-4 py-1 text-sm bg-green-700 hover:bg-green-600 rounded-md transition">+ Add Section</button>
                        <button id="remove-section-btn" class="px-4 py-1 text-sm bg-red-700 hover:bg-red-600 rounded-md transition" ${
                          (config.numSections || 1) <= 1 ? "disabled" : ""
                        }>- Remove Section</button>
                    </div>
                  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                    ${(
                      config.sectionNames ||
                      branches[state.currentConfigBranch].sectionNames
                    )
                      .slice(0, config.numSections || 1)
                      .map((name, index) => {
                        const sectionNameId = `${state.currentConfigBranch}-section-name-${index}`;
                        const sectionInchargeId = `${state.currentConfigBranch}-section-incharge-${index}`;
                        const inchargeValue =
                          (config.sectionIncharges &&
                            config.sectionIncharges[name]) ||
                          "";
                        return `
                            <div class="p-3 bg-gray-700/50 rounded-lg space-y-2 border border-gray-600">
                                ${Input(
                                  sectionNameId,
                                  `Section ${index + 1} Name`,
                                  name,
                                  `e.g., ${state.currentConfigBranch}-A`
                                )}
                                ${Input(
                                  sectionInchargeId,
                                  `Section In-charge`,
                                  inchargeValue,
                                  `Faculty Name`
                                )}
                            </div>
                        `;
                      })
                      .join("")}
                  </div>
                </div>

                <div class="grid md:grid-cols-1 gap-6">
                  ${ListManager(
                    state.currentConfigBranch,
                    "subject",
                    "Subjects and Labs",
                    config.subjects ||
                      branches[state.currentConfigBranch].subjects,
                    "Subject/Lab"
                  )}
                </div>
                
                <div class="mt-6">
                  ${CrossBranchAllocator(state.currentConfigBranch)}
                </div>

                <div class="mt-6">
                  ${SectionFacultyManager(state.currentConfigBranch, config)}
                </div>
                
                <div class="text-center pt-4 space-x-4">
                  ${
                    currentBranchIndex < branchesToConfigure.length - 1
                      ? Button("next-branch-btn", "Save & Next Branch →", {
                          className: "bg-green-600 hover:bg-green-700",
                        })
                      : Button(
                          "generate-all-btn",
                          state.isLoading
                            ? `<span class="flex items-center justify-center"><svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>Generating Coordinated Timetables...</span>`
                            : "Generate All Timetables 🚀",
                          {
                            className:
                              "bg-purple-600 hover:bg-purple-700 text-lg",
                            disabled: state.isLoading,
                          }
                        )
                  }
                </div>
              </div>
            </div>`;
      };

      const renderSectionTimetables = () => {
        const sortedBranches = Object.keys(state.globalTimetables).sort();

        return sortedBranches
          .map((branchKey) => {
            const branchTimetables = state.globalTimetables[branchKey];
            const sectionTimetablesHTML = Object.entries(branchTimetables)
              .sort(([sectionA], [sectionB]) =>
                sectionA.localeCompare(sectionB)
              ) // Sort sections alphabetically
              .map(([sectionName, schedule]) => {
                const inchargeName =
                  state.branchConfigs[branchKey]?.sectionIncharges?.[
                    sectionName
                  ] || "Not Assigned";
                return `
                        <div class="p-4 bg-gray-900 rounded-xl shadow-2xl border border-gray-700 print:shadow-none print:border-none print:p-0">
                            <div class="text-center mb-4">
                                <h3 class="text-2xl font-bold text-white mb-1 print:text-black">
                                    ${branchKey} - ${sectionName}
                                </h3>
                                <p class="text-lg font-medium text-gray-300 print:text-gray-600">
                                    <span class="font-semibold">Section In-charge:</span> ${inchargeName}
                                </p>
                            </div>
                            <div class="overflow-x-auto">
                                <table class="w-full border-collapse text-center">
                                    <thead>
                                        <tr class="bg-gray-800 print:bg-gray-200">
                                            <th class="p-2 border border-gray-600 print:border-gray-400 font-semibold text-white print:text-black">Day/Time</th>
                                            ${[...Array(PERIODS)]
                                              .map(
                                                (_, i) =>
                                                  `<th class="p-2 border border-gray-600 print:border-gray-400 font-semibold text-white print:text-black"><div>P${
                                                    i + 1
                                                  }</div><div class="font-normal text-xs text-gray-400 print:text-black">${
                                                    PERIOD_TIMES[i]
                                                  }</div></th>`
                                              )
                                              .join("")}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        ${schedule
                                          .map(
                                            (dayPeriods, dayIndex) => `
                                            <tr class="odd:bg-gray-800/50 even:bg-gray-800/80 print:odd:bg-gray-100 print:even:bg-white">
                                                <td class="p-2 border border-gray-600 print:border-gray-400 font-bold text-white print:text-black">${
                                                  WEEK_DAYS[dayIndex]
                                                }</td>
                                                ${dayPeriods
                                                  .map(
                                                    (period, periodIndex) => {
                                                      if (
                                                        period?.type ===
                                                          "lab" &&
                                                        periodIndex > 0 &&
                                                        dayPeriods[
                                                          periodIndex - 1
                                                        ]?.subject ===
                                                          period.subject
                                                      )
                                                        return "";
                                                      const subject =
                                                        period?.subject || "";
                                                      const faculty =
                                                        period?.faculty || "";
                                                      const facultyDisplay =
                                                        getFacultyDisplayString(
                                                          faculty,
                                                          branchKey
                                                        );
                                                      return `<td colspan="${
                                                        period?.type === "lab"
                                                          ? LAB_DURATION
                                                          : 1
                                                      }" class="p-2 border border-gray-600 print:border-gray-400 text-sm transition-colors ${getSubjectColor(
                                                        subject,
                                                        branchKey
                                                      )} ${
                                                        subject
                                                          ? "text-white"
                                                          : "text-gray-400"
                                                      } print:text-black">
                                                        <div class="font-medium">${subject}</div>
                                                        ${
                                                          facultyDisplay
                                                            ? `<div class="text-xs opacity-80">${facultyDisplay}</div>`
                                                            : ""
                                                        }
                                                        ${
                                                          period?.resource
                                                            ? `<div class="text-xs opacity-60">${period.resource}</div>`
                                                            : ""
                                                        }
                                                    </td>`;
                                                    }
                                                  )
                                                  .join("")}
                                            </tr>
                                        `
                                          )
                                          .join("")}
                                    </tbody>
                                </table>
                            </div>
                        </div>`;
              })
              .join("");

            if (sectionTimetablesHTML.length === 0) return "";

            return `
                <div class="mb-12 print:break-before-page bg-gray-900/50 p-4 md:p-6 rounded-2xl border border-gray-700">
                    <h2 class="text-3xl md:text-4xl font-extrabold text-center text-blue-400 mb-6 pb-2 border-b-2 border-gray-700">${branchKey} Department Timetables</h2>
                    <div class="space-y-8">
                        ${sectionTimetablesHTML}
                    </div>
                </div>
                `;
          })
          .join("");
      };

      const renderFacultyTimetablesByBranch = () => {
        const facultyByBranch = {};

        // Group faculty by their home branch
        Object.keys(state.globalFacultyTimetables).forEach((facultyName) => {
          const homeBranch = facultyHomeBranch[facultyName] || "Unassigned"; // Fallback for faculty not in map
          if (!facultyByBranch[homeBranch]) {
            facultyByBranch[homeBranch] = [];
          }
          facultyByBranch[homeBranch].push(facultyName);
        });

        // Sort branches alphabetically
        const sortedBranches = Object.keys(facultyByBranch).sort();

        return sortedBranches
          .map((branchKey) => {
            const facultyTimetablesForBranch = facultyByBranch[branchKey]
              .filter((facultyName) =>
                facultyName
                  .toLowerCase()
                  .includes(state.facultySearchQuery.toLowerCase())
              )
              .sort() // Sort faculty names alphabetically
              .map((facultyName) => {
                const schedule = state.globalFacultyTimetables[facultyName];
                // Skip if faculty has no assignments
                const hasAssignments = schedule.some((day) =>
                  day.some((period) => period && period.subject !== "Lunch")
                );
                if (!hasAssignments) return "";

                return `
                        <div class="p-4 bg-gray-900 rounded-xl shadow-2xl border border-gray-700 print:shadow-none print:border-none print:p-0">
                            <h3 class="text-2xl font-bold text-center text-white mb-4 print:text-black">
                                Faculty: ${facultyName}
                                <span class="text-lg font-normal text-gray-300 print:text-gray-600 block mt-1">Teaching Schedule</span>
                            </h3>
                            <div class="overflow-x-auto">
                                <table class="w-full border-collapse text-center">
                                    <thead>
                                        <tr class="bg-gray-800 print:bg-gray-200">
                                            <th class="p-2 border border-gray-600 print:border-gray-400 font-semibold text-white print:text-black">Day/Time</th>
                                            ${[...Array(PERIODS)]
                                              .map(
                                                (_, i) =>
                                                  `<th class="p-2 border border-gray-600 print:border-gray-400 font-semibold text-white print:text-black"><div>P${
                                                    i + 1
                                                  }</div><div class="font-normal text-xs text-gray-400 print:text-black">${
                                                    PERIOD_TIMES[i]
                                                  }</div></th>`
                                              )
                                              .join("")}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        ${schedule
                                          .map(
                                            (dayPeriods, dayIndex) => `
                                            <tr class="odd:bg-gray-800/50 even:bg-gray-800/80 print:odd:bg-gray-100 print:even:bg-white">
                                                <td class="p-2 border border-gray-600 print:border-gray-400 font-bold text-white print:text-black">${
                                                  WEEK_DAYS[dayIndex]
                                                }</td>
                                                ${dayPeriods
                                                  .map(
                                                    (period, periodIndex) => {
                                                      if (
                                                        period?.type ===
                                                          "lab" &&
                                                        periodIndex > 0 &&
                                                        dayPeriods[
                                                          periodIndex - 1
                                                        ]?.subject ===
                                                          period.subject
                                                      )
                                                        return "";
                                                      const subject =
                                                        period?.subject || "";
                                                      const section =
                                                        period?.section || "";
                                                      return `<td colspan="${
                                                        period?.type === "lab"
                                                          ? LAB_DURATION
                                                          : 1
                                                      }" class="p-2 border border-gray-600 print:border-gray-400 text-sm transition-colors ${getSubjectColor(
                                                        subject
                                                      )} ${
                                                        subject
                                                          ? "text-white"
                                                          : "text-gray-400"
                                                      } print:text-black">
                                                        <div class="font-medium">${subject}</div>
                                                        ${
                                                          section
                                                            ? `<div class="text-xs opacity-80">${section}</div>`
                                                            : ""
                                                        }
                                                    </td>`;
                                                    }
                                                  )
                                                  .join("")}
                                            </tr>
                                        `
                                          )
                                          .join("")}
                                    </tbody>
                                </table>
                            </div>
                        </div>`;
              })
              .filter(Boolean)
              .join("");

            // Don't render a branch heading if no faculty from that branch have schedules to show
            if (facultyTimetablesForBranch.length === 0) return "";

            return `
                <div class="mb-12 print:break-before-page bg-gray-900/50 p-4 md:p-6 rounded-2xl border border-gray-700">
                    <h2 class="text-3xl md:text-4xl font-extrabold text-center text-blue-400 mb-6 pb-2 border-b-2 border-gray-700">${branchKey} Department Faculty</h2>
                    <div class="space-y-8">
                        ${facultyTimetablesForBranch}
                    </div>
                </div>
                `;
          })
          .join("");
      };

      const renderTimetables = () => {
        const studentTabActive = state.activeTab === "student";
        const facultyTabActive = state.activeTab === "faculty";

        return `
            <div class="p-4 md:p-8" id="timetable-results">
                <div class="text-center mb-8 print:hidden">
                    <h1 class="text-4xl md:text-5xl font-bold text-white mb-2">Coordinated Timetables</h1>
                    <p class="text-gray-300 mb-4">Generated for ${Array.from(
                      state.selectedBranches
                    ).join(", ")}</p>
                    <div class="flex justify-center items-center flex-wrap gap-4 mt-6">
                        ${Button("start-over-btn", "Start Over")}
                        ${Button("export-json-btn", "Export JSON")}
                        ${Button("print-btn", "Print / Save as PDF")}
                        ${Button("regenerate-btn", "Regenerate", {
                          className: "bg-purple-600 hover:bg-purple-700",
                        })}
                    </div>
                </div>

                <!-- TAB NAVIGATION -->
                <div class="flex justify-center border-b border-gray-700 mb-8 print:hidden">
                    <button id="student-tab-btn" class="px-6 py-3 font-semibold rounded-t-lg transition-colors ${
                      studentTabActive
                        ? "bg-gray-800 text-white"
                        : "text-gray-400 hover:bg-gray-800/50"
                    }">
                        Student Timetables
                    </button>
                    <button id="faculty-tab-btn" class="px-6 py-3 font-semibold rounded-t-lg transition-colors ${
                      facultyTabActive
                        ? "bg-gray-800 text-white"
                        : "text-gray-400 hover:bg-gray-800/50"
                    }">
                        Faculty Timetables
                    </button>
                </div>

                ${
                  facultyTabActive
                    ? `
                <div class="mb-8 max-w-xl mx-auto print:hidden">
                    <label for="faculty-search-input" class="sr-only">Search Faculty</label>
                    <input id="faculty-search-input" type="search" placeholder="🔍 Search faculty by name..." value="${state.facultySearchQuery}"
                           class="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition text-white placeholder-gray-400">
                </div>
                `
                    : ""
                }

                <div class="space-y-12">
                   ${
                     studentTabActive
                       ? renderSectionTimetables()
                       : renderFacultyTimetablesByBranch()
                   }
                </div>
            </div>`;
      };

      function render() {
        switch (state.step) {
          case 0:
            app.innerHTML = renderWelcomePage();
            break;
          case 1:
            app.innerHTML = renderBranchSelection();
            break;
          case 2:
            app.innerHTML = renderBranchConfiguration();
            break;
          case 3:
            app.innerHTML = renderTimetables();
            break;
          default:
            app.innerHTML = renderWelcomePage();
        }
      }

      // --- Event Handlers & Initializers ---
      function toggleBranchSelection(branchKey) {
        if (state.selectedBranches.has(branchKey)) {
          state.selectedBranches.delete(branchKey);
          delete state.branchConfigs[branchKey];
        } else {
          state.selectedBranches.add(branchKey);
          const branchData = branches[branchKey];
          const sectionFaculty = {};

          branchData.sectionNames.forEach((sectionName) => {
            const defaultAssignments = {};
            branchData.subjects.forEach((subject) => {
              if (branchData.faculty[subject]) {
                defaultAssignments[subject] = branchData.faculty[subject];
              } else {
                defaultAssignments[subject] = "";
              }
            });
            sectionFaculty[sectionName] = defaultAssignments;
          });

          state.branchConfigs[branchKey] = {
            numSections: 1,
            sectionNames: [...branchData.sectionNames],
            subjects: [...branchData.subjects],
            faculty: { ...branchData.faculty }, // Keep for legacy/defaults if needed
            crossBranchAssignments: [],
            sectionIncharges: { ...(branchData.sectionIncharges || {}) },
            sectionFaculty: sectionFaculty,
          };
        }
        render();
      }

      function proceedToConfiguration() {
        if (state.selectedBranches.size === 0) return;
        state.step = 2;
        state.currentConfigBranch = Array.from(state.selectedBranches)[0];
        render();
      }

      function navigateToBranch(direction) {
        const branchesToConfigure = Array.from(state.selectedBranches);
        const currentIndex = branchesToConfigure.indexOf(
          state.currentConfigBranch
        );
        updateBranchConfig();
        const newIndex = currentIndex + direction;

        if (newIndex >= 0 && newIndex < branchesToConfigure.length) {
          state.currentConfigBranch = branchesToConfigure[newIndex];
          render();
        }
      }

      function updateBranchConfig() {
        const branchKey = state.currentConfigBranch;
        if (!branchKey || !state.branchConfigs[branchKey]) return;

        const config = state.branchConfigs[branchKey];

        const newSectionNames = [];
        const newSectionIncharges = {};
        document
          .querySelectorAll(`input[id^="${branchKey}-section-name-"]`)
          .forEach((nameEl, index) => {
            const sectionName = nameEl.value.trim();
            if (sectionName) {
              newSectionNames.push(sectionName);
              const inchargeEl = document.getElementById(
                `${branchKey}-section-incharge-${index}`
              );
              if (inchargeEl && inchargeEl.value.trim()) {
                newSectionIncharges[sectionName] = inchargeEl.value.trim();
              }
            }
          });
        config.sectionNames = newSectionNames;
        config.sectionIncharges = newSectionIncharges;

        config.subjects = [];
        document
          .querySelectorAll(`input[id^="${branchKey}-subject-"]`)
          .forEach((el) => {
            if (el.value) config.subjects.push(el.value.trim());
          });

        document.querySelectorAll(".section-faculty-input").forEach((input) => {
          const branch = input.dataset.branch;
          const section = input.dataset.section;
          const subject = input.dataset.subject;
          if (branch === branchKey && section && subject) {
            if (!config.sectionFaculty[section]) {
              config.sectionFaculty[section] = {};
            }
            config.sectionFaculty[section][subject] = input.value;
          }
        });
      }

      function handleExportJSON() {
        if (!state.globalTimetables) return;
        const dataStr = JSON.stringify(
          {
            selectedBranches: Array.from(state.selectedBranches),
            branchConfigs: state.branchConfigs,
            studentTimetables: state.globalTimetables,
            facultyTimetables: state.globalFacultyTimetables,
            resourceUtilization: state.sharedResourceSchedule,
            generatedAt: new Date().toISOString(),
          },
          null,
          2
        );
        const link = document.createElement("a");
        link.href =
          "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);
        link.download = `coordinated-timetables-${Array.from(
          state.selectedBranches
        ).join("-")}.json`;
        link.click();
      }

      function startOver() {
        Object.assign(state, {
          step: 0,
          selectedBranches: new Set(),
          branchConfigs: {},
          globalTimetables: {},
          globalFacultyTimetables: {},
          sharedResourceSchedule: {},
          facultyAvailability: {},
          error: null,
          currentConfigBranch: null,
          activeTab: "student",
          facultySearchQuery: "",
        });
        render();
      }

      document.addEventListener("DOMContentLoaded", () => {
        render();

        app.addEventListener("click", (e) => {
          const target = e.target;
          const branchCard = target.closest(".branch-card");

          if (target.id === "get-started-btn") {
            state.step = 1;
            render();
          } else if (branchCard) {
            toggleBranchSelection(branchCard.dataset.branch);
          } else if (target.id === "proceed-to-config-btn") {
            proceedToConfiguration();
          } else if (target.id === "clear-selection-btn") {
            state.selectedBranches.clear();
            state.branchConfigs = {};
            render();
          } else if (target.id === "back-to-selection-btn") {
            state.step = 1;
            render();
          } else if (target.id === "prev-branch-btn") {
            navigateToBranch(-1);
          } else if (target.id === "next-branch-btn") {
            navigateToBranch(1);
          } else if (
            target.id === "generate-all-btn" ||
            target.closest("#generate-all-btn")
          ) {
            updateBranchConfig();
            generateCoordinatedTimetables();
          } else if (target.id === "start-over-btn") {
            startOver();
          } else if (target.id === "export-json-btn") {
            handleExportJSON();
          } else if (target.id === "print-btn") {
            window.print();
          } else if (target.id === "regenerate-btn") {
            generateCoordinatedTimetables();
          } else if (target.id === "student-tab-btn") {
            if (state.activeTab !== "student") {
              state.activeTab = "student";
              render();
            }
          } else if (target.id === "faculty-tab-btn") {
            if (state.activeTab !== "faculty") {
              state.activeTab = "faculty";
              render();
            }
          }

          const addCrossBtn = target.closest(".add-cross-btn");
          if (addCrossBtn) {
            const branchKey = addCrossBtn.dataset.branch;
            const sectionEl = document.getElementById(
              `cross-assign-section-${branchKey}`
            );
            const subjectEl = document.getElementById(
              `cross-assign-subject-${branchKey}`
            );
            const facultyEl = document.getElementById(
              `cross-assign-faculty-${branchKey}`
            );

            if (
              branchKey &&
              sectionEl.value &&
              subjectEl.value &&
              facultyEl.value
            ) {
              const config = state.branchConfigs[branchKey];
              const selectedSection = sectionEl.value;
              const subject = subjectEl.value;
              const faculty = facultyEl.value;

              const sectionsToUpdate =
                selectedSection === "*"
                  ? config.sectionNames.slice(0, config.numSections)
                  : [selectedSection];

              sectionsToUpdate.forEach((sectionName) => {
                config.crossBranchAssignments =
                  config.crossBranchAssignments.filter(
                    (a) => !(a.section === sectionName && a.subject === subject)
                  );

                config.crossBranchAssignments.push({
                  section: sectionName,
                  subject: subject,
                  faculty: faculty,
                });

                if (!config.sectionFaculty[sectionName])
                  config.sectionFaculty[sectionName] = {};
                config.sectionFaculty[sectionName][subject] = faculty;
              });

              subjectEl.value = "";
              facultyEl.value = "";
              render();
            }
          }

          const removeCrossBtn = target.closest(".remove-cross-assignment-btn");
          if (removeCrossBtn) {
            const branchKey = removeCrossBtn.dataset.branch;
            const index = parseInt(removeCrossBtn.dataset.index, 10);
            const config = state.branchConfigs[branchKey];
            if (config && config.crossBranchAssignments[index]) {
              const removedAssignment = config.crossBranchAssignments.splice(
                index,
                1
              )[0];

              const defaultFaculty =
                branches[branchKey].faculty[removedAssignment.subject] || "";
              const sectionName = removedAssignment.section;

              if (config.sectionFaculty[sectionName]) {
                config.sectionFaculty[sectionName][removedAssignment.subject] =
                  defaultFaculty;
              }

              render();
            }
          }

          const addBtn = target.closest(".add-item-btn");
          if (addBtn) {
            const branchKey = addBtn.dataset.branch;
            const type = addBtn.dataset.type;
            const config = state.branchConfigs[branchKey];

            if (branchKey && type && config) {
              if (type === "subject") {
                const newItemName = `New Subject/Lab ${
                  config.subjects.length + 1
                }`;
                config.subjects.push(newItemName);
                config.sectionNames
                  .slice(0, config.numSections)
                  .forEach((sectionName) => {
                    if (config.sectionFaculty[sectionName]) {
                      config.sectionFaculty[sectionName][newItemName] = "";
                    }
                  });
              }
              render();
            }
          }

          const removeBtn = target.closest(".remove-item-btn");
          if (removeBtn) {
            const branchKey = removeBtn.dataset.branch;
            const type = removeBtn.dataset.type;
            const index = parseInt(removeBtn.dataset.index, 10);
            const config = state.branchConfigs[branchKey];

            if (config) {
              let itemToRemove = "";
              if (type === "subject" && config.subjects[index]) {
                itemToRemove = config.subjects.splice(index, 1)[0];
              }

              if (itemToRemove) {
                config.sectionNames
                  .slice(0, config.numSections)
                  .forEach((sectionName) => {
                    if (config.sectionFaculty[sectionName]) {
                      delete config.sectionFaculty[sectionName][itemToRemove];
                    }
                  });
                config.crossBranchAssignments =
                  config.crossBranchAssignments.filter(
                    (a) => a.subject !== itemToRemove
                  );
              }
              render();
            }
          }

          if (target.id === "add-section-btn") {
            const config = state.branchConfigs[state.currentConfigBranch];
            config.numSections++;
            if (config.sectionNames.length < config.numSections) {
              const newLetter = String.fromCharCode(
                65 + config.sectionNames.length
              );
              const newSectionName = `${state.currentConfigBranch}-${newLetter}`;
              config.sectionNames.push(newSectionName);
              if (!config.sectionIncharges) config.sectionIncharges = {};
              config.sectionIncharges[newSectionName] = "";

              const defaultAssignments = {};
              config.subjects.forEach((subject) => {
                defaultAssignments[subject] =
                  branches[state.currentConfigBranch].faculty[subject] || "";
              });
              config.sectionFaculty[newSectionName] = defaultAssignments;
            }
            render();
          }

          if (target.id === "remove-section-btn") {
            const config = state.branchConfigs[state.currentConfigBranch];
            if (config.numSections > 1) {
              config.numSections--;
              render();
            }
          }
        });

        app.addEventListener("input", (e) => {
          const { target } = e;

          if (target.id === "faculty-search-input") {
            state.facultySearchQuery = target.value;
            render();
          } else if (target.classList.contains("section-faculty-input")) {
            const branch = target.dataset.branch;
            const section = target.dataset.section;
            const subject = target.dataset.subject;
            if (branch && section && subject && state.branchConfigs[branch]) {
              if (!state.branchConfigs[branch].sectionFaculty[section]) {
                state.branchConfigs[branch].sectionFaculty[section] = {};
              }
              state.branchConfigs[branch].sectionFaculty[section][subject] =
                target.value;
            }
          }
        });

        app.addEventListener("change", (e) => {
          const { target } = e;
          const id = target.id;

          if (id.includes("-section-name-")) {
            const parts = id.split("-");
            const branchKey = parts[0];
            const index = parseInt(parts[parts.length - 1], 10);
            const config = state.branchConfigs[branchKey];
            if (config) {
              const oldName = config.sectionNames[index];
              const newName = target.value;
              config.sectionNames[index] = newName;

              if (oldName !== newName) {
                if (
                  config.sectionIncharges &&
                  config.sectionIncharges[oldName] !== undefined
                ) {
                  config.sectionIncharges[newName] =
                    config.sectionIncharges[oldName];
                  delete config.sectionIncharges[oldName];
                }
                if (config.sectionFaculty && config.sectionFaculty[oldName]) {
                  config.sectionFaculty[newName] =
                    config.sectionFaculty[oldName];
                  delete config.sectionFaculty[oldName];
                }

                (config.crossBranchAssignments || []).forEach((assignment) => {
                  if (assignment.section === oldName) {
                    assignment.section = newName;
                  }
                });
              }
            }
          } else if (id.includes("-section-incharge-")) {
            const parts = id.split("-");
            const branchKey = parts[0];
            const index = parseInt(parts[parts.length - 1], 10);
            const config = state.branchConfigs[branchKey];
            if (config) {
              const sectionName = config.sectionNames[index];
              if (sectionName) {
                if (!config.sectionIncharges) config.sectionIncharges = {};
                config.sectionIncharges[sectionName] = target.value;
              }
            }
          } else if (id.includes("-subject-")) {
            const parts = id.split("-");
            const branchKey = parts[0];
            const index = parseInt(parts[parts.length - 1], 10);
            const config = state.branchConfigs[branchKey];
            if (config) {
              const oldSubject = config.subjects[index];
              const newSubject = target.value;
              config.subjects[index] = newSubject;

              if (oldSubject !== newSubject) {
                config.sectionNames
                  .slice(0, config.numSections)
                  .forEach((sectionName) => {
                    if (
                      config.sectionFaculty[sectionName] &&
                      config.sectionFaculty[sectionName][oldSubject] !==
                        undefined
                    ) {
                      config.sectionFaculty[sectionName][newSubject] =
                        config.sectionFaculty[sectionName][oldSubject];
                      delete config.sectionFaculty[sectionName][oldSubject];
                    }
                  });
                (config.crossBranchAssignments || []).forEach((assignment) => {
                  if (assignment.subject === oldSubject) {
                    assignment.subject = newSubject;
                  }
                });
              }
              render();
            }
          }
        });
      });