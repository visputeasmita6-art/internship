const root = document.getElementById('root');

const pageMarkup = `
  <div>
    <div class="progress-bar"></div>
    <nav class="navbar">
      <div class="container">
        <div class="nav-shell">
          <a href="#home" class="brand" data-scroll="home">
            <span class="brand-bubble"><i class="fas fa-satellite-dish"></i></span>
            <span>ISRO <span style="color: var(--muted)">Project</span></span>
          </a>
          <div class="nav-links">
            <button data-scroll="objectives">Objectives</button>
            <button data-scroll="workflow">Workflow</button>
            <button data-scroll="datasources">Data</button>
            <button data-scroll="outcomes">Outcomes</button>
            <button data-scroll="evaluation">Evaluation</button>
            <button data-scroll="timeline">Timeline</button>
            <button data-scroll="dashboard">Dashboard</button>
            <button class="theme-toggle" aria-label="Toggle dark mode">
              <i class="fas fa-moon"></i>
            </button>
          </div>
          <div class="nav-mobile">
            <button class="theme-toggle" aria-label="Toggle dark mode">
              <i class="fas fa-moon"></i>
            </button>
            <button class="menu-toggle" aria-label="Toggle menu">
              <i class="fas fa-bars"></i>
            </button>
          </div>
        </div>
        <div class="nav-mobile-panel" style="display: none; padding: 0 0 1rem;">
          <button data-scroll="objectives">Objectives</button>
          <button data-scroll="workflow">Workflow</button>
          <button data-scroll="datasources">Data</button>
          <button data-scroll="outcomes">Outcomes</button>
          <button data-scroll="evaluation">Evaluation</button>
          <button data-scroll="timeline">Timeline</button>
          <button data-scroll="dashboard">Dashboard</button>
        </div>
      </div>
    </nav>

    <section id="home" class="hero">
      <div class="container hero-grid">
        <div class="hero-content">
          <span class="section-label"><i class="fas fa-microchip"></i> ISRO · NCAP · SDG 11.6</span>
          <h1>Surface <span style="color: var(--primary)">AQI</span> &amp; <span style="color: var(--primary)">HCHO</span><br />Hotspots over India</h1>
          <p>Integrating satellite observations, CPCB ground monitoring, and deep learning to map surface air quality and trace formaldehyde hotspots across India.</p>
          <div class="hero-actions">
            <button class="btn-primary" data-scroll="objectives">Explore Project <i class="fas fa-arrow-right"></i></button>
            <button class="btn-secondary" data-scroll="dashboard">View Dashboard <i class="fas fa-chart-pie"></i></button>
          </div>
        </div>
        <div class="orbit-panel">
          <div class="orbit-ring"></div>
          <div class="orbit-ring-2"></div>
          <div class="orbit-ring-3"></div>
          <div class="orbit-core"><i class="fas fa-earth-asia"></i></div>
          <div class="orbit-node node-1"><i class="fas fa-satellite"></i></div>
          <div class="orbit-node node-2"><i class="fas fa-cloud-sun"></i></div>
          <div class="orbit-node node-3"><i class="fas fa-microchip"></i></div>
          <div class="orbit-node node-4"><i class="fas fa-chart-line"></i></div>
        </div>
      </div>
    </section>

    <section class="stat-strip">
      <div class="container stats-grid">
        <div class="stat-card"><div class="stat-value" data-count="1200">0+</div><div style="color: var(--muted)">Monitoring Stations</div></div>
        <div class="stat-card"><div class="stat-value" data-count="15">0+</div><div style="color: var(--muted)">Years of Data</div></div>
        <div class="stat-card"><div class="stat-value" data-count="200">0+</div><div style="color: var(--muted)">Non-Attainment Cities</div></div>
        <div class="stat-card"><div class="stat-value" data-count="6">0</div><div style="color: var(--muted)">Pollutants Monitored</div></div>
      </div>
    </section>

    <section id="objectives">
      <div class="container">
        <div class="section-head">
          <span class="section-label"><i class="fas fa-bullseye"></i> Core Goals</span>
          <h2>Project <span style="color: var(--primary)">Objectives</span></h2>
          <p>Two complementary objectives guide this research toward actionable insights.</p>
        </div>
        <div class="objectives-grid">
          <div class="objective-card card-hover">
            <div class="objective-icon"><i class="fas fa-chart-line"></i></div>
            <h3>Objective 1: Surface AQI Development</h3>
            <ul>
              <li><i class="fas fa-check-circle"></i><span>Generate columnar multi-pollutant datasets from satellite observations</span></li>
              <li><i class="fas fa-check-circle"></i><span>Combine CPCB surface measurements and meteorological variables</span></li>
              <li><i class="fas fa-check-circle"></i><span>Apply CNN-LSTM models to estimate ground pollutant concentrations</span></li>
              <li><i class="fas fa-check-circle"></i><span>Produce spatially continuous AQI maps over India</span></li>
            </ul>
          </div>
          <div class="objective-card card-hover">
            <div class="objective-icon"><i class="fas fa-fire"></i></div>
            <h3>Objective 2: HCHO Hotspot Identification</h3>
            <ul>
              <li><i class="fas fa-check-circle"></i><span>Pre-process satellite HCHO and fire activity products</span></li>
              <li><i class="fas fa-check-circle"></i><span>Detect biomass burning seasons using fire counts</span></li>
              <li><i class="fas fa-check-circle"></i><span>Interpret spatio-temporal HCHO patterns and transport pathways</span></li>
              <li><i class="fas fa-check-circle"></i><span>Identify hotspots linked to agriculture, forests, and urban emissions</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="workflow" style="background: var(--surface-2)">
      <div class="container">
        <div class="section-head">
          <span class="section-label"><i class="fas fa-diagram-project"></i> Methodology</span>
          <h2>Workflow <span style="color: var(--primary)">Pipeline</span></h2>
        </div>
        <div class="workflow-wrap">
          <button class="flow-step active" data-step="step1">Satellite Data</button>
          <button class="flow-step" data-step="step2">Ground Data</button>
          <button class="flow-step" data-step="step3">Meteorology</button>
          <button class="flow-step" data-step="step4">Model</button>
          <button class="flow-step" data-step="step5">Prediction</button>
          <button class="flow-step" data-step="step6">Validation</button>
          <button class="flow-step" data-step="step7">AQI Mapping</button>
          <button class="flow-step" data-step="step8">Hotspot Analysis</button>
        </div>
        <div class="workflow-panel flow-details">
          <p>INSAT 3D, Sentinel-5P, OMI, MODIS/VIIRS</p>
        </div>
      </div>
    </section>

    <section id="datasources">
      <div class="container">
        <div class="section-head">
          <span class="section-label"><i class="fas fa-database"></i> Data</span>
          <h2>Data <span style="color: var(--primary)">Sources</span></h2>
        </div>
        <div class="data-filters">
          <button class="filter-btn active" data-filter="All">All</button>
          <button class="filter-btn" data-filter="Satellite">Satellite</button>
          <button class="filter-btn" data-filter="Reanalysis">Reanalysis</button>
          <button class="filter-btn" data-filter="Ground">Ground</button>
        </div>
        <div class="data-grid">
          <div class="data-card card-hover"><i class="fas fa-satellite"></i><h4>INSAT 3D / OCM-3</h4><p>AOD for deriving surface PM2.5 and aerosol exposure</p><span class="section-label">Satellite</span></div>
          <div class="data-card card-hover"><i class="fas fa-cloud-sun"></i><h4>Sentinel-5P TROPOMI</h4><p>NO2, SO2, O3, CO and HCHO column products</p><span class="section-label">Satellite</span></div>
          <div class="data-card card-hover"><i class="fas fa-fire"></i><h4>MODIS / VIIRS FIRMS</h4><p>Fire counts to identify biomass burning events</p><span class="section-label">Satellite</span></div>
          <div class="data-card card-hover"><i class="fas fa-wind"></i><h4>ERA5 / IMDAA / MERRA-2</h4><p>Wind, temperature, RH and boundary layer conditions</p><span class="section-label">Reanalysis</span></div>
          <div class="data-card card-hover"><i class="fas fa-chart-bar"></i><h4>CPCB Ground Data</h4><p>Observed pollutant concentrations for training and validation</p><span class="section-label">Ground</span></div>
          <div class="data-card card-hover"><i class="fas fa-globe"></i><h4>OMI HCHO Data</h4><p>Long-term HCHO retrievals for seasonal comparison</p><span class="section-label">Satellite</span></div>
        </div>
      </div>
    </section>

    <section id="outcomes" style="background: var(--surface-2)">
      <div class="container">
        <div class="section-head">
          <span class="section-label"><i class="fas fa-flag-checkered"></i> Deliverables</span>
          <h2>Expected <span style="color: var(--primary)">Outcomes</span></h2>
        </div>
        <div class="outcomes-grid">
          <div class="outcome-card card-hover"><div class="outcome-icon"><i class="fas fa-map"></i></div><h4>AQI Spatial Maps</h4><p>Daily and seasonal surface AQI maps over India</p></div>
          <div class="outcome-card card-hover"><div class="outcome-icon"><i class="fas fa-fire"></i></div><h4>HCHO Hotspot Maps</h4><p>High-resolution HCHO concentration maps</p></div>
          <div class="outcome-card card-hover"><div class="outcome-icon"><i class="fas fa-location-dot"></i></div><h4>Source Region ID</h4><p>Identification of IGP and biomass burning zones</p></div>
          <div class="outcome-card card-hover"><div class="outcome-icon"><i class="fas fa-exchange-alt"></i></div><h4>Fire-HCHO Correlation</h4><p>Transport and source influence analysis</p></div>
        </div>
      </div>
    </section>

    <section id="evaluation">
      <div class="container">
        <div class="section-head">
          <span class="section-label"><i class="fas fa-check-circle"></i> Metrics</span>
          <h2>Evaluation <span style="color: var(--primary)">Parameters</span></h2>
        </div>
        <div class="evaluation-grid">
          <div class="table-card">
            <h3 style="padding: 1rem; background: var(--surface-2)">Objective 1 - AQI Prediction</h3>
            <table>
              <thead><tr><th>Metric</th><th>Expected Outcome</th></tr></thead>
              <tbody>
                <tr><td>RMSE</td><td>&lt; 20% of mean</td></tr>
                <tr><td>R</td><td>&gt; 0.85</td></tr>
                <tr><td>MAE</td><td>Minimized</td></tr>
                <tr><td>R²</td><td>&gt; 0.80</td></tr>
              </tbody>
            </table>
          </div>
          <div class="table-card">
            <h3 style="padding: 1rem; background: var(--surface-2)">Objective 2 - HCHO Hotspots</h3>
            <table>
              <thead><tr><th>Parameter</th><th>Criteria</th></tr></thead>
              <tbody>
                <tr><td>Hotspot Accuracy</td><td>Matches known source regions</td></tr>
                <tr><td>Integration</td><td>OMI + TROPOMI + FIRMS</td></tr>
                <tr><td>Interpretation</td><td>Seasonal and transport analysis</td></tr>
                <tr><td>Visualization</td><td>Clear spatial maps &amp; plots</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

    <section id="timeline" style="background: var(--surface-2)">
      <div class="container">
        <div class="section-head">
          <span class="section-label"><i class="fas fa-clock"></i> Plan</span>
          <h2>Project <span style="color: var(--primary)">Timeline</span></h2>
        </div>
        <div class="timeline-grid">
          <div class="timeline-card"><div class="timeline-phase">Phase 1</div><div><h4>Data Acquisition & Preprocessing</h4><p>Collect satellite, CPCB and meteorological products; clean and harmonize data.</p></div></div>
          <div class="timeline-card"><div class="timeline-phase">Phase 2</div><div><h4>Exploratory Analysis</h4><p>Understand seasonality, spatial structure and missing-value behavior.</p></div></div>
          <div class="timeline-card"><div class="timeline-phase">Phase 3</div><div><h4>Deep Learning Models</h4><p>Train CNN-LSTM models for AQI and pollutant estimation.</p></div></div>
          <div class="timeline-card"><div class="timeline-phase">Phase 4</div><div><h4>Hotspot Detection</h4><p>Apply thresholds and clustering for HCHO hotspots.</p></div></div>
          <div class="timeline-card"><div class="timeline-phase">Phase 5</div><div><h4>Validation & Mapping</h4><p>Validate against observations and generate final maps.</p></div></div>
          <div class="timeline-card"><div class="timeline-phase">Phase 6</div><div><h4>Reporting</h4><p>Prepare reports, visuals and policy recommendations.</p></div></div>
        </div>
      </div>
    </section>

    <section id="dashboard">
      <div class="container">
        <div class="section-head">
          <span class="section-label"><i class="fas fa-chart-pie"></i> Interactive</span>
          <h2>Live <span style="color: var(--primary)">Dashboard</span></h2>
        </div>
        <div class="dashboard-grid">
          <div class="dashboard-panel">
            <div style="display: flex; justify-content: space-between; gap: 1rem; align-items: center; margin-bottom: 1rem;">
              <h3>Pollutant Trend</h3>
              <select id="pollutant-select" style="padding: 0.55rem 0.75rem; border-radius: 10px; border: 1px solid var(--border); background: var(--surface)">
                <option>PM2.5</option>
                <option>PM10</option>
                <option>NO2</option>
                <option>SO2</option>
                <option>O3</option>
              </select>
            </div>
            <div class="chart-wrap"><canvas id="trend-chart"></canvas></div>
          </div>
          <div class="dashboard-panel">
            <h3 style="margin-bottom: 0.8rem">Hotspot Locations</h3>
            <div id="map" class="map-wrap"></div>
            <div id="location-details" class="location-details">
              <div>
                <span class="section-label">Selected City</span>
                <h4 style="margin: 0.4rem 0 0.2rem">Delhi</h4>
                <p style="margin: 0; color: var(--muted)">Click any marker to see the region details.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="container footer-grid">
        <div>
          <h4><i class="fas fa-satellite"></i> ISRO Research Initiative</h4>
          <p style="color: #9bb2d3; line-height: 1.8">Surface AQI & HCHO hotspot monitoring for India using satellite data and advanced analytics.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul><li>Objectives</li><li>Workflow</li><li>Data Sources</li><li>Dashboard</li></ul>
        </div>
        <div>
          <h4>Focus Areas</h4>
          <ul><li>Air Quality</li><li>Biomass Burning</li><li>Climate & Health</li><li>Policy Support</li></ul>
        </div>
        <div>
          <h4>Relevance</h4>
          <ul><li>NCAP</li><li>SDG 11.6</li><li>Chintan Shivir 2.0</li><li>ISRO Mission</li></ul>
        </div>
      </div>
    </footer>
  </div>
`;

