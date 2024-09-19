import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

const WalletStatement = () => {
  const generatePDF = () => {
    const doc = new jsPDF();

    // Set the title
    doc.setFontSize(18);
    doc.text("Wallet Statement", 104, 20, { align: "center" });

    const walletInfo = [
      ["Service", "MovieTime"],
      ["Rental Date", "15-09-2024"],
      ["Rental ID", "M123456"],
      ["Movie Title", "Inception"],
      ["From", "01-09-2024"],
      ["To", "15-09-2024"],
      ["Total Rentals", "3"],
      ["Remaining Rentals", "2"],
    ];

    walletInfo.forEach((item, index) => {
      const base = index * 6;
      item.forEach((value, i) => {
        const fontSize = i === 0 ? 9 : 8;
        const xSpacing = i === 0 ? 14 : i === 1 ? 50 : 85;

        //setting bold fonts for labels
        if (i === 0) {
          doc.setFont("helvetica", "", "bold");
        } else {
          doc.setFont("helvetica", "", "normal");
        }

        doc.setFontSize(fontSize);
        doc.text(value, xSpacing, base + 30, { align: "left" });
      });
    });

    // Line break before transactions
    let finalY = doc.previousAutoTable.finalY || 60;
    doc.text(" ", 14, finalY + 10);

    const transactionColumns = [
      "Checkout Date",
      "Book ID",
      "Title",
      "Member ID",
      "Member Name",
      "Due Date",
      "Status",
    ];

    const transactionRows = [
      [
        "2024-09-01 09:00:00",
        "BK1001",
        "The Great Gatsby",
        "MEM123",
        "Alice Johnson",
        "2024-09-15",
        "Checked Out",
      ],
      [
        "2024-09-02 10:15:30",
        "BK1002",
        "1984",
        "MEM124",
        "Bob Smith",
        "2024-09-16",
        "Checked Out",
      ],
      [
        "2024-09-03 11:45:20",
        "BK1003",
        "To Kill a Mockingbird",
        "MEM125",
        "Charlie Brown",
        "2024-09-17",
        "Returned",
      ],
      [
        "2024-09-04 14:30:10",
        "BK1004",
        "Pride and Prejudice",
        "MEM126",
        "Diana Prince",
        "2024-09-18",
        "Checked Out",
      ],
      [
        "2024-09-05 16:00:05",
        "BK1005",
        "The Catcher in the Rye",
        "MEM127",
        "Eve Adams",
        "2024-09-19",
        "Returned",
      ],
    ];

    // Adding transactions table
    doc.autoTable({
      startY: finalY + 20,
      head: [transactionColumns],
      body: transactionRows,
      styles: { cellPadding: 1.5, fontSize: 8 },
      theme: "grid",
      headStyles: {
        fillColor: [0, 0, 0, 0],
        textColor: "#000",
        lineWidth: 0.1,
        fontSize: 9,
      },
    });

    // Save the PDF
    doc.save("wallet_statement.pdf");
  };

  return (
    <div>
      <h1>Wallet Statement</h1>
      <button onClick={generatePDF}>Download PDF</button>
    </div>
  );
};

export default WalletStatement;
