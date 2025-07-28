document.addEventListener('DOMContentLoaded', function() {
  // Get the search form and input field
  const searchForm = document.querySelector('.navbar-center form') || document.querySelector('form');
  const searchInput = searchForm?.querySelector('input[type="search"]');
  
  // Create a map of search terms to their corresponding URLs
  const searchMap = {
    // A

    
    // B
    'bar chart': '/calculators/tables-and-graphs.html',
    'bayes theorem': '/calculators/basic-probability.html',
    'binomial distribution': '/calculators/discrete-distributions.html',
    'box plot': '/calculators/tables-and-graphs.html',
    
    // C
    'chebyshev': '/calculators/numerical-summaries.html',
    'chi-square calculator': '/calculators/continuous-distributions.html',
    'chi-square table': '/tables/chi-square.html',
    'coefficient of determination': '/calculators/linear-regression.html',
    'coefficient of variation': '/calculators/numerical-summaries.html',
    'column percentages': '/calculators/tables-and-graphs.html',
    'combinations': '/calculators/basic-probability.html',
    'complement': '/calculators/basic-probability.html',
    'conditional probability': '/calculators/basic-probability.html',
    'correlation': '/calculators/numerical-summaries.html',
    'covariance': '/calculators/numerical-summaries.html',
    'crosstabulation': '/calculators/tables-and-graphs.html',
    'cumulative frequency': '/calculators/tables-and-graphs.html',
    'cumulative percent': '/calculators/tables-and-graphs.html',
    'cumulative relative': '/calculators/tables-and-graphs.html',
    
    // D
    'discrete uniform': '/calculators/discrete-distributions.html',
    
    // E
    'empirical rule': '/calculators/numerical-summaries.html',
    'estimated regression': '/calculators/linear-regression.html',
    'expected value': '/calculators/discrete-distributions.html',
    'experiments': '/calculators/basic-probability.html',
    'exponential distribution': '/calculators/continuous-distributions.html',
    
    // F
    'f-distribution calculator': '/calculators/continuous-distributions.html',
    'f-distribution table': '/tables/f-distribution.html',
    'five-number summary': '/calculators/numerical-summaries.html',
    'frequency distribution': '/calculators/tables-and-graphs.html',
    
    // G
    'geometric mean': '/calculators/numerical-summaries.html',
    
    // H
    'histogram': '/calculators/tables-and-graphs.html',
    'hypergeometric': '/calculators/discrete-distributions.html',
    
    // I
    'interquartile range': '/calculators/numerical-summaries.html',
    'intersection': '/calculators/basic-probability.html',
    
    // L
    'linear regression': '/calculators/linear-regression.html',
    
    // M
    'mean': '/calculators/numerical-summaries.html',
    'mean square error': '/calculators/linear-regression.html',
    'mean square regression': '/calculators/linear-regression.html',
    'median': '/calculators/numerical-summaries.html',
    'mode': '/calculators/numerical-summaries.html',
    
    // N
    'normal distribution': '/calculators/continuous-distributions.html',
    'normal approximation': '/calculators/continuous-distributions.html',
    
    // P
    'percent frequency': '/calculators/tables-and-graphs.html',
    'percentiles': '/calculators/numerical-summaries.html',
    'permutations': '/calculators/basic-probability.html',
    'pie chart': '/calculators/tables-and-graphs.html',
    'poisson': '/calculators/discrete-distributions.html',
    'population correlation': '/calculators/numerical-summaries.html',
    'population covariance': '/calculators/numerical-summaries.html',
    'population mean': '/calculators/numerical-summaries.html',
    'population standard deviation': '/calculators/numerical-summaries.html',
    'population variance': '/calculators/numerical-summaries.html',
    'probability': '/calculators/basic-probability.html',
    
    // Q
    'quartiles': '/calculators/numerical-summaries.html',
    
    // R
    'range': '/calculators/numerical-summaries.html',
    'relative frequency': '/calculators/tables-and-graphs.html',
    'row percentages': '/calculators/tables-and-graphs.html',
    'regression': '/calculators/linear-regression.html',
    
    // S
    'sample correlation': '/calculators/numerical-summaries.html',
    'sample covariance': '/calculators/numerical-summaries.html',
    'sample mean': '/calculators/numerical-summaries.html',
    'sample size': '/calculators/confidence-intervals.html',
    'sample space': '/calculators/basic-probability.html',
    'sample standard deviation': '/calculators/numerical-summaries.html',
    'sample variance': '/calculators/numerical-summaries.html',
    'scatter diagram': '/calculators/tables-and-graphs.html',
    'standard error of estimate': '/calculators/linear-regression.html',
    'standard deviation': '/calculators/numerical-summaries.html',
    'standard error of the mean': '/calculators/sampling-distributions.html',
    'standard error of slope': '/calculators/linear-regression.html',
    'standard normal calculator': '/calculators/continuous-distributions.html',
    'sum of squares error': '/calculators/linear-regression.html',
    'sum of squares regression': '/calculators/linear-regression.html',
    'sum of squares total': '/calculators/linear-regression.html',
    'standard normal table': '/tables/standard-normal.html',
    'statistics calculator': 'index.html#calculators',
    'statistics table': 'index.html#tables',
    
    // T
    't-distribution calculator': '/calculators/continuous-distributions.html',
    't-distribution table': '/tables/t-distribution.html',
    'time plot': '/calculators/tables-and-graphs.html',
    'trendline': '/calculators/tables-and-graphs.html',
    
    // U
    'uniform distribution': '/calculators/continuous-distributions.html',
    'union': '/calculators/basic-probability.html',
    
    // V
    'variance': '/calculators/numerical-summaries.html',
    
    // W
    'weighted mean': '/calculators/numerical-summaries.html',
    
    // Z
    'z-scores': '/calculators/numerical-summaries.html',
    'z-test': '/calculators/hypothesis-testing.html',
    'z-distribution calculator': '/calculators/continuous-distributions.html',
    'z-distribution table': '/tables/standard-normal.html',
    
    // Add categories directly
    'graphs': '/calculators/tables-and-graphs.html',
    'numerical': '/calculators/numerical-summaries.html',
    'probability': '/calculators/basic-probability.html',
    'distributions': '/calculators/continuous-distributions.html',
    'discrete distributions': '/calculators/discrete-distributions.html',
    'continuous distributions': '/calculators/continuous-distributions.html',
    'sampling': '/calculators/sampling-distributions.html',
    'confidence': '/calculators/confidence-intervals.html',
    'hypothesis': '/calculators/hypothesis-testing.html',
    'regression': '/calculators/linear-regression.html'
  };

  // Add event listener to the search form
  if (searchForm) {
    searchForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      if (!searchInput) return;
      
      const searchTerm = searchInput.value.trim().toLowerCase();
      
      // Check if there's a direct match
      if (searchMap[searchTerm]) {
        window.location.href = searchMap[searchTerm];
        return;
      }
      
      // If no direct match, try to find partial matches
      let bestMatch = null;
      let bestMatchScore = 0;
      
      for (const term in searchMap) {
        // Check if the search term is contained in the key
        if (term.includes(searchTerm) || searchTerm.includes(term)) {
          // Simple scoring - longer matches are better
          const score = Math.min(term.length, searchTerm.length);
          
          // Only update if we found a better match
          if (score > bestMatchScore) {
            bestMatchScore = score;
            bestMatch = searchMap[term];
          }
        }
      }
      
      // If we found a match, navigate to it
      if (bestMatch) {
        window.location.href = bestMatch;
      } else {
        // If no match was found, redirect to the help page
        window.location.href = 'help.html';
      }
    });
  }
  
  // Add autocomplete functionality
  if (searchInput) {
    // Create autocomplete container
    const autocompleteContainer = document.createElement('div');
    autocompleteContainer.className = 'autocomplete-items';
    autocompleteContainer.style.position = 'absolute';
    autocompleteContainer.style.zIndex = '99';
    autocompleteContainer.style.width = searchInput.offsetWidth + 'px';
    autocompleteContainer.style.maxHeight = '250px';
    autocompleteContainer.style.overflowY = 'auto';
    autocompleteContainer.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
    autocompleteContainer.style.display = 'none';
    autocompleteContainer.style.backgroundColor = '#fff';
    autocompleteContainer.style.border = '1px solid #ddd';
    autocompleteContainer.style.borderTop = 'none';
    autocompleteContainer.style.borderRadius = '0 0 4px 4px';
    
    // Insert after search input
    searchInput.parentNode.style.position = 'relative';
    searchInput.parentNode.appendChild(autocompleteContainer);
    
    // Add input event listener
    searchInput.addEventListener('input', function() {
      const searchTerm = searchInput.value.trim().toLowerCase();
      
      // Clear previous suggestions
      autocompleteContainer.innerHTML = '';
      autocompleteContainer.style.display = 'none';
      
      if (searchTerm.length < 2) return; // Require at least 2 characters
      
      // Find matches
      const matches = [];
      for (const term in searchMap) {
        if (term.includes(searchTerm)) {
          matches.push({ term: term, url: searchMap[term] });
          
          // Limit to 10 suggestions
          if (matches.length >= 10) break;
        }
      }
      
      // Create suggestion items
      if (matches.length > 0) {
        autocompleteContainer.style.display = 'block';
        
        matches.forEach(match => {
          const item = document.createElement('div');
          item.className = 'autocomplete-item';
          item.style.padding = '10px';
          item.style.cursor = 'pointer';
          item.style.borderBottom = '1px solid #ddd';
          
          // Highlight the matching part
          const matchIndex = match.term.indexOf(searchTerm);
          let displayText = match.term;
          
          if (matchIndex !== -1) {
            displayText = 
              match.term.substring(0, matchIndex) + 
              '<strong>' + match.term.substring(matchIndex, matchIndex + searchTerm.length) + '</strong>' + 
              match.term.substring(matchIndex + searchTerm.length);
          }
          
          item.innerHTML = displayText;
          
          // Add hover effect
          item.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f1f1f1';
          });
          
          item.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#fff';
          });
          
          // Add click listener
          item.addEventListener('click', function() {
            searchInput.value = match.term;
            autocompleteContainer.style.display = 'none';
            window.location.href = match.url;
          });
          
          autocompleteContainer.appendChild(item);
        });
      }
    });
    
    // Close autocomplete when clicking elsewhere
    document.addEventListener('click', function(e) {
      if (e.target !== searchInput) {
        autocompleteContainer.style.display = 'none';
      }
    });
    
    // Handle keyboard navigation
    searchInput.addEventListener('keydown', function(e) {
      const items = autocompleteContainer.getElementsByClassName('autocomplete-item');
      
      if (items.length === 0) return;
      
      // Find currently selected item
      let selectedIndex = -1;
      for (let i = 0; i < items.length; i++) {
        if (items[i].classList.contains('selected')) {
          selectedIndex = i;
          break;
        }
      }
      
      // Handle arrow down
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        
        // Clear previous selection
        if (selectedIndex >= 0) {
          items[selectedIndex].classList.remove('selected');
          items[selectedIndex].style.backgroundColor = '#fff';
        }
        
        // Select next item (or first if none selected)
        selectedIndex = (selectedIndex + 1) % items.length;
        items[selectedIndex].classList.add('selected');
        items[selectedIndex].style.backgroundColor = '#f1f1f1';
      } 
      // Handle arrow up
      else if (e.key === 'ArrowUp') {
        e.preventDefault();
        
        // Clear previous selection
        if (selectedIndex >= 0) {
          items[selectedIndex].classList.remove('selected');
          items[selectedIndex].style.backgroundColor = '#fff';
        }
        
        // Select previous item (or last if none selected)
        selectedIndex = selectedIndex < 0 ? items.length - 1 : (selectedIndex - 1 + items.length) % items.length;
        items[selectedIndex].classList.add('selected');
        items[selectedIndex].style.backgroundColor = '#f1f1f1';
      }
      // Handle Enter
      else if (e.key === 'Enter' && selectedIndex >= 0) {
        e.preventDefault();
        searchInput.value = items[selectedIndex].textContent;
        autocompleteContainer.style.display = 'none';
        
        // Find the URL for this term
        for (const term in searchMap) {
          if (term === searchInput.value.trim().toLowerCase()) {
            window.location.href = searchMap[term];
            break;
          }
        }
      }
    });
  }
});