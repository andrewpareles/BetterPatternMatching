// pattern = <script * x * </script>
// need to allow something like (?:<script (.*?)>(.*?)<\/script>\s*?){2}, which js doesn't allow

/*

(space \s) -> ''
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

*/