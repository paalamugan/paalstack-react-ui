// Test example for multiple column search functionality

// Example usage of multiple column search
const exampleUsage = {
  // Single column search (original behavior)
  singleColumn: {
    search: {
      accessorKey: 'title',
      placeholder: 'Search by title...',
    },
  },

  // Multiple column search (new feature)
  multipleColumns: {
    search: {
      accessorKey: ['title', 'status', 'priority'],
      placeholder: 'Search across title, status, and priority...',
    },
  },

  // Multiple column search with custom placeholder
  multipleColumnsCustom: {
    search: {
      accessorKey: ['id', 'title'],
      placeholder: 'Search by task ID or title...',
    },
  },

  // Auto-generated placeholder example
  autoPlaceholder: {
    search: {
      accessorKey: ['title', 'status'],
      // Placeholder will be "Search by title, status..."
    },
  },
};

// How the global filter function works:
// 1. For single column: Uses column filtering (table.getColumn().setFilterValue())
// 2. For multiple columns: Uses global filtering with custom filter function
// 3. Custom filter function checks if search term appears in ANY of the specified columns
// 4. Search is case-insensitive

export { exampleUsage };
