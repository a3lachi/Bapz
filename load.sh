
rrr() { git add . ; git commit -m "code update"$1 ; git push ;}

i="200"

while [ $i -lt 230 ]
do
rrr $i;
sleep 120;
i=$[$i+1]
done