// pattern = <script * x * </script>
// need to allow something like (?:<script (.*?)>(.*?)<\/script>\s*?){2}, which js doesn't allow

/*

(space \s) -> '' // change to .*
\space -> ' '

\* -> *
\** -> **
* -> lazy match group
** -> greedy match group

general form: 
*label[include these... (* = all)][and exclude these... (* = all)]{1,2} or + or *
-> 

SPECIFIER = {1,2} | + | *

if includethese:
    if not excludethese:
        MATCHSTR = [a-zA-Z...]SPECIFIER
    else: // include some and exclude others
        ???
else: 
    if not excludethese:
        MATCHSTR = .SPECIFIER
    else: 
        MATCHSTR = [^a-zA-Z...]SPECIFIER

if label:
    (?<label>MATCHSTR)
else:
    (?:MATCHSTR)



$pattern -> ??? $1 $2 $3 ? 


- find noncommutative replacements & do the smallest prefixes first

TODO:
what about positive/negative lookahead/behind?
gmiyusd?




TODO: 
match string 
with pattern 
replacing
*1 with (match *1 with ...)
*2 with ...
returning *1 *2 *3 ... 
order by len(*1 + *2 + *3 + ...)

pattern = (- *$i)^$n means:
match - a -b -c -dddddd -eeeeeeee f g h
with *1 = a, *2 = b, *3 = c, *4 = dddddd, *5 = eeeeeeee f g h
*/
