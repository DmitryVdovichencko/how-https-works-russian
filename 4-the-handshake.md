## Picture-01

Рукопожатие

## Picture-02

https://howhttps.works


Когда вы начали читать этот комикс, ваш браузер отобразил зеленый значок в адресной строке.

## Picture-03

Как это произошло?

## Picture-04

Ваш браузер соединился с нашим серевером, где размещен этот комикс, и они оба установили безопасное соединение для передачм сообщений.

## Picture-05

Но сначала, им нужно было договориться о том как обеспечить безопасное соединение.

## Picture-06

https://howhttps.works


Если переговоры завершились неудачно, ваш браузер даст вам знать отобразив ошибку или предупреждение.

## Picture-07

https://howhttps.works


Если соглашение было достигнуто, ваш браузер будет рад отобразить зеленый замок в адресной строке.

## Picture-08

РУКОПОЖАТИЕ


Этот процесс переговоров между браузером и сервером называется "рукопожатием" 

## Picture-09

Это происходит очень быстро. Мы покажем вам как это работает.

## Picture-10

Браузерберд будет вашим браузером.

## Picture-11

ПеСель будет нашим сервером

## Picture-12

Вам слово, ребята!

## Picture-13

Готовы? Вот как выглядит "рукопожатие" в слоумо.

## Picture-14

Левой

## Picture-15

Правой

## Picture-16

Вертикальная шака

## Picture-17

Горизонтальная шака

## Picture-18

Пощекочем

## Picture-19

Готово!

## Picture-20

Давай еще раз, только быстрее.

## Picture-21

Левой - Правой - Шака - Поворотная шака - Пощекочем.

## Picture-22

Е-Щ-Ё !

## Picture-23

Да хорош!

## Picture-24

Попробуем разобраться. Шаг за шагом.

## Picture-25

Шаг первый: Левой. Типа приветствие со стороны клиента.

## Picture-26

Я отправляю список SSL/TLS версий и алгоритмов шифрования, с которыми я могу работать, Песелю.


A fancy word for the encryption algorithm list is "cypher suite".


So you can sound like a pro at the dinner table.


T


S


The SSL and TLS protocols have evolved over time, we'll talk more about that soonish.


And then I wait for an answer from Compugter.


Step two: Right clap. AKA Server Hello.


I choose the best SSL/TLS version and encryption algorithm among the ones browserbird sent me, and based on my preferences.


I reply with my certificate, which includes my public key, so they can verify who I am.


Step three: Vertical shaka. AKA Client Key Exchange.


I check Compugter's certificate to make sure they are legit.


I generate a "pre-master key" so we can both use it later when we generate a unique key.


I encrypt that pre-master key with Compugter's public key and then send it to him.


Step four: Shaka horizontal rotation. AKA Change Cypher spec.


I use my private key to decrypt the pre-master key.


So far all the communication between them has been in the open. They haven't secured any messages.


They used asymmetric keys (public and private keys) to encrypt the pre-master key so nobody could spy on it.


Now they both generate the same "shared secret" that they are going use as a symmetric key.


From


T


Hey! Here is a test message


encrypted with the shared


secret. Can you read this?


From now on, I'll encrypt


everything with this key


And browserbird sends a test.


From


T


Y


you can also read this. From


now on, I'll encrypt everything


with this key


Compugter responds.


Step five: Tickles. AKA Everything is now secured.


Now all data going back and forth between Browserbird and Computer is now secured for the rest of the session.


https://dnsimple.com


Passwords, credit card details, everything.


Simple, right?


Next time you connect to a website securely via HTTPS, give your browser the shaka because you know their secret handshake.


HTTPS, SSL, TLS, oh my! I just had an acronym soup for lunch. What do they mean? Are they the same thing?
