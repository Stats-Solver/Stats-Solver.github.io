document.addEventListener('DOMContentLoaded', function() {
  // Get the search form and input field
  const searchForm = document.querySelector('.navbar-center form') || document.querySelector('form');
  const searchInput = searchForm?.querySelector('input[type="search"]');
  
  // Create a map of search terms to their corresponding URLs
  const searchMap = {
    // A

    
    // B
    'bar chart': '/tables-and-graphs.html',
    'bayes theorem': '/basic-probability.html',
    'binomial distribution': '/discrete-distributions.html',
    'box plot': '/tables-and-graphs.html',
    
    // C
    'chebyshev': '/numerical-summaries.html',
    'chi-square': '/continuous-distributions.html',
    'coefficient of determination': '/linear-regression.html',
    'coefficient of variation': '/numerical-summaries.html',
    'column percentages': '/tables-and-graphs.html',
    'combinations': '/basic-probability.html',
    'complement': '/basic-probability.html',
    'conditional probability': '/basic-probability.html',
    'correlation': '/numerical-summaries.html',
    'covariance': '/numerical-summaries.html',
    'crosstabulation': '/tables-and-graphs.html',
    'cumulative frequency': '/tables-and-graphs.html',
    'cumulative percent': '/tables-and-graphs.html',
    'cumulative relative': '/tables-and-graphs.html',
    
    // D
    'discrete uniform': '/discrete-distributions.html',
    
    // E
    'empirical rule': '/numerical-summaries.html',
    'estimated regression': '/linear-regression.html',
    'expected value': '/discrete-distributions.html',
    'experiments': '/basic-probability.html',
    'exponential distribution': '/continuous-distributions.html',
    
    // F
    'f-distribution': '/continuous-distributions.html',
    'five-number summary': '/numerical-summaries.html',
    'frequency distribution': '/tables-and-graphs.html',
    
    // G
    'geometric mean': '/numerical-summaries.html',
    
    // H
    'histogram': '/tables-and-graphs.html',
    'hypergeometric': '/discrete-distributions.html',
    
    // I
    'interquartile range': '/numerical-summaries.html',
    'intersection': '/basic-probability.html',
    
    // L
    'linear regression': '/linear-regression.html',
    
    // M
    'mean': '/numerical-summaries.html',
    'mean square error': '/linear-regression.html',
    'mean square regression': '/linear-regression.html',
    'median': '/numerical-summaries.html',
    'mode': '/numerical-summaries.html',
    
    // N
    'normal distribution': '/continuous-distributions.html',
    'normal approximation': '/continuous-distributions.html',
    
    // P
    'percent frequency': '/tables-and-graphs.html',
    'percentiles': '/numerical-summaries.html',
    'permutations': '/basic-probability.html',
    'pie chart': '/tables-and-graphs.html',
    'point estimate': '/sampling-distributions.html',
    'poisson': '/discrete-distributions.html',
    'population correlation': '/numerical-summaries.html',
    'population covariance': '/numerical-summaries.html',
    'population mean': '/numerical-summaries.html',
    'population standard deviation': '/numerical-summaries.html',
    'population variance': '/numerical-summaries.html',
    'probability': '/basic-probability.html',
    
    // Q
    'quartiles': '/numerical-summaries.html',
    
    // R
    'range': '/numerical-summaries.html',
    'relative frequency': '/tables-and-graphs.html',
    'row percentages': '/tables-and-graphs.html',
    'regression': '/linear-regression.html',
    
    // S
    'sample correlation': '/numerical-summaries.html',
    'sample covariance': '/numerical-summaries.html',
    'sample mean': '/numerical-summaries.html',
    'sample size': '/confidence-intervals.html',
    'sample space': '/basic-probability.html',
    'sample standard deviation': '/numerical-summaries.html',
    'sample variance': '/numerical-summaries.html',
    'scatter diagram': '/tables-and-graphs.html',
    'standard error of estimate': '/linear-regression.html',
    'standard deviation': '/numerical-summaries.html',
    'standard error of the mean': '/sampling-distributions.html',
    'standard error of slope': '/linear-regression.html',
    'standard normal calculator': '/continuous-distributions.html',
    'sum of squares error': '/linear-regression.html',
    'sum of squares regression': '/linear-regression.html',
    'sum of squares total': '/linear-regression.html',
    'standard normal table': '/tables/standard-normal.html',
    'statistics calculator': 'index.html#calculators',
    'statistics table': 'index.html#tables',
    
    // T
    't-distribution calculator': '/continuous-distributions.html',
    't-distribution table': '/tables/t-distribution.html',
    'time plot': '/tables-and-graphs.html',
    'trendline': '/tables-and-graphs.html',
    
    // U
    'uniform distribution': '/continuous-distributions.html',
    'union': '/basic-probability.html',
    
    // V
    'variance': '/numerical-summaries.html',
    
    // W
    'weighted mean': '/numerical-summaries.html',
    
    // Z
    'z-scores': '/numerical-summaries.html',
    'z-test': '/hypothesis-testing.html',
    'z-distribution calculator': '/continuous-distributions.html',
    'z-distribution table': '/tables/standard-normal.html',
    
    // Add categories directly
    'graphs': '/tables-and-graphs.html',
    'numerical': '/numerical-summaries.html',
    'probability': '/basic-probability.html',
    'distributions': '/continuous-distributions.html',
    'discrete distributions': '/discrete-distributions.html',
    'continuous distributions': '/continuous-distributions.html',
    'sampling': '/sampling-distributions.html',
    'confidence': '/confidence-intervals.html',
    'hypothesis': '/hypothesis-testing.html',
    'regression': '/linear-regression.html'
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