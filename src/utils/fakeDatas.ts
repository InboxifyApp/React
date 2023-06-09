const msgScehma = {
    id : Number, 
    fullname : String , 
    phone : String , 
    email : String , 
    subjet : String, 
    message : String ,
    cluster : String 

}


const messages = 
    [
        {
          id: 1,
          fullname: "John Doe",
          phone: "1234567890",
          email: "johndoe@example.com",
          subject: "Inquiry",
          message: "Hello, I have a question regarding your product.",
          cluster: "General",
        },
        {
          id: 2,
          fullname: "Jane Smith",
          phone: "0987654321",
          email: "janesmith@example.com",
          subject: "Feedback",
          message: "I wanted to share my positive experience with your service.",
          cluster: "General",
        },
        {
          id: 3,
          fullname: "Michael Johnson",
          phone: "9876543210",
          email: "michaeljohnson@example.com",
          subject: "Support Request",
          message: "I am facing an issue with my account. Can you please assist?",
          cluster: "Support",
        },
        {
          id: 4,
          fullname: "Emily Davis",
          phone: "0123456789",
          email: "emilydavis@example.com",
          subject: "Partnership Opportunity",
          message: "I would like to discuss a potential partnership with your company.",
          cluster: "Business",
        },
        {
          id: 5,
          fullname: "David Wilson",
          phone: "9876543210",
          email: "davidwilson@example.com",
          subject: "Job Application",
          message: "I am interested in applying for a position at your organization.",
          cluster: "Careers",
        },
        {
          id: 6,
          fullname: "Sarah Thompson",
          phone: "1234567890",
          email: "sarahthompson@example.com",
          subject: "Request for Quote",
          message: "Can you please provide me with a quote for your services?",
          cluster: "Sales",
        },
        {
          id: 7,
          fullname: "Matthew Anderson",
          phone: "0123456789",
          email: "matthewanderson@example.com",
          subject: "Complaint",
          message: "I am highly dissatisfied with the product I purchased from your company.",
          cluster: "General",
        },
        {
          id: 8,
          fullname: "Olivia Wilson",
          phone: "9876543210",
          email: "oliviawilson@example.com",
          subject: "Inquiry",
          message: "I have some questions regarding your service. Can you please assist me?",
          cluster: "General",
        },
        {
          id: 9,
          fullname: "William Johnson",
          phone: "0123456789",
          email: "williamjohnson@example.com",
          subject: "Feedback",
          message: "I wanted to provide feedback on the excellent service I received.",
          cluster: "General",
        },
        {
          id: 10,
          fullname: "Sophia Davis",
          phone: "9876543210",
          email: "sophiadavis@example.com",
          subject: "Support Request",
          message: "I am unable to access my account. Please help.",
          cluster: "Support",
        },
        {
          id: 11,
          fullname: "James Smith",
          phone: "1234567890",
          email: "jamessmith@example.com",
          subject: "Partnership Inquiry",
          message: "I am interested in exploring partnership opportunities with your company.",
          cluster: "Business",
        },
        {
          id: 12,
          fullname: "Emma Wilson",
          phone: "0123456789",
          email: "emmawilson@example.com",
          subject: "Job Application",
          message: "I would like to apply for a job position at your organization.",
          cluster: "Careers",
        },
        {
          id: 13,
          fullname: "Daniel Thompson",
          phone: "9876543210",
          email: "danielthompson@example.com",
          subject: "Quote Request",
          message: "Could you please provide me with a quote for your services?",
          cluster: "Sales",
        },
        {
          id: 14,
          fullname: "Olivia Anderson",
          phone: "1234567890",
          email: "oliviaanderson@example.com",
          subject: "Complaint",
          message: "I am disappointed with the customer service provided by your company.",
          cluster: "General",
        },
        {
          id: 15,
          fullname: "Liam Johnson",
          phone: "0123456789",
          email: "liamjohnson@example.com",
          subject: "Inquiry",
          message: "I have some questions about your product. Can you provide more information?",
          cluster: "General",
        },
      ]






      const clusterData = [
        {
          id: 123,
          name: "Cluster A",
          domain: "example.com",
          description: "This is Cluster A",
          image: "http://example.com/images/clusterA.jpg",
          created_at: "2022-01-15T09:30:00Z",
          updated_at: "2022-01-15T15:45:00Z",
          owner: 456,
          color: "#FF0000" // Manually added color
        },
        {
          id: 234,
          name: "Cluster B",
          domain: "example.com",
          description: "This is Cluster B",
          image: "http://example.com/images/clusterB.jpg",
          created_at: "2022-03-22T14:10:00Z",
          updated_at: "2022-03-23T09:20:00Z",
          owner: 789,
          color: "#00FF00" // Manually added color
        },
        {
          id: 345,
          name: "Cluster C",
          domain: "example.com",
          description: "This is Cluster C",
          image: "http://example.com/images/clusterC.jpg",
          created_at: "2022-05-08T11:20:00Z",
          updated_at: "2022-05-09T17:30:00Z",
          owner: 123,
          color: "#0000FF" // Manually added color
        },
        {
          id: 456,
          name: "Cluster D",
          domain: "example.com",
          description: "This is Cluster D",
          image: "http://example.com/images/clusterD.jpg",
          created_at: "2022-07-14T16:55:00Z",
          updated_at: "2022-07-15T10:05:00Z",
          owner: 234,
          color: "#FFFF00" // Manually added color
        },
        {
          id: 567,
          name: "Cluster E",
          domain: "example.com",
          description: "This is Cluster E",
          image: "http://example.com/images/clusterE.jpg",
          created_at: "2022-09-30T08:40:00Z",
          updated_at: "2022-09-30T14:55:00Z",
          owner: 567,
          color: "#FF00FF" // Manually added color
        },
        {
          id: 678,
          name: "Cluster F",
          domain: "example.com",
          description: "This is Cluster F",
          image: "http://example.com/images/clusterF.jpg",
          created_at: "2022-11-27T12:15:00Z",
          updated_at: "2022-11-28T07:25:00Z",
          owner: 890,
          color: "#00FFFF" // Manually added color
        }
      ];
      
export {messages, clusterData}