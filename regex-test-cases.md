## Validate phone number formatting

Write regex that validates a phone number given the following criteria.

-  The phone number must begin with a 3-digit area code wrapped in parentheses.
-  Followed by a space.
-  Followed by 3 digits.
-  Followed by a dash.
-  Followed by 4 digits.

###### PASS

```
(702) 555-1234
```

###### FAIL

```
(702)555-1234
(702) 555-12345
(702) 555-1234 ext. 1000
 (702) 555-1234
(702) 555 - 1234
(702) 555_1234
702-555-1234
702 555-1234
7025551234
(702) 555-CALL
```

## Validate password formatting

Write regex that validates a password that only contains letters (lower case or upper case) or numbers or the following special characters:

```
_!#/\-
```

The password must also be greater than 9 characters.

###### PASS

```
_!#/\-_!#/\-
mypassword
1234567890
password!
never-guess
MY#1PASSword
```

###### FAIL

```
password
password:)
mypassword :)
 mypassword
123456
mike@gmail.com
```

## Validate URL formatting

Write regex that validates a URL given the following criteria.

-  The URL must begin with `https://www` or `http://www`
-  Followed by a period
-  Followed by 1 letter (any case) or number
-  Followed by 1 or more “word” characters or dashes
-  Followed by a period
-  Followed by 2 or more letters

###### PASS

```
https://www.example.com
http://www.example.com
http://www.ai.io
https://www.10xcodecamp.com
https://www.all-in.christmas
https://www.ex_ample.com
http://www.A4DD28BBA3.app
```

###### FAIL

```
http//www.example.com
http://www_example.com
http://www.example_com
https://www.x.io
https://www._x.net
https://wwwexamplecom
https://www.ex+ample.com
example.com
https://www.x.co m
 https://www.x.com
http:www.example.com
```

## Validate email formatting

Write regex that validates an email given the following criteria.

-  The email address must begin with at least 1 “word” character (front of local-part)
-  Followed by 0 or more of any character (back of local-part)
-  Followed by the @ symbol
-  Followed by 1 letter or number (front of domain name)
-  Followed by 1 or more “word” characters or dashes (back of domain name)
-  Followed by a period
-  Followed by 2 or more letters (top level domain)
-  And the regex is case insensitive

###### PASS

```
mike@example.com
mike.zetlow@gmail.com
mike.zetlow@GMAIL.COM
mike+no-reply@example.com
m@example.ai
1mike@space-x.com
mike@10xcodecamp.com
_@space.com
```

###### FAIL

```
mike@_x.com
mike
@mike
mike@_ai.com
example.com
@example.ai
mike@g.com
mike@example.c
 mike@gmail.com
mike@gmail.com please don't email me
+no-reply-mike@example.com
```
