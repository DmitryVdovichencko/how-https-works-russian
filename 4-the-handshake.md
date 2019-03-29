
The Handshake


https://howhttps.works


When you started reading this comic, your browser displayed a green lock on the address bar.


How did that happen?


Your browser communicated with our server, where this comic is hosted, and they both established a secure connection to transmit messages.


But first, they needed to agree on how to communicate securely.


https://howhttps.works


If the negotiation is not successful, your browser lets you know by showing an error or warning.


https://howhttps.works


If an agreement is reached, your browser is happy to display a green padlock on the address bar.


THE HANDSHAKE


This process, the negotiation between a browser and a server, is called "the handshake".


It happens very fast. We are going to show you how it works.


Browserbird will be your browser.


Compugter will be our server.


Take it away guys!


Ready? Here is what the "handshake" in slow-motion looks like.


Left clap


Right clap


Vertical shaka


Shaka horizontal rotation


Tickles


Done!


Let's do it again, but faster.


Left clap - Right clap - Shaka - Shaka rotation - Tickles.


A-G-A-I-N !


Stop!


Let's break it down. Step by step.


Step One: Left clap. AKA Client Hello.


I send a list of SSL/TLS versions and encryption algorithms that I can work with to Compugter.


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
