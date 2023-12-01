const fs = require('fs');
const pdf = require('pdf-parse');

const pdfData = fs.readFileSync('C:/Users/Camilla/Desktop/MERN/Projects/Letcor/property-manager-next/public/static/maximizing-profits-a-property-owner-s-guide-to-working-with-managing-agents.pdf');
const tableOfContents = [
    { heading: 'Understanding the Role of Property Managing Agents', pageNumber: 7 },
    { heading: 'Benefits of Working with Property Managing Agents', pageNumber: 12 },
    { heading: 'Choosing the Right Property Managing Agent for Your Needs', pageNumber: 17 },
    { heading: 'Responsibilities of Property Managing Agents for Single-Family Homes', pageNumber: 21 },
    { heading: 'Tenant Screening and Placement', pageNumber: 23 },
    { heading: 'Lease Agreement and Rent Collection', pageNumber: 26 },
    { heading: 'Property Maintenance and Repairs', pageNumber: 33 },
    { heading: 'Dealing with Tenant Issues and Evictions', pageNumber: 35 },
    { heading: 'Managing Lease Agreements and Negotiations', pageNumber: 38 },
    { heading: 'Maintenance and Upkeep of Office Buildings', pageNumber: 42 },
    { heading: 'Tenant Satisfaction and Retention', pageNumber: 45 },
    { heading: 'Financial Management and Budgeting for Commercial Properties', pageNumber: 49 },
    { heading: 'Marketing and Advertising for Office Space', pageNumber: 51 },
    { heading: 'Marketing and Attracting Guests for Holiday Rentals', pageNumber: 54 },
    { heading: 'Booking Management and Reservation Systems', pageNumber: 56 },
    { heading: 'Cleaning and Maintenance Services for Short-Term Rentals', pageNumber: 61 },
    { heading: 'Guest Communication and Support', pageNumber: 64 },
    { heading: 'Maximizing Occupancy and Rental Income', pageNumber: 67 },
    { heading: 'Lease Administration and Rent Collection for Apartment Complexes', pageNumber: 72 },
    { heading: 'Tenant Screening and Selection Process', pageNumber: 75 },
    { heading: 'Property Maintenance and Repairs for Multi-Family Units', pageNumber: 80 },
    { heading: 'Handling Tenant Complaints and Disputes', pageNumber: 83 },
    { heading: 'Tenant Retention Strategies for Apartment Complexes', pageNumber: 86 },
    { heading: 'Lease Negotiations and Tenant Relations for Industrial Properties', pageNumber: 89 },
    { heading: 'Maintenance and Safety Compliance for Warehouses', pageNumber: 93 },
    { heading: 'Managing Inventory and Supply Chain Operations', pageNumber: 97 },
    { heading: 'Energy Efficiency and Sustainability in Industrial Properties', pageNumber: 102 },
    { heading: 'Security and Risk Management for Manufacturing Facilities', pageNumber: 103 },
    { heading: 'Tenant Mix and Lease Agreements for Retail Properties', pageNumber: 107 },
    { heading: 'Property Marketing and Tenant Recruitment', pageNumber: 110 },
    { heading: 'Common Area Maintenance and Upkeep', pageNumber: 115 },
    { heading: 'Tenant Sales Analysis and Performance Monitoring', pageNumber: 118 },
    { heading: 'Lease Renewals and Tenant Improvements for Retail Spaces', pageNumber: 122 },
    { heading: 'Understanding the Role of HOA Property Managing Agents', pageNumber: 125 },
    { heading: 'Financial Management and Budgeting for HOAs', pageNumber: 129 },
    { heading: 'Enforcement of Rules and Regulations', pageNumber: 132 },
    { heading: 'Maintenance and Repairs of Common Areas', pageNumber: 134 },
    { heading: 'Community Engagement and Conflict Resolution', pageNumber: 138 },
    { heading: 'Securing and Maintaining Vacant Properties', pageNumber: 142 },
    { heading: 'Property Preservation and Inspection Services', pageNumber: 146 },
    { heading: 'Marketing Strategies for Selling or Renting Vacant Properties', pageNumber: 150 },
    { heading: 'Managing Real Estate Investments and Return on Investment', pageNumber: 152 },
    { heading: 'Risk Mitigation and Insurance for Vacant Properties', pageNumber: 156 },
    { heading: 'Understanding the Unique Challenges of Student Housing', pageNumber: 159 },
    { heading: 'Marketing and Attracting Student Tenants', pageNumber: 163 },
    { heading: 'Lease Administration and Roommate Matching', pageNumber: 167 },
    { heading: 'Student Safety and Security Measures', pageNumber: 169 },
    { heading: 'Academic Calendar Management and Turnover Processes', pageNumber: 172 },
    { heading: 'Catering to the Needs of Senior Residents', pageNumber: 176 },
    { heading: 'Health and Safety Regulations for Senior Living Communities', pageNumber: 179 },
    { heading: 'Activities and Social Programs for Senior Residents', pageNumber: 183 },
    { heading: 'Staffing and Hiring for Senior Living Facilities', pageNumber: 185 },
    { heading: 'Financial Management and Budgeting for Senior Communities', pageNumber: 187 },
    { heading: 'Recap of Key Concepts and Takeaways', pageNumber: 191 },
    { heading: 'Emerging Technologies and Their Impact on Property Management', pageNumber: 198 },
    { heading: 'Anticipated Challenges and Opportunities in the Industry', pageNumber: 201 },
    { heading: 'Continuing Education and Professional Development for Property Owners and Investors', pageNumber: 205 },
    { heading: 'Final Thoughts on Maximizing Profits through Effective Property Management', pageNumber: 207 }
];


