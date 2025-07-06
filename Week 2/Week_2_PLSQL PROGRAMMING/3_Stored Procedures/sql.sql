--Scenario 1--

CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
BEGIN
    FOR acc IN (
        SELECT AccountID, Balance
        FROM Accounts
        WHERE AccountType = 'Savings'
    )
    LOOP
        UPDATE Accounts
        SET Balance = Balance + (acc.Balance * 0.01)
        WHERE AccountID = acc.AccountID;
        DBMS_OUTPUT.PUT_LINE('Interest applied to Account ID: ' || acc.AccountID);
    END LOOP;
    COMMIT;
END;
/

SET SERVEROUTPUT ON;
BEGIN
    ProcessMonthlyInterest;
END;
/

--Scenario 2--

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
    p_department     IN VARCHAR2,
    p_bonus_percent  IN NUMBER
) IS
BEGIN
    UPDATE Employees
    SET Salary = Salary + (Salary * p_bonus_percent / 100)
    WHERE Department = p_department;
    DBMS_OUTPUT.PUT_LINE('Bonus of ' || p_bonus_percent || '% applied to department: ' || p_department);
    COMMIT;
END;
/

SET SERVEROUTPUT ON;
BEGIN
    UpdateEmployeeBonus('IT', 10);  
END;
/
SELECT * From Employees;

--Scenario 3--

CREATE OR REPLACE PROCEDURE TransferFunds (
    p_from_account_id IN NUMBER,
    p_to_account_id   IN NUMBER,
    p_amount          IN NUMBER
) IS
    v_balance NUMBER;
BEGIN
    SELECT Balance INTO v_balance
    FROM Accounts
    WHERE AccountID = p_from_account_id
    FOR UPDATE;
    IF v_balance < p_amount THEN
        RAISE_APPLICATION_ERROR(-20001, 'Insufficient balance in source account.');
    END IF;
    UPDATE Accounts
    SET Balance = Balance - p_amount
    WHERE AccountID = p_from_account_id;
    UPDATE Accounts
    SET Balance = Balance + p_amount
    WHERE AccountID = p_to_account_id;
    DBMS_OUTPUT.PUT_LINE('Transferred ' || p_amount || ' from Account ' || p_from_account_id || ' to Account ' || p_to_account_id);
    COMMIT;
END;
/

SET SERVEROUTPUT ON;
BEGIN
    TransferFunds(1, 2, 200); 
END;
/

SELECT AccountID, Balance FROM Accounts WHERE AccountID IN (1, 2);