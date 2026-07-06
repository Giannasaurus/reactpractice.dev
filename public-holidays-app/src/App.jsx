export default function PublicHolidaysApp() {
  return (
    <div id="calendar-container">
      <header>
        <h1>2026 Public Holidays</h1>
      </header>
      
      <select name="country-selector" id="country-selector">
        <option value="netherlands">Netherlands</option>
        <option value="philippines">Philippines</option>
      </select>
      <main>
        { /**
         * return list of supported countries
         * GET /Countries
         */ }
         
         
        {/* return list of public holidays here per country */}
        
      </main>
    </div>
  )
}