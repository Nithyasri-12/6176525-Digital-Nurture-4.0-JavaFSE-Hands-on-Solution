--Creating Customer Table--

CREATE TABLE Customers (
    CustomerID NUMBER PRIMARY KEY,
    Name VARCHAR2(100),
    DOB DATE,
    Balance NUMBER,
    LastModified DATE
);

--Inserting Values--

INSERT INTO Customers (CustomerID, Name, DOB, Balance, LastModified)
VALUES (1, 'John Doe', TO_DATE('1985-05-15', 'YYYY-MM-DD'), 1000, SYSDATE);

INSERT INTO Customers (CustomerID, Name, DOB, Balance, LastModified)
VALUES (2, 'Jane Smith', TO_DATE('1990-07-20', 'YYYY-MM-DD'), 1500, SYSDATE);

INSERT INTO Customers (CustomerID, Name, DOB, Balance, LastModified)
VALUES (3, 'James Anderson', TO_DATE('1960-12-20', 'YYYY-MM-DD'), 1500, SYSDATE);

INSERT INTO Customers (CustomerID, Name, DOB, Balance, LastModified)
VALUES (4, 'Robert Willson', TO_DATE('1970-02-10', 'YYYY-MM-DD'), 12000, SYSDATE);
 
SELECT * FROM Customers;

--Creating Accounts Table--

CREATE TABLE Accounts (
    AccountID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    AccountType VARCHAR2(20),
    Balance NUMBER,
    LastModified DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

--Inserting Values--

INSERT INTO Accounts (AccountID, CustomerID, AccountType, Balance, LastModified)
VALUES (1, 1, 'Savings', 1000, SYSDATE);

INSERT INTO Accounts (AccountID, CustomerID, AccountType, Balance, LastModified)
VALUES (2, 2, 'Checking', 1500, SYSDATE);

select * from Accounts;

--Creating Transactions Table--

CREATE TABLE Transactions (
    TransactionID NUMBER PRIMARY KEY,
    AccountID NUMBER,
    TransactionDate DATE,
    Amount NUMBER,
    TransactionType VARCHAR2(10),
    FOREIGN KEY (AccountID) REFERENCES Accounts(AccountID)
);

--Inserting Values--

INSERT INTO Transactions (TransactionID, AccountID, TransactionDate, Amount, TransactionType)
VALUES (1, 1, SYSDATE, 200, 'Deposit');

INSERT INTO Transactions (TransactionID, AccountID, TransactionDate, Amount, TransactionType)
VALUES (2, 2, SYSDATE, 300, 'Withdrawal');

select * from Transactions;

--Creating Loans Table--

CREATE TABLE Loans (
    LoanID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    LoanAmount NUMBER,
    InterestRate NUMBER,
    StartDate DATE,
    EndDate DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

--Inserting Values--

INSERT INTO Loans (LoanID, CustomerID, LoanAmount, InterestRate, StartDate, EndDate)
VALUES (1, 1, 5000, 5, SYSDATE, ADD_MONTHS(SYSDATE, 60));

INSERT INTO Loans (LoanID, CustomerID, LoanAmount, InterestRate, StartDate, EndDate)
VALUES (2, 2, 8000, 6, SYSDATE, SYSDATE + 15);

select * from Loans;

--Creating Employees Table--

CREATE TABLE Employees (
    EmployeeID NUMBER PRIMARY KEY,
    Name VARCHAR2(100),
    Position VARCHAR2(50),
    Salary NUMBER,
    Department VARCHAR2(50),
    HireDate DATE
); 

--Inserting Values--

INSERT INTO Employees (EmployeeID, Name, Position, Salary, Department, HireDate)
VALUES (1, 'Alice Johnson', 'Manager', 70000, 'HR', TO_DATE('2015-06-15', 'YYYY-MM-DD'));

INSERT INTO Employees (EmployeeID, Name, Position, Salary, Department, HireDate)
VALUES (2, 'Bob Brown', 'Developer', 60000, 'IT', TO_DATE('2017-03-20', 'YYYY-MM-DD'));

select * from Employees;

--Scenario 1--

SET SERVEROUTPUT ON;
BEGIN
    FOR cust IN (
        SELECT CustomerID, Name, 
               TRUNC(MONTHS_BETWEEN(SYSDATE, DOB) / 12) AS Age
        FROM Customers
    )
    LOOP
        DBMS_OUTPUT.PUT_LINE('Checking customer: ' || cust.Name || ', Age: ' || cust.Age);
        IF cust.Age > 60 THEN
            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE CustomerID = cust.CustomerID;
            DBMS_OUTPUT.PUT_LINE('1% discount applied to loans of customer: ' || cust.Name || ' (Age: ' || cust.Age || ')');
        END IF;
    END LOOP;
END;
/

--Scenario 2--

ALTER TABLE Customers ADD IsVIP CHAR(1);

SET SERVEROUTPUT ON;
BEGIN
    FOR cust IN (
        SELECT CustomerID, Name, Balance FROM Customers
    )
    LOOP
        IF cust.Balance > 10000 THEN
            UPDATE Customers
            SET IsVIP = 'Y'
            WHERE CustomerID = cust.CustomerID;
            DBMS_OUTPUT.PUT_LINE('Customer ' || cust.Name || ' promoted to VIP (Balance: ' || cust.Balance || ')');
        ELSE
            UPDATE Customers
            SET IsVIP = 'N'
            WHERE CustomerID = cust.CustomerID;
            DBMS_OUTPUT.PUT_LINE('Customer ' || cust.Name || ' is not a VIP (Balance: ' || cust.Balance || ')');
        END IF;
    END LOOP;
END;
/

--Scenario 3--

SET SERVEROUTPUT ON;
BEGIN
    FOR due_loan IN (
        SELECT l.LoanID, l.CustomerID, l.EndDate, c.Name FROM Loans l
        JOIN Customers c ON l.CustomerID = c.CustomerID
        WHERE l.EndDate BETWEEN SYSDATE AND SYSDATE + 30
    )
    LOOP
        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Loan ID ' || due_loan.LoanID || ' for customer ' || due_loan.Name || ' is due on ' || TO_CHAR(due_loan.EndDate, 'DD-Mon-YYYY')
        );
    END LOOP;
END;
/