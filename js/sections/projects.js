const projectsData = [
  {
    id: 1,
    title: 'ASBL POSTER',
    tools: 'Photoshop',
    type: 'Ad Poster',
    image: './assets/my-works/asbl-poster/1080x1080.png',
    images: [
      './assets/my-works/asbl-poster/1080x1080.png',
      './assets/my-works/asbl-poster/1080x1920.png',
      './assets/my-works/asbl-poster/bus-stop-mockup.png'
    ],
    projectOverview: 'Designed a high-impact real estate advertisement poster for ASBL, focused on clearly communicating urgency and value through strong visual hierarchy and bold composition.',
    keyHighlights: [
      'Created a bold typographic hierarchy with “30” as the focal point to grab attention instantly',
      'Integrated architectural renders seamlessly with typography for a cohesive visual',
      'Used a deep blue night color palette to convey a premium and aspirational feel',
      'Focused on clarity and readability for large-format visibility'
    ],
    thumbnail: './assets/my-works/asbl-poster/bus-stop-mockup.png',
    column: 2,
    row: 2,
  },
  {
    id: 2,
    title: 'DUAL SENSE',
    tools: 'Figma',
    type: 'Product Design',
    image: './assets/my-works/game-console/dualsense.png',
    images: [
      './assets/my-works/game-console/dualsense.png'
    ],
    projectOverview: 'Designed a modern product UI card for a gaming controller, focusing on visual depth, product clarity, and a premium e-commerce experience.',
    keyHighlights: [
      'Designed a glassmorphic-style UI card with soft gradients and layered depth',
      'Created a clear visual hierarchy to highlight product name, pricing, and CTA',
      'Used bold color contrasts to make the product stand out against the background',
      'Integrated product-focused micro details like color options and action buttons',
      'Focused on balance between aesthetics and usability for an e-commerce layout'
    ],
    thumbnail: './assets/my-works/game-console/dualsense.png',
    column: 2,
    row: 2,
  },
  {
    id: 3,
    title: 'FAST POSTER',
    tools: 'Photoshop',
    type: 'Ad Poster',
    image: './assets/my-works/fast-poster/car-poster.png',
    images: [
      './assets/my-works/fast-poster/car-poster.png',
      './assets/my-works/fast-poster/fast-mockup.png'
    ],
    projectOverview: 'Created a speed-themed experimental poster focused on conveying motion and impact through bold typography, composition, and visual flow.',
    keyHighlights: [
      'Used oversized typography as a primary design element to create scale and impact',
      'Designed a dynamic composition by aligning the car’s movement with the typography',
      'Applied directional flow to visually represent speed and motion',
      'Balanced minimal color usage with strong contrast to maintain clarity',
      'Focused on layout, spacing, and hierarchy to keep the design clean yet expressive'
    ],
    thumbnail: './assets/my-works/fast-poster/fast-mockup.png',
    column: 2,
    row: 2,
  },
  {
    id: 4,
    title: 'MALLUABLE',
    tools: 'Illustrator',
    type: 'Brand Identity',
    image: './assets/my-works/business-card/business-card-1.jpg',
    images: [
      './assets/my-works/business-card/business-card-1.jpg',
      './assets/my-works/business-card/business-card-2.jpg',
      './assets/my-works/business-card/beige-minimalist-mockup-instagram-post.png'
    ],
    projectOverview: 'Designed a complete brand identity and business card system for a life coaching brand, focusing on elegance, clarity, and a premium visual tone.',
    keyHighlights: [
      'Created a minimal logo mark with geometric forms to represent growth and adaptability',
      'Developed a cohesive brand color palette using deep blue and gold for a premium feel',
      'Designed front and back business card layouts with clear information hierarchy',
      'Focused on typography pairing to balance professionalism and approachability',
      'Ensured print-ready alignment and spacing for real-world usage'
    ],
    thumbnail: './assets/my-works/business-card/beige-minimalist-mockup-instagram-post.png',
    column: 2,
    row: 2,
  },
  {
    id: 5,
    title: 'RECIPE BOOK',
    tools: 'InDesign, Illustrator',
    type: 'Print Design',
    image: './assets/my-works/cook-book/cookbook.jpg',
    images: [
      './assets/my-works/cook-book/cookbook.jpg',
      './assets/my-works/cook-book/cookbook2.jpg',
      './assets/my-works/cook-book/cookbook3.jpg',
      './assets/my-works/cook-book/cookbook4.jpg',
      './assets/my-works/cook-book/cookbook-magazine.png',
      './assets/my-works/cook-book/magazine-mockup-4.png'
    ],
    projectOverview: 'Designed a food magazine focused on dessert recipes, including cover design, inner page layouts, and a custom badge logo to create a cohesive editorial identity.',
    keyHighlights: [
      'Designed the magazine cover with strong visual hierarchy and branding',
      'Created clean, readable inner page layouts for recipes and content flow',
      'Designed a custom badge-style logo to reinforce the magazine’s identity',
      'Focused on typography, spacing, and grid systems for editorial clarity',
      'Ensured print-ready layout with consistent margins and alignment'
    ],
    thumbnail: './assets/my-works/cook-book/cookbook-magazine.png',
    column: 2,
    row: 2,

  },
  {
    id: 11,
    title: 'TASK MANAGEMENT APP',
    tools: 'Figma',
    type: 'UX Case Study · Mobile App',
    image: './assets/my-works/indusole/add-task-two-phone.png',
    thumbnail: './assets/my-works/task-managemnet-app/task-app.png',
    column: 3,
    row: 2,
    projectOverview: 'Designed the Task Management module of Indesol Global\'s multi-module business app. Sole product designer, end-to-end. The same shell hosts Finance, ERP, and other tools. Users switch between them via an All Apps button. I designed the full Task module across every user role, from splash and onboarding through to reports. This case study focuses on one design thread that runs through the product, the one I think is the most interesting to talk about. The full design covers a lot more than what\'s described here.',
    keyHighlights: [
      'My role: Sole product designer, end-to-end',
      'Client: Indesol Global',
      'Platform: Mobile',
      'Principle throughout: inform the user, never impose on them'
    ],
    sections: [
      {
        title: 'What the app is',
        text: 'A team task management tool for the workplace. There are three roles:\n\n· Admin: manages users and policies\n· Delegator: creates tasks and assigns them (down to Delegatees, sideways to other Delegators, or to themselves)\n· Delegatee: receives and executes tasks; cannot reassign\n\nI designed screens for all three roles: Admin, Delegator, and Delegatee. This case study focuses on the Delegator because they\'re the only role that both sends and receives tasks, which means their queue gets crowded fastest, and they benefit most from the design decisions described below.'
      },
      {
        title: 'The problem I wanted to solve',
        text: 'While designing the app, one thing kept bothering me about how task management tools usually handle priority. Most apps let users set a priority (High, Medium, Low) when creating a task. It looks clean on paper. In practice, it falls apart.\n\nEverything ends up tagged High. Senders inflate priority because they want their own task done first. The priority flag stops being a signal; it becomes noise.\n\nEven when priority is set honestly, it isn\'t enough on its own. A High-priority task due in five days isn\'t more urgent than a Medium-priority task due in two hours. A High-priority parent task with five open subtasks behind it is a different shape of work than a standalone one. Static priority tags can\'t capture that context.\n\nAnd the sender, the Delegator, has no way of knowing whether the person they\'re about to assign to is already drowning. They just keep adding. So the design challenge inside the broader task-management brief became: how do we help users finish their work, given that priority alone won\'t tell them what to finish first?\n\nThat question shaped three pieces of the design.'
      },
      {
        title: 'Three pieces of the design',
        text: 'These three pieces work together. None of them blocks the user, none of them adds a new mode to learn; they just surface information at the moments it actually helps.'
      },
      {
        title: '1 · A contextual alert when the queue gets heavy',
        images: ['./assets/my-works/indusole/contextual-alert.png'],
        text: 'When a user\'s active task count crosses a threshold, a small amber alert appears with the workload status and a single action: Smart Sort.\n\nThe alert is system-wide. It can appear on the Dashboard, the Tasks screen, or anywhere the user is when the threshold trips. It\'s dismissible. The wording is deliberately neutral: "your workload is high today", not "you\'re overloaded."\n\nThe action is one button. Tapping Smart Sort takes the user to the Tasks screen with the Smart Sort toggle already on, list re-ranked, ready to go.'
      },
      {
        title: '2 · Smart Sort, a toggle on the Tasks screen',
        images: ['./assets/my-works/indusole/tasks-smart-sort.png'],
        text: 'Smart Sort lives on the Tasks screen as a simple switch with the subtitle "Smart ranking by urgency and deadline."\n\nWhen the user turns it on, the task list re-ranks itself using a combination of signals rather than just one:\n\n· The priority that was set when the task was created\n· The due date\n· Whether the task is a parent with open subtasks\n· When the task was assigned\n\nThe reason for combining signals is the reason this feature exists. Priority tags alone are unreliable. So the system looks at more than just what the sender said. The toggle takes a list that looks like everything is equally urgent and turns it into one where the actual most-important thing sits at the top.\n\nThe user experience is just a switch. The logic sits inside.'
      },
      {
        title: '3 · Workload-aware Assignee, protecting the receiver',
        images: ['./assets/my-works/indusole/add-task-two-phone.png'],
        text: 'When the Delegator goes to assign a task, the assignee picker shows each person\'s current load: Active Queue or Heavy Queue.\n\nIf they pick someone with a Heavy Queue, an inline message appears:\n\n"Harsh has 7 active tasks, 2 overdue. Continue assigning, or pick someone with more capacity?"\n\nIt never blocks the assignment. The Delegator might have a perfectly good reason: the task is critical, the person is the only one qualified. The design respects that. It just makes sure the decision is informed.\n\nThis is the single moment in the product where workload awareness actively interrupts a flow. Everywhere else the app stays out of the way.'
      },
      {
        title: 'The thread connecting all three',
        text: 'The same idea runs through every piece: inform, don\'t impose.\n\nThe user keeps control at every step. The alert is dismissible. Smart Sort can be turned off. The assignee warning can be ignored. None of them trap the user in a mode or force a decision.',
        comparison: [
          { common: 'Show a workload score ("you\'re 80% loaded")', thisApp: 'Show a count and a single action ("7 active, 2 overdue. Smart Sort?")' },
          { common: 'Force the user into a focus mode', thisApp: 'One toggle, off by default, always escapable' },
          { common: 'Block the user from assigning to a busy teammate', thisApp: 'Inform the assigner, let them decide' },
          { common: 'Make the user filter and sort manually every time', thisApp: 'One toggle, the system handles the ranking' },
          { common: 'Treat priority tags as the source of truth', thisApp: 'Treat them as one signal among several' }
        ]
      },
      {
        title: 'The screens',
        text: 'The full design covers Dashboard, Tasks, Task Details, Add Task, Notes, Team, and Reports (Personal and Team Overview), plus the supporting Priority Assistance and Smart Sort Active flows.',
        screens: [
          { image: './assets/my-works/indusole/dashboard-annotated.png', caption: 'Dashboard: Calendar, Due Today, Task Summary, Team Snapshot. The information surface for the Delegator role.', tags: ['dashboard', 'calendar', 'due today', 'task summary', 'team snapshot'] },
          { image: './assets/my-works/indusole/tasks-annotated.png', caption: 'Tasks: Segmentation toggle (All / My Tasks / Assigned by me) and consolidated Filters dropdown.', tags: ['tasks', 'all tasks', 'my tasks', 'assigned by me', 'filters'] },
          { image: './assets/my-works/indusole/tasks-smart-sort.png', caption: 'Smart Sort active: task list re-ranked by urgency and deadline. Top priorities surface automatically.', tags: ['tasks', 'smart sort', 'top priority', 'up next', 'overdue'] },
          { image: './assets/my-works/indusole/add-task-annotated.png', caption: 'Add Task: flexible form with priority, recurrence, assignee workload awareness, and parent task linking.', tags: ['add task', 'priority', 'recurrence', 'assignee', 'parent task'] },
          { image: './assets/my-works/indusole/task-details-annotated.png', caption: 'Task Details: centralised view of a single task, designed to reduce context-switching during execution.', tags: ['task details', 'metadata', 'priority', 'attachments', 'subtasks'] },
          { image: './assets/my-works/indusole/notes-list-annotated.png', caption: 'Notes: quick-capture list with timestamp indexing and one-tap creation.', tags: ['notes', 'quick capture', 'list view', 'search'] },
          { image: './assets/my-works/indusole/note-editor-annotated.png', caption: 'Note editor: auto timestamp, floating toolbar (formatting, markup, attachments, undo/redo). Saving is one tap.', tags: ['note editor', 'auto timestamp', 'floating toolbar', 'save'] },
          { image: './assets/my-works/indusole/team-annotated.png', caption: 'Team: workload indicators per member, Pending and Overdue counts, Quick Assign on each row.', tags: ['team', 'workload', 'pending', 'overdue', 'assign task'] },
          { image: './assets/my-works/indusole/reports-personal-annotated.png', caption: 'Reports (Personal): productivity score, completion trends, category distribution.', tags: ['reports', 'productivity score', 'completion trend', 'category distribution'] },
          { image: './assets/my-works/indusole/reports-team-annotated.png', caption: 'Reports (Team): per-member breakdown, top contributors, team-wide trends.', tags: ['reports', 'team overview', 'top contributors', 'team metrics'] }
        ]
      },

      {
        title: 'Reflection',
        items: [
          '<strong>The threshold for the alert is a guess.</strong> When exactly should the contextual alert appear: 5 active tasks? 7? 1 overdue? 2? The current design picks a reasonable number. The right answer is something only real usage data can give you.',
          '<strong>The assignee warning adds friction by design.</strong> It\'s the one place in the product where the user has to make an extra decision they didn\'t have to before. The bet is that the visibility is worth it. Whether it actually changes assignment behaviour is the kind of thing worth testing once the app is in use.',
          '<strong>The signals feed into one ranking.</strong> I identified four signals that should influence Smart Sort: priority, due date, subtasks, and assignment age. How they\'re weighted relative to each other is a question for engineering and usage data, not something I tried to solve at the design layer.',
          '<strong>What I\'m taking from this project.</strong> The design got quieter over time. Earlier versions had a persistent banner, a separate Focus Mode, a dedicated triage screen. I pulled most of that out. The final version is much simpler than where I started. The discipline I\'m carrying forward is that the absence of UI is also a design decision.'
        ]
      },
      {
        title: 'End notes',
        text: 'The Task module is one of several in the Indesol Global platform. Finance, ERP, and other modules share the same shell.'
      }
    ]
  },
  {
    id: 7,
    title: 'JUPITO',
    tools: 'Illustrator, Figma',
    type: 'Carousel',
    image: './assets/my-works/jupito-carousel/1.png',
    images: [
      './assets/my-works/jupito-carousel/1.png',
      './assets/my-works/jupito-carousel/2.png',
      './assets/my-works/jupito-carousel/3.png',
      './assets/my-works/jupito-carousel/4.png',
      './assets/my-works/jupito-carousel/5.png',
      './assets/my-works/jupito-carousel/jupito-mock.png'
    ],
    projectOverview: 'Designed a concept-driven social media carousel for Jupito, focused on creating an emotionally safe and judgment-free space for people to express their thoughts.',
    keyHighlights: [
      'Developed the concept around the insight that people rehearse difficult conversations internally before sharing them',
      'Hand-doodled simple illustrated characters and thread metaphors to represent tangled thoughts and emotional overwhelm',
      'Designed a visual narrative across multiple slides, moving from confusion to clarity',
      'Maintained a warm, minimal color palette to evoke calm and emotional safety',
      'Balanced copy and visuals to keep the tone gentle, non-preachy, and approachable',
    ],
    thumbnail: './assets/my-works/jupito-carousel/jupito-mock.png',
    column: 3,
    row: 2,
    imagesScroll: 'horizontal'
  },
  {
    id: 8,
    title: 'FIERY CHOW MAGIC',
    tools: 'Photoshop',
    type: 'Marketing / Promotional Design',
    image: './assets/my-works/noodles/noodles.png',
    images: [
      './assets/my-works/noodles/noodles.png'
    ],
    projectOverview: 'Designed a promotional food poster for a noodle brand, focusing on creating a bold, energetic visual that highlights flavor, freshness, and a limited-time offer.',
    keyHighlights: [
      'Created a high-impact food composition with the product as the central focus',
      'Used warm, bold color tones to visually communicate spice and heat',
      'Designed a clear visual hierarchy to highlight product name, offer, and price',
      'Integrated typography and graphic elements to add energy without clutter',
      'Balanced branding, promotional messaging, and readability in a single layout',
    ],
    thumbnail: './assets/my-works/noodles/noodles.png',
    column: 2,
    row: 2,

  },
  {
    id: 9,
    title: 'EMAIL DESIGN',
    tools: 'Photoshop',
    type: 'Email Design',
    image: './assets/my-works/emaildesign/emaildesign.png',
    images: [
      './assets/my-works/emaildesign/emaildesign.png'
    ],
    projectOverview: 'Designed a promotional email layout for the Unkissed sunscreen campaign, focused on driving engagement and conversions by highlighting product benefits for India’s hot and humid climate through clean visuals and clear messaging.',
    keyHighlights: [
      'Created a responsive-style email layout with clear structure and readability',
      'Designed brand-consistent visuals using the official color palette and typography',
      'Developed strong visual hierarchy to guide users toward key information and CTAs',
      'Integrated product-focused imagery to enhance appeal and credibility',
      'Optimized call-to-action placement to improve click-through potential',
      'Balanced content, spacing, and layout for better user experience across devices',
      'Focused on conversion-oriented design for email marketing campaigns ',
    ],
    thumbnail: './assets/my-works/emaildesign/emaildesignthumnail.png',
    column: 2,
    row: 2,
    imageStyles: {
      margin: 'auto',
    },

  },
  {
    id: 6,
    title: 'MIND EASE',
    tools: 'Figma',
    type: 'Web Design',
    image: './assets/my-works/mental-health-app/mental-health-1.png',
    images: [
      './assets/my-works/mental-health-app/mental-health-1.png',
      './assets/my-works/mental-health-app/mindease1.avif',
      './assets/my-works/mental-health-app/mindease2.avif',
    ],
    projectOverview: 'This is an ongoing UI/UX concept project exploring how design can support mental wellness through structured journaling. The goal was to make users feel safe, supported, and motivated to reflect.',
    keyHighlights: [
      'Guided journaling pages',
      'Mood check-ins',
      'Calendar-based tracking',
      'Reminder overlays',
      'Soothing color scheme and illustration',
    ],
    thumbnail: './assets/my-works/mental-health-app/mental-health-1.png',
    column: 3,
    row: 2,
  }
];

