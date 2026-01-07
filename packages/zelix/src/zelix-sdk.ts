import {
	createSolanaRpcClient,
	resolveCluster,
	type ClusterMoniker,
	type SolanaRpcClient,
} from "@solana/client";
import type { ClusterUrl } from "@solana/kit";
import { Connection, type ConnectionConfig } from "@solana/web3.js";

export type ZelixCommitment = "processed" | "confirmed" | "finalized";

export type ZelixSdkConfig = Readonly<{
	cluster?: ClusterMoniker;
	endpoint?: string;
	websocketEndpoint?: string;
	commitment?: ZelixCommitment;
	rpcClient?: SolanaRpcClient;
	web3Connection?: Connection;
}>;

function normalizeUrl(value?: string): ClusterUrl | undefined {
	const trimmed = value?.trim();
	return trimmed?.length ? (trimmed as ClusterUrl) : undefined;
}

export class ZelixSdk {
	readonly commitment: ZelixCommitment;
	readonly endpoint: string;
	readonly websocketEndpoint: string;

	readonly rpcClient: SolanaRpcClient;
	readonly web3: Connection;

	constructor(config: ZelixSdkConfig = {}) {
		this.commitment = config.commitment ?? "confirmed";

		const resolved = resolveCluster({
			endpoint: normalizeUrl(config.endpoint),
			moniker: config.cluster,
			websocketEndpoint: normalizeUrl(config.websocketEndpoint),
		});

		this.endpoint = resolved.endpoint;
		this.websocketEndpoint = resolved.websocketEndpoint;

		this.rpcClient =
			config.rpcClient ??
			createSolanaRpcClient({
				commitment: this.commitment,
				endpoint: resolved.endpoint,
				websocketEndpoint: resolved.websocketEndpoint,
			});

		this.web3 =
			config.web3Connection ??
			new Connection(this.endpoint, {
				commitment: this.commitment,
				wsEndpoint: this.websocketEndpoint,
			} satisfies ConnectionConfig);
	}

	get rpc() {
		return this.rpcClient.rpc;
	}

	get rpcSubscriptions() {
		return this.rpcClient.rpcSubscriptions;
	}
}
