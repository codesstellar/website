export type PublicBlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  bodyMarkdown: string;
  tag: string;
  date: string;
  publishedAt: string;
  image?: string;
  seoTitle?: string;
  seoDescription?: string;
};

export const fallbackBlogPosts: PublicBlogPost[] = [
  {
    id: 'nist-pqc-web3',
    title: 'NIST Finalizes Post-Quantum Cryptography Standards: What It Means for Web3',
    slug: 'nist-post-quantum-cryptography-standards-web3',
    excerpt:
      'An architectural analysis of FIPS 203 (ML-KEM), FIPS 204 (ML-DSA), and FIPS 205 (SLH-DSA), and what standardized post-quantum algorithms mean for blockchain consensus, wallet signers, and rollup proving circuits.',
    bodyMarkdown: `## Quick answer

The publication of finalized Federal Information Processing Standards (FIPS 203, FIPS 204, and FIPS 205) shifts post-quantum cryptography from theoretical research into standard engineering practice. For Web3 protocols, this is not a panic call to replace every elliptic curve overnight. It is the beginning of a deliberate transition window where protocols must implement **crypto-agility**—the capacity to rotate algorithms, public key representations, and signature verification logic without hard-forking application state or breaking custody workflows.

## Why it matters for blockchain systems

Blockchains are permanently committed ledgers. Unlike web sessions that expire in minutes, transactions, commitments, identity credentials, and custodial state recorded today will persist for decades.

The cryptographic primitives currently securing Ethereum, Bitcoin, Solana, and Cosmos (such as ECDSA secp256k1 and Ed25519) are fundamentally vulnerable to Shor's algorithm running on a cryptographically relevant quantum computer (CRQC). A quantum adversary with sufficient coherent qubits could derive private keys directly from exposed public keys on-chain.

> **Key takeaway:** The highest urgency is not immediate algorithm replacement; it is eliminating protocol designs that tightly couple signing primitives to core business logic.

## The Standardized Algorithms

NIST selected three primary algorithms that every Web3 security architect must understand:

1. **FIPS 203: ML-KEM (Module-Lattice Key Encapsulation Mechanism)**
   - Formerly known as *Kyber*.
   - Primary purpose: Secure key exchange and encrypted P2P channels.
   - Relevance to Web3: P2P validator communication, MEV-protected transaction mempools, and validator gossip encryption.

2. **FIPS 204: ML-DSA (Module-Lattice Digital Signature Algorithm)**
   - Formerly known as *Dilithium*.
   - Primary purpose: General-purpose digital signatures.
   - Relevance to Web3: Direct candidate to replace ECDSA and Ed25519 for transaction authorization.
   - Technical tradeoff: Public keys are ~1,312 bytes and signatures are ~2,420 bytes (compared to 65-byte ECDSA signatures).

3. **FIPS 205: SLH-DSA (Stateless Hash-based Digital Signature Algorithm)**
   - Formerly known as *SPHINCS+*.
   - Primary purpose: Conservative fallback signature scheme based strictly on the security of hash functions (SHA-2/SHAKE).
   - Relevance to Web3: Highly trusted security foundation for cold-storage governance, root keys, and firmware signing, despite larger signature sizes (~7.8KB - 17KB).

## Technical Context: On-Chain Verification Gas Costs

The primary barrier to running post-quantum signatures directly in EVM smart contracts today is gas consumption. Because lattice-based polynomial multiplication (NTT) is not native to the EVM instruction set, raw bytecode verification can cost hundreds of thousands of gas per signature.

\`\`\`solidity
// Abstract verification interface for crypto-agile contracts
interface ICryptoAgileVerifier {
    enum Algorithm {
        ECDSA_SECP256K1,
        ED25519,
        ML_DSA_44,
        ML_DSA_65,
        SLH_DSA_SHAKE_128F
    }

    function verifySignature(
        Algorithm algorithm,
        bytes calldata publicKey,
        bytes32 digest,
        bytes calldata signature
    ) external view returns (bool isValid);
}
\`\`\`

## Practical Implementation Checklist for Protocols

- **Audit all public key exposures:** Inventory addresses where public keys have been revealed versus addresses that remain protected behind hash preimages (e.g., Bitcoin P2PKH vs P2PK).
- **Decouple verification in Account Abstraction:** Adopt ERC-4337 or native account abstraction with modular validation modules that allow account owners to add post-quantum secondary signers.
- **Implement Hybrid Signatures:** Combine classic elliptic curve signatures with post-quantum signatures (dual-signing), ensuring that security holds if either primitive remains unbroken.
- **Advocate for L1 EVM Precompiles:** Support EIP proposals introducing native precompiles for ML-DSA and ML-KEM to reduce verification overhead from 400k+ gas to under 25k gas.

## Practical Takeaway

Protocol designers who build modular, crypto-agile trust boundaries today will transition smoothly. Those who defer architectural upgrades will face emergency migrations under adversarial market conditions.`,
    tag: 'RESEARCH',
    date: 'Aug 24, 2026',
    publishedAt: '2026-08-24T00:00:00.000Z',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1600&q=80',
    seoTitle: 'NIST Finalizes Post-Quantum Standards: Web3 Impact | Codesstellar',
    seoDescription: 'In-depth architectural analysis of NIST FIPS 203, 204, and 205 for blockchain protocols, wallet signers, and crypto-agility.',
  },
  {
    id: 'crypto-agility-smart-contracts',
    title: 'The Crypto-Agility Imperative in Smart Contract Design',
    slug: 'crypto-agility-smart-contract-design',
    excerpt:
      'Why Web3 systems need upgrade-safe cryptographic boundaries before post-quantum migration becomes urgent, and how to implement modular validation layers.',
    bodyMarkdown: `## Quick answer

Crypto-agility is the engineering discipline that enables a software system to replace cryptographic primitives—such as hash functions, signature schemes, and encryption algorithms—without requiring catastrophic protocol rewrites or breaking downstream integrations. In smart contract development, crypto-agility is achieved through modular verification interfaces, decoupled authentication pipelines, and strict separation between business logic and cryptographic math.

## Why it matters

Most decentralized applications (DeFi lending pools, DEX order books, cross-chain bridges) hard-code \`ecrecover\` or specific elliptic curve precompiles directly into their authentication checks. When quantum computing capabilities require changing these primitives, such protocols face an impossible dilemma: freeze billions of dollars in TVL or execute high-risk contract migrations that break composability.

## Architectural Patterns for Crypto-Agility

### 1. Modular Verifier Registry Pattern

Instead of verifying signatures directly inside the asset contract, delegate authentication to an audited, registry-controlled verification contract:

\`\`\`solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

contract CryptoAgileVault {
    address public verifierRegistry;
    mapping(address => uint8) public userPreferredScheme;

    event VerificationSchemeUpdated(address indexed user, uint8 schemeId);

    function executeTransaction(
        bytes32 txHash,
        bytes calldata signature,
        bytes calldata executionPayload
    ) external {
        uint8 schemeId = userPreferredScheme[msg.sender];
        IVerifier verifier = IVerifierRegistry(verifierRegistry).getVerifier(schemeId);
        
        require(
            verifier.isValidSignature(msg.sender, txHash, signature),
            "Invalid post-quantum or hybrid signature"
        );

        (bool success, ) = address(this).call(executionPayload);
        require(success, "Execution failed");
    }
}
\`\`\`

### 2. The Hybrid Dual-Signature Phase

During the multi-year transition to post-quantum standards, neither pure legacy elliptic curve nor pure post-quantum algorithms are optimal alone. A **hybrid signature** scheme requires an attacker to break BOTH classical discrete logarithm and post-quantum lattice problems simultaneously:

- **Primary classical signer:** ECDSA / Ed25519 (ensures backward compatibility with hardware wallets).
- **Secondary post-quantum signer:** ML-DSA-44 or ML-DSA-65 (protects against future quantum interception).

> **Important Security Warning:** When combining two signatures, always hash the transaction payload together with the algorithm IDs to prevent cross-algorithm signature malleability attacks.

## Practical Implementation Steps

1. **Map Cryptographic Assumptions:** Identify every contract method that relies on fixed-size 65-byte signatures.
2. **Support Dynamic Payload Sizes:** Refactor storage and calldata parsers to handle signatures ranging from 65 bytes to 4,000 bytes.
3. **Formal Verification of State Deserialization:** Verify that variable-length signature payloads cannot overflow buffer allocations or trigger denial-of-service gas limit exceptions.

## Practical Takeaway

Crypto-agility is an architectural hedge. Building it in advance costs 5-10% more upfront engineering effort, but prevents 100% of catastrophic upgrade emergencies later.`,
    tag: 'ENGINEERING',
    date: 'Jul 15, 2026',
    publishedAt: '2026-07-15T00:00:00.000Z',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=80',
    seoTitle: 'Crypto-Agility in Smart Contract Design | Codesstellar',
    seoDescription: 'Design patterns for crypto-agile Web3 protocols, hybrid signature verifiers, and modular smart contracts.',
  },
  {
    id: 'ai-threat-modeling-bridges',
    title: 'AI-Driven Threat Modeling for Cross-Chain Bridges',
    slug: 'ai-driven-threat-modeling-cross-chain-bridges',
    excerpt:
      'How AI-assisted research workflows help security engineers monitor bridge risk, validator assumptions, abnormal message volume, and multi-chain invariant violations.',
    bodyMarkdown: `## Quick answer

Cross-chain bridges represent the single largest concentration of historical Web3 exploit losses. AI-driven threat modeling does not replace cryptographers or formal verification engineers—it amplifies them by continuously analyzing transaction topologies, mempool state divergences, and multi-chain relayer anomalies that human teams cannot track manually 24/7.

## The Problem with Cross-Chain Invariants

A bridge is rarely a single smart contract. It is a distributed protocol comprising:
- Source chain deposit contracts
- Off-chain validator / relayer gossip networks
- Multi-party computation (MPC) key-signing ceremony nodes
- Destination chain mint/release contracts
- Emergency guardian pause mechanisms

Because state transitions span asynchronous execution environments with differing block times, traditional monolithic fuzzing tools miss edge-case race conditions.

## How AI Augments the Security Control Plane

\`\`\`text
┌────────────────────────────────────────────────────────┐
│                   On-Chain Telemetry                   │
│   (Source Deposits, Relayer Latencies, Gas Volatility)  │
└───────────────────────────┬────────────────────────────┘
                            │ Real-time ingest
                            ▼
┌────────────────────────────────────────────────────────┐
│        AI Invariant & Anomaly Synthesis Engine         │
│   - Detects abnormal withdrawal velocity               │
│   - Flags non-deterministic message sequence gaps      │
│   - Correlates mempool frontrunning attempts          │
└───────────────────────────┬────────────────────────────┘
                            │ Ranked review queue
                            ▼
┌────────────────────────────────────────────────────────┐
│           Human-in-the-Loop Security Team              │
│       Authoritative Decision: Pause / Inspect / Pass   │
└────────────────────────────────────────────────────────┘
\`\`\`

### Key Capabilities of AI Threat Observability

1. **Transaction Invariant Verification:** Detecting when total minted synthetic tokens on destination chain exceed verified locked collateral on source chain within sub-second thresholds.
2. **Relayer Censorship & Liveness Monitoring:** Automated alerts when specific validator subsets consistently fail to sign transactions during volatile network conditions.
3. **Proof Replay & Malleability Scanning:** Continuous automated mutation testing of merkle root proofs and zero-knowledge batch proofs.

## Practical Takeaway

Protocol security operations must leverage AI to sift through billions of telemetry data points, providing human incident commanders with high-confidence, context-rich alerts before capital is drained.`,
    tag: 'SECURITY',
    date: 'Jun 28, 2026',
    publishedAt: '2026-06-28T00:00:00.000Z',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80',
    seoTitle: 'AI Threat Modeling for Cross-Chain Bridges | Codesstellar',
    seoDescription: 'Leveraging AI security monitoring and invariant synthesis to protect multi-chain bridge infrastructure.',
  },
  {
    id: 'pqc-wallet-migration',
    title: 'Post-Quantum Wallet Migration: The Decisions That Matter Before You Change a Signature',
    slug: 'post-quantum-wallet-migration-decisions',
    excerpt: 'A wallet migration is a product, custody, and protocol decision—not simply an algorithm swap. Here is the decision sequence we use to make it manageable.',
    bodyMarkdown: `## The migration starts outside the signature primitive

A post-quantum wallet program is often framed as a question of which signature scheme to adopt. That question matters, but it comes late in the process. A wallet is also a recovery experience, an identity system, a custody boundary, and a promise to users about how they can access value.

The right first move is an inventory: identify every signing flow, every verifier, every account abstraction, every backup mechanism, and every third-party integration that assumes a particular key type.

## A useful decision sequence

- **Map the trust boundary.** Separate keys that authorize funds, validators, governance, and service-to-service traffic.
- **Design account continuity.** Define how existing users can move, recover, or rotate without creating a social-engineering opportunity.
- **Isolate verification.** Keep cryptographic verification modular so a protocol can support a transition period without duplicating business logic.
- **Test the operational path.** Key sizes, signing latency, hardware compatibility, and support tooling all shape whether an upgrade is usable.

## Why crypto-agility is the real outcome

No team should treat a post-quantum upgrade as the last cryptographic change it will ever make. The durable asset is a system that can introduce, observe, deprecate, and rotate cryptographic primitives in a controlled way.

For wallet teams, that means measuring readiness as an operational capability: can you identify the affected accounts, communicate clearly, migrate safely, and reverse a problematic rollout?`,
    tag: 'PQC STRATEGY',
    date: 'May 14, 2026',
    publishedAt: '2026-05-14T00:00:00.000Z',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1600&q=80',
    seoTitle: 'Post-Quantum Wallet Migration | Codesstellar',
    seoDescription: 'A practical, product-led approach to post-quantum wallet migration and crypto-agile architecture.',
  },
  {
    id: 'ai-security-control-plane',
    title: 'AI Is Not the Security Decision Maker. It Is the Security Control Plane’s Fastest Researcher.',
    slug: 'ai-security-control-plane-web3',
    excerpt: 'The opportunity for AI in protocol security is not autonomous control—it is better context, clearer prioritization, and faster expert review.',
    bodyMarkdown: `## Security teams do not need more noise

Protocol security produces an abundance of signals: code changes, governance proposals, contract events, incident reports, bridge operations, vendor updates, and internal alerts. The hard problem is connecting the signals quickly enough for experts to make good decisions.

This is where AI is useful. It can summarize a change set, connect it to known system dependencies, group similar alerts, and surface the assumptions that need a reviewer’s attention.

## Keep agency with the people accountable for risk

An AI workflow should make its evidence visible. It should show which sources informed a summary, distinguish observation from inference, and make it easy for a reviewer to reject or correct an output. It should not silently make irreversible protocol or custody decisions.

## The operating model

- **Ingest approved sources with clear provenance.** Pull directly from verified compiler outputs, testnet logs, and audited repositories.
- **Enrich activity with code, asset, and dependency context.** Don't view transactions in isolation; connect them to historical contract states.
- **Rank review queues by exposure and confidence, not by novelty alone.** Prioritize based on affected capital and blast radius.
- **Record human decisions so the team can improve playbooks over time.** Create institutional muscle memory that outlives individual audits.

The result is a security operation that learns faster while preserving the accountability that serious financial systems require.`,
    tag: 'AI SECURITY',
    date: 'Apr 19, 2026',
    publishedAt: '2026-04-19T00:00:00.000Z',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80',
    seoTitle: 'AI-Assisted Web3 Security Operations | Codesstellar',
    seoDescription: 'How AI can strengthen Web3 security review without replacing accountable human decision-making.',
  },
  {
    id: 'bridge-crypto-inventory',
    title: 'Your Bridge Has More Cryptographic Dependencies Than Its Validator Set',
    slug: 'bridge-cryptographic-dependency-inventory',
    excerpt: 'A bridge’s quantum-readiness depends on every trust boundary around it: signers, relayers, APIs, operational keys, and recovery processes.',
    bodyMarkdown: `## Start with the full system, not the contract

A bridge can look simple when viewed as a pair of contracts and a validator set. In production, it is a chain of trust assumptions involving signing infrastructure, message formats, relayer services, operator identity, monitoring, governance, and emergency controls.

Post-quantum planning needs to include every one of those surfaces. Otherwise a new signature primitive can coexist with an older, exposed administrative or operational path.

## A bridge inventory asks different questions

- What keys can mint, release, pause, upgrade, or recover assets?
- Where is public-key cryptography used to authenticate messages or operators?
- Which dependencies are controlled by your team, and which are vendor or ecosystem constraints?
- What is the safe rollback plan if a new verifier behaves unexpectedly?

## Make transition a design property

The target state is not a claim that a bridge is permanently quantum-proof. It is an architecture with explicit trust boundaries, observable key use, and a tested process for rotating the cryptographic layer when standards, ecosystem support, or risk posture changes.`,
    tag: 'PROTOCOL SECURITY',
    date: 'Mar 11, 2026',
    publishedAt: '2026-03-11T00:00:00.000Z',
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1600&q=80',
    seoTitle: 'Bridge Cryptographic Dependency Inventory | Codesstellar',
    seoDescription: 'Why post-quantum bridge security requires inventorying every operational and relayer trust boundary.',
  },
];