// Global function to open project modal
function openProjectModal(projectId) {
  console.log('clicked', projectId);
  const modal = document.getElementById('project-modal');
  const projectData = projectsData.find(p => p.id === projectId);

  if (projectData && modal) {
    modal.open(projectData);
  }
}

function renderProjects() {
  return html`
    <div class="container section" id="projects-section">
      <h1 data-parallax-speed="0.1">My Works</h1>
      <div class="projects-grid">
        ${projectsData.slice(0, 2).map(project => `
          <div class="project-card"
               onclick="openProjectModal(${project.id})"
               style="grid-column: span ${project.column}; grid-row: span ${project.row};">
            <div class="project-image">
              <img src="${project.thumbnail}" alt="${project.title}" loading="lazy" decoding="async">
              <div class="project-overlay">
                <h3>${project.title}</h3>
                <p class="project-tools">• ${project.tools}</p>
              </div>
            </div>
          </div>
        `).join('')}

        <div class="vertical-text-item">
          <vertical-fade-text
            side="right"
            text1="PROJECTS"
            text2="PROJECTS"
            text3="PROJECTS"
          ></vertical-fade-text>
        </div>
        
        ${projectsData.slice(2).map(project => `
          <div class="project-card"
               onclick="openProjectModal(${project.id})"
               style="grid-column: span ${project.column}; grid-row: span ${project.row};">
            <div class="project-image">
              <img src="${project.thumbnail}" alt="${project.title}" loading="lazy" decoding="async">
              <div class="project-overlay">
                <h3>${project.title}</h3>
                <p class="project-tools">• ${project.tools}</p>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
    
    <project-modal id="project-modal"></project-modal>
  `;
}
