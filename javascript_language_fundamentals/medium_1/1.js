// What will each line of the following code return? Don't run the code until after you have tried to answer.

(false && undefined); // false
(false || undefined); // undefined
((false && undefined) || (false || undefined)); // undefined
((false || undefined) || (false && undefined)); // false
((false && undefined) && (false || undefined)); // false
((false || undefined) && (false && undefined)); // false
('a' || (false && undefined) || ''); // 'a'
((false && undefined) || 'a' || ''); // ''
('a' && (false || undefined) && ''); // ''
((false || undefined) && 'a' && ''); // undefined