root.innerHTML = pageMarkup;

function updateProgress() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const percent = max > 0 ? (window.scrollY / max) * 100 : 0;
  document.querySelector('.progress-bar').style.width = `${percent}%`;
}

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

function applyTheme(next) {
  document.body.classList.toggle('dark', next);
  localStorage.setItem('theme', next ? 'dark' : 'light');
  document.querySelectorAll('.theme-toggle i').forEach(icon => {
    icon.className = `fas ${next ? 'fa-sun' : 'fa-moon'}`;
  });
}

function initInteractions() {
  updateProgress();
  window.addEventListener('scroll', updateProgress, { passive: true });

  document.querySelectorAll('[data-scroll]').forEach(btn => {
    btn.addEventListener('click', () => scrollToSection(btn.getAttribute('data-scroll')));
  });

  document.querySelector('.menu-toggle')?.addEventListener('click', () => {
    const panel = document.querySelector('.nav-mobile-panel');
    panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
    document.querySelector('.menu-toggle i').className = panel.style.display === 'block' ? 'fas fa-times' : 'fas fa-bars';
  });

  document.querySelectorAll('.nav-mobile-panel button[data-scroll]').forEach(btn => {
    btn.addEventListener('click', () => {
      scrollToSection(btn.getAttribute('data-scroll'));
      document.querySelector('.nav-mobile-panel').style.display = 'none';
      document.querySelector('.menu-toggle i').className = 'fas fa-bars';
    });
  });

  document.querySelectorAll('.theme-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const next = !document.body.classList.contains('dark');
      applyTheme(next);
    });
  });

  const flowSteps = document.querySelectorAll('.flow-step');
  const flowDetails = document.querySelector('.flow-details p');
  const flowMap = {
    step1: 'INSAT 3D, Sentinel-5P, OMI, MODIS/VIIRS',
    step2: 'CPCB stations for validation and calibration',
    step3: 'ERA5, IMDAA and MERRA-2 reanalysis inputs',
    step4: 'CNN-LSTM for multi-pollutant prediction',
    step5: 'Estimate surface concentrations at high resolution',
    step6: 'RMSE, R, MAE and R² checks',
    step7: 'Daily and seasonal AQI maps',
    step8: 'HCHO clustering and source attribution'
  };
  flowSteps.forEach(step => {
    step.addEventListener('click', () => {
      flowSteps.forEach(s => s.classList.remove('active'));
      step.classList.add('active');
      flowDetails.textContent = flowMap[step.dataset.step];
    });
  });

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.data-card').forEach(card => {
        const category = card.querySelector('.section-label')?.textContent || '';
        card.style.display = (filter === 'All' || category === filter) ? 'block' : 'none';
      });
    });
  });

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.nav-links button[data-scroll]').forEach(btn => {
          btn.classList.toggle('active', btn.getAttribute('data-scroll') === entry.target.id);
        });
      }
    });
  }, { threshold: 0.35 });

  document.querySelectorAll('section[id]').forEach(section => sectionObserver.observe(section));
}