const articles = [];

pdf(pdfData).then(function (data) {
    const pdfText = data.text;

    const pageRegex = /Page\s+(\d+)/g;
    let match;
    const pagePositions = [];

    while ((match = pageRegex.exec(pdfText)) !== null) {
        pagePositions.push({ page: parseInt(match[1]), position: match.index });
    }


    tableOfContents.forEach((entry) => {
        const entryPage = entry.pageNumber;
        const currentPagePosition = pagePositions.find((pagePosition) => pagePosition.page === entryPage);
        const nextEntry = tableOfContents[tableOfContents.indexOf(entry) + 1];
        const nextPagePosition = nextEntry ? pagePositions.find((pagePosition) => pagePosition.page === nextEntry.pageNumber) : null;
    
        if (currentPagePosition && nextPagePosition) {
            const pageStart = currentPagePosition.position;
            const pageEnd = nextPagePosition.position;
    
            // Use a regular expression to remove page numbers and the specified text
            const contentWithPageNumbers = pdfText.slice(pageStart, pageEnd).replace(/\x00/g, 'fi');
    
            // Use a regular expression to remove page numbers and additional page number text
            const regex = new RegExp(`Page\\s+${entryPage}:|Page\\s+\\d+|Maximizing Profits: A Property Owner's Guide to Working with Managing Agents`, 'g');
            const content = contentWithPageNumbers.replace(regex, '').trim();
    
            // Clean the title
            const title = entry.heading.replace(/Maximizing Profits: A Property Owner's Guide to Working with Managing Agents/g, '').trim();
            // Clean the content
            const contentWithoutTitle = content.replace(new RegExp(title, 'g'), '').trim();

    
            const article = {
                title: title,
                content: contentWithoutTitle,
            };
    
            articles.push(article);
    }
});

// ... (continue with saving and exporting)

      
    // Now you have an array of articles in JSON format
    console.log(articles);

    // Save the articles to a JSON file
    fs.writeFileSync('articles.json', JSON.stringify(articles, null, 2), 'utf-8');
    console.log('Articles saved to articles.json');

    // Create articleData.js and export the articles
    fs.writeFileSync(
        'data.js',
        `export const articlesData = ${JSON.stringify(articles, null, 2)};`,
        'utf-8'
    );
    console.log('data.js created and articles exported.');

    // You can save this data or process it further as needed
});
