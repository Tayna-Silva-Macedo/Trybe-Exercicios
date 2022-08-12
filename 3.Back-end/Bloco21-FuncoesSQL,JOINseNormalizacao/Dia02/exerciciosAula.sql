#1. Busque todos os nomes das pessoas que possuem pedidos realizado e as pessoas funcionárias que fizeram a operação
SELECT 
    C.CustomerName,
    CONCAT(E.FirstName, ' ', E.LastName) AS EmployeeName
FROM
    customers AS C
        INNER JOIN
    orders AS O ON C.CustomerID = O.CustomerID
        INNER JOIN
    employees AS E ON O.EmployeeID = E.EmployeeID;

#2. Busque todos os nomes das pessoas que possuem pedidos realizados e as pessoas funcionárias que fizeram a operação e a empresa associada para envio do produto
SELECT 
    C.CustomerName,
    CONCAT(E.FirstName, ' ', E.LastName) AS EmployeeName,
    S.ShipperName
FROM
    customers AS C
        INNER JOIN
    orders AS O ON C.CustomerID = O.CustomerID
        INNER JOIN
    employees AS E ON O.EmployeeID = E.EmployeeID
        INNER JOIN
    shippers AS S ON O.ShipperID = S.ShipperID;

#3. Retorne o CustomerName e OrderID de todos os customers mesmo que nunca tenha sido feita uma compra
SELECT 
    C.CustomerName, O.OrderID
FROM
    customers AS C
        LEFT JOIN
    orders AS O ON C.CustomerID = O.CustomerID;
    
#4. Retorne o OrderID, Employees LastName e FirstName de TODOS os employees mesmo que não haja nenhuma venda (order)
SELECT 
    O.OrderID,
    CONCAT(E.FirstName, ' ', E.LastName) AS EmployeeName
FROM
    orders AS O
        RIGHT JOIN
    employees AS E ON O.EmployeeID = E.EmployeeID;