function animateCounts() {
  const stats = document.querySelectorAll('[data-count]');
  let done = false;
  const observer = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting || done) return;
    done = true;
    stats.forEach(stat => {
      const target = Number(stat.dataset.count);
      const suffix = stat.textContent.includes('+') ? '+' : '';
      const duration = 1800;
      const start = performance.now();
      const step = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        const value = Math.floor(ease * target);
        stat.textContent = `${value}${suffix}`;
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  }, { threshold: 0.3 });

  observer.observe(document.querySelector('.stat-strip'));
}

function initCharts() {
  const chartData = {
    'PM2.5': [120, 140, 110, 160, 130, 150, 125, 135, 145, 155, 140, 130],
    'PM10': [180, 200, 170, 220, 190, 210, 185, 195, 205, 215, 200, 190],
    'NO2': [40, 45, 38, 50, 42, 48, 41, 44, 46, 49, 43, 40],
    'SO2': [25, 28, 22, 32, 26, 30, 24, 27, 29, 31, 27, 25],
    'O3': [35, 40, 32, 45, 38, 42, 36, 39, 41, 44, 37, 35]
  };

  const hotspots = [
    {
      id: 'delhi',
      name: 'Delhi',
      coords: [28.7041, 77.1025],
      aqi: 'AQI 178',
      hcho: 'High',
      sector: 'Urban + Traffic',
      insight: 'Strong winter accumulation with elevated PM2.5 and NO2.'
    },
    {
      id: 'kolkata',
      name: 'Kolkata',
      coords: [22.5726, 88.3639],
      aqi: 'AQI 152',
      hcho: 'Moderate-High',
      sector: 'Industrial + Biomass',
      insight: 'Visible HCHO enhancement linked to combustion and transport.'
    },
    {
      id: 'mumbai',
      name: 'Mumbai',
      coords: [19.0760, 72.8777],
      aqi: 'AQI 138',
      hcho: 'Moderate',
      sector: 'Coastal + Industrial',
      insight: 'Stable marine conditions help reduce peak pollution episodes.'
    },
    {
      id: 'bengaluru',
      name: 'Bengaluru',
      coords: [12.9716, 77.5946],
      aqi: 'AQI 96',
      hcho: 'Low-Moderate',
      sector: 'Urban Growth',
      insight: 'Lower hotspot intensity but rising seasonal urban emissions.'
    }
  ];

  const ctx = document.getElementById('trend-chart');
  let chart;
  const updateChart = (value) => {
    if (chart) chart.destroy();
    chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: `${value} Concentration`,
          data: chartData[value],
          borderColor: '#0b63d6',
          backgroundColor: 'rgba(11,99,214,0.08)',
          fill: true,
          tension: 0.35,
          pointRadius: 3
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: { y: { beginAtZero: true } }
      }
    });
  };

  document.getElementById('pollutant-select').addEventListener('change', (e) => updateChart(e.target.value));
  updateChart('PM2.5');

  if (window.L) {
    const map = L.map('map').setView([22, 80], 4);
    const detailBox = document.getElementById('location-details');
    const updateDetails = (spot) => {
      detailBox.innerHTML = `
        <div>
          <span class="section-label">Selected City</span>
          <h4 style="margin: 0.45rem 0 0.25rem">${spot.name}</h4>
          <p style="margin: 0; color: var(--muted)">${spot.insight}</p>
        </div>
        <div class="detail-grid">
          <div>
            <span class="detail-label">AQI Status</span>
            <strong>${spot.aqi}</strong>
          </div>
          <div>
            <span class="detail-label">HCHO</span>
            <strong>${spot.hcho}</strong>
          </div>
          <div>
            <span class="detail-label">Sector</span>
            <strong>${spot.sector}</strong>
          </div>
          <div>
            <span class="detail-label">Region</span>
            <strong>${spot.name}, India</strong>
          </div>
        </div>
      `;
    };

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    hotspots.forEach((spot) => {
      const marker = L.marker(spot.coords).addTo(map);
      marker.bindPopup(`<strong>${spot.name}</strong><br>${spot.aqi}<br>${spot.hcho}`);
      marker.on('click', () => {
        updateDetails(spot);
        map.setView(spot.coords, 5, { animate: true });
      });
    });

    updateDetails(hotspots[0]);
  }
}

function initTheme() {
  const saved = localStorage.getItem('theme');
  if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    applyTheme(true);
  } else {
    applyTheme(false);
  }
}

initTheme();
initInteractions();
animateCounts();
initCharts